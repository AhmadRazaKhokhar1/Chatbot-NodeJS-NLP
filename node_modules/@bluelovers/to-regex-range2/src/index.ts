/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

import { isUnSafeNumLike as isNumber } from '@lazy-assert/check-basic';

export interface IOptions
{
	/**
	 * Wrap the returned value in parentheses when there is more than one regex condition. Useful when you're dynamically generating ranges.
	 *
	 * @example
	 * console.log(toRegexRange('-10', '10'));
	 * //=> -[1-9]|-?10|[0-9]
	 *
	 * console.log(toRegexRange('-10', '10', { capture: true }));
	 * //=> (-[1-9]|-?10|[0-9])
	 */
	capture?: boolean,
	/**
	 * Use the regex shorthand for [0-9]:
	 *
	 * @example
	 * console.log(toRegexRange('0', '999999'));
	 * //=> [0-9]|[1-9][0-9]{1,5}
	 *
	 * console.log(toRegexRange('0', '999999', { shorthand: true }));
	 * //=> \d|[1-9]\d{1,5}
	 */
	shorthand?: boolean,
	/**
	 * @default true
	 * This option relaxes matching for leading zeros when when ranges are zero-padded.
	 * @example
	 * const source = toRegexRange('-0010', '0010');
	 * const regex = new RegExp(`^${source}$`);
	 * console.log(regex.test('-10')); //=> true
	 * console.log(regex.test('-010')); //=> true
	 * console.log(regex.test('-0010')); //=> true
	 * console.log(regex.test('10')); //=> true
	 * console.log(regex.test('010')); //=> true
	 * console.log(regex.test('0010')); //=> true
	 * @example When `relaxZeros` is false, matching is strict:
	 * const source = toRegexRange('-0010', '0010', { relaxZeros: false });
	 * const regex = new RegExp(`^${source}$`);
	 * console.log(regex.test('-10')); //=> false
	 * console.log(regex.test('-010')); //=> false
	 * console.log(regex.test('-0010')); //=> true
	 * console.log(regex.test('10')); //=> false
	 * console.log(regex.test('010')); //=> false
	 * console.log(regex.test('0010')); //=> true
	 */
	relaxZeros?: boolean,

	strictZeros?: boolean,
	wrap?: boolean,
}

export const SymCache = Symbol.for('SymCache');

function isAllowedValue(value: unknown)
{
	if (isNumber(value) === true)
	{
		if (typeof value === 'string')
		{
			return /^-?\d+$/.test(value);
		}

		return true
	}

	return false
}

export function toRegexRange(min: number | string, max?: number | string, options?: IOptions): string
{
	if (!isAllowedValue(min))
	{
		throw new TypeError(`toRegexRange: expected the first argument '${min}' to be a number like.`);
	}

	if (max === void 0 || min === max)
	{
		return String(min);
	}

	if (!isAllowedValue(max))
	{
		throw new TypeError(`toRegexRange: expected the second argument '${max}' to be a number like.`);
	}

	min = String(min);
	max = String(max);

	let opts: IOptions = { relaxZeros: true, ...options };
	if (typeof opts.strictZeros === 'boolean')
	{
		opts.relaxZeros = opts.strictZeros === false;
	}

	let relax = String(opts.relaxZeros);
	let shorthand = String(opts.shorthand);
	let capture = String(opts.capture);
	let wrap = String(opts.wrap);
	let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;

	if (toRegexRange[SymCache].hasOwnProperty(cacheKey))
	{
		// @ts-ignore
		return toRegexRange[SymCache][cacheKey].result;
	}

	// @ts-ignore
	let a = Math.min(min, max);
	// @ts-ignore
	let b = Math.max(min, max);

	if (Math.abs(a - b) === 1)
	{
		let result = min + '|' + max;
		if (opts.capture)
		{
			return `(${result})`;
		}
		if (opts.wrap === false)
		{
			return result;
		}
		return `(?:${result})`;
	}

	let isPadded = hasPadding(min) || hasPadding(max);
	let state: any = { min, max, a, b };
	let positives = [];
	let negatives = [];

	if (isPadded)
	{
		state.isPadded = isPadded;
		state.maxLen = String(state.max).length;
	}

	if (a < 0)
	{
		let newMin = b < 0 ? Math.abs(b) : 1;
		negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
		a = state.a = 0;
	}

	if (b >= 0)
	{
		positives = splitToPatterns(a, b, state, opts);
	}

	state.negatives = negatives;
	state.positives = positives;
	state.result = collatePatterns(negatives, positives, opts);

	if (opts.capture === true)
	{
		state.result = `(${state.result})`;
	}
	else if (opts.wrap !== false && (positives.length + negatives.length) > 1)
	{
		state.result = `(?:${state.result})`;
	}

	toRegexRange[SymCache][cacheKey] = state;
	return state.result;
}

function collatePatterns(neg, pos, options)
{
	let onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
	let onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
	let intersected = filterPatterns(neg, pos, '-?', true, options) || [];
	let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
	return subpatterns.join('|');
}

function splitToRanges(min, max)
{
	let nines = 1;
	let zeros = 1;

	let stop = countNines(min, nines);
	let stops: any = new Set([max]);

	while (min <= stop && stop <= max)
	{
		stops.add(stop);
		nines += 1;
		stop = countNines(min, nines);
	}

	stop = countZeros(max + 1, zeros) - 1;

	while (min < stop && stop <= max)
	{
		stops.add(stop);
		zeros += 1;
		stop = countZeros(max + 1, zeros) - 1;
	}

	stops = [...stops];
	stops.sort(compare);
	return stops;
}

/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */

function rangeToPattern(start, stop, options)
{
	if (start === stop)
	{
		return { pattern: start, count: [], digits: 0 };
	}

	let zipped = zip(start, stop);
	let digits = zipped.length;
	let pattern = '';
	let count = 0;

	for (let i = 0; i < digits; i++)
	{
		let [startDigit, stopDigit] = zipped[i];

		if (startDigit === stopDigit)
		{
			pattern += startDigit;

		}
		else if (startDigit !== '0' || stopDigit !== '9')
		{
			pattern += toCharacterClass(startDigit, stopDigit, options);

		}
		else
		{
			count++;
		}
	}

	if (count)
	{
		pattern += options.shorthand === true ? '\\d' : '[0-9]';
	}

	return { pattern, count: [count], digits };
}

function splitToPatterns(min, max, tok, options)
{
	let ranges = splitToRanges(min, max) as any as any[];
	let tokens = [];
	let start = min;
	let prev;

	for (let i = 0; i < ranges.length; i++)
	{
		let max = ranges[i];
		let obj = rangeToPattern(String(start), String(max), options) as any;
		let zeros = '';

		if (!tok.isPadded && prev && prev.pattern === obj.pattern)
		{
			if (prev.count.length > 1)
			{
				prev.count.pop();
			}

			prev.count.push(obj.count[0]);
			prev.string = prev.pattern + toQuantifier(prev.count);
			start = max + 1;
			continue;
		}

		if (tok.isPadded)
		{
			zeros = padZeros(max, tok, options);
		}

		obj.string = zeros + obj.pattern + toQuantifier(obj.count);
		tokens.push(obj);
		start = max + 1;
		prev = obj;
	}

	return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options)
{
	let result = [];

	for (let ele of arr)
	{
		let { string } = ele;

		// only push if _both_ are negative...
		if (!intersection && !contains(comparison, 'string', string))
		{
			result.push(prefix + string);
		}

		// or _both_ are positive
		if (intersection && contains(comparison, 'string', string))
		{
			result.push(prefix + string);
		}
	}
	return result;
}

/**
 * Zip strings
 */

function zip(a, b)
{
	let arr = [];
	for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
	return arr;
}

function compare(a, b)
{
	return a > b ? 1 : b > a ? -1 : 0;
}

function contains(arr, key, val)
{
	return arr.some(ele => ele[key] === val);
}

function countNines(min, len)
{
	return Number(String(min).slice(0, -len) + '9'.repeat(len));
}

function countZeros(integer, zeros)
{
	return integer - (integer % Math.pow(10, zeros));
}

function toQuantifier(digits)
{
	let [start = 0, stop = ''] = digits;
	if (stop || start > 1)
	{
		return `{${start + (stop ? ',' + stop : '')}}`;
	}
	return '';
}

function toCharacterClass(a, b, options)
{
	return `[${a}${(b - a === 1) ? '' : '-'}${b}]`;
}

function hasPadding(str)
{
	return /^-?(0+)\d/.test(str);
}

function padZeros(value, tok, options)
{
	if (!tok.isPadded)
	{
		return value;
	}

	let diff = Math.abs(tok.maxLen - String(value).length);
	let relax = options.relaxZeros !== false;

	switch (diff)
	{
		case 0:
			return '';
		case 1:
			return relax ? '0?' : '0';
		case 2:
			return relax ? '0{0,2}' : '00';
		default:
		{
			return relax ? `0{0,${diff}}` : `0{${diff}}`;
		}
	}
}

/**
 * Cache
 */

toRegexRange[SymCache] = {};
toRegexRange.clearCache = () => (toRegexRange[SymCache] = {});

Object.defineProperty(toRegexRange, 'toRegexRange', { value: toRegexRange });
Object.defineProperty(toRegexRange, 'default', { value: toRegexRange });
Object.defineProperty(toRegexRange, 'SymCache', { value: SymCache });

/**
 * Expose `toRegexRange`
 */
export default toRegexRange;
