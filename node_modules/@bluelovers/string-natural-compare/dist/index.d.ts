import { IOptions as IOptionsStringNaturalCompare } from 'string-natural-compare2';

export interface IOptionsNaturalCompare extends IOptionsStringNaturalCompare {
	desc?: boolean;
}
/**
 * Compare alphanumeric strings the same way a human would,
 * using a natural order algorithm
 * (originally known as the alphanum algorithm)
 * where numeric characters are sorted
 * based on their numeric values rather than their ASCII values.
 */
export declare function naturalCompare(a: string | number, b: string | number, opts?: IOptionsNaturalCompare): number;
export type ICompareFn = (a: string | number, b: string | number) => number;
/**
 * create compare with preset options
 */
export declare function createNew(opts?: IOptionsNaturalCompare): ICompareFn;
/**
 * compare strings case-insensitively
 */
export declare const compareCaseInsensitive: ICompareFn;

export {
	IOptions as IOptionsStringNaturalCompare,
	compareCaseInsensitive as caseInsensitive,
	naturalCompare as default,
};

export {};
