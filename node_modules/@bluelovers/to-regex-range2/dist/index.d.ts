export interface IOptions {
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
	capture?: boolean;
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
	shorthand?: boolean;
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
	relaxZeros?: boolean;
	strictZeros?: boolean;
	wrap?: boolean;
}
export declare const SymCache: unique symbol;
export declare function toRegexRange(min: number | string, max?: number | string, options?: IOptions): string;
export declare namespace toRegexRange {
	var clearCache: () => {};
}

export {
	toRegexRange as default,
};

export {};
