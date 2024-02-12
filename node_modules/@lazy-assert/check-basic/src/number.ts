export function isNum(n: unknown): n is number
{
	return typeof n === 'number' && n === +n
}

export function isNaN(n: unknown): n is typeof NaN
{
	return Number.isNaN(n)
}

export function isInt(n: unknown): n is number
{
	return (n === Math.floor(n as any))
}

export function isFloat(n: unknown): n is number
{
	return isNum(n) && !isInt(n);
}

export function isFiniteNum(n: unknown): n is number
{
	return isNum(n) && isFinite(n);
}

export function isFiniteInt(n: unknown): n is number
{
	return isFiniteNum(n) && isInt(n)
}

export function isFiniteFloat(n: unknown): n is number
{
	return isFiniteNum(n) && isFloat(n)
}

export function isInfinity(n: unknown): n is typeof Infinity
{
	return (n === Infinity || n === -Infinity)
}

export function isZero(n: unknown): n is 0
{
	return n === 0 || n === -0
}

export function isPositive(n: unknown): n is number
{
	return isNum(n) && (n > 0 || n === Infinity)
}

export function isNegative(n: unknown): n is number
{
	return isNum(n) && (n < 0 || n === -Infinity)
}

/**
 * @see https://github.com/jonschlinkert/is-number/blob/master/index.js
 */
export function isUnSafeNumString(n: unknown): n is string
{
	if (typeof n === 'string')
	{
		n = n.trim();
		if (n !== '')
		{
			return isFinite(+n)
		}
	}
	return false;
}

/**
 * @see https://github.com/jonschlinkert/is-number/blob/master/index.js
 */
export function isUnSafeNumLike(n: unknown): n is number | string
{
	return isFiniteNum(n) || isUnSafeNumString(n)
}
