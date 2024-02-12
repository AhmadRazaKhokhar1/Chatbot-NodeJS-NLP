export declare function isNum(n: unknown): n is number;
export declare function isNaN(n: unknown): n is typeof NaN;
export declare function isInt(n: unknown): n is number;
export declare function isFloat(n: unknown): n is number;
export declare function isFiniteNum(n: unknown): n is number;
export declare function isFiniteInt(n: unknown): n is number;
export declare function isFiniteFloat(n: unknown): n is number;
export declare function isInfinity(n: unknown): n is typeof Infinity;
export declare function isZero(n: unknown): n is 0;
export declare function isPositive(n: unknown): n is number;
export declare function isNegative(n: unknown): n is number;
/**
 * @see https://github.com/jonschlinkert/is-number/blob/master/index.js
 */
export declare function isUnSafeNumString(n: unknown): n is string;
/**
 * @see https://github.com/jonschlinkert/is-number/blob/master/index.js
 */
export declare function isUnSafeNumLike(n: unknown): n is number | string;

export {};
