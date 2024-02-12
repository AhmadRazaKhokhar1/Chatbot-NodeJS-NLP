import { naturalCompare as _naturalCompare, IOptions as IOptionsStringNaturalCompare } from 'string-natural-compare2';

export type { IOptionsStringNaturalCompare }

export interface IOptionsNaturalCompare extends IOptionsStringNaturalCompare
{
	desc?: boolean,
}

/**
 * Compare alphanumeric strings the same way a human would,
 * using a natural order algorithm
 * (originally known as the alphanum algorithm)
 * where numeric characters are sorted
 * based on their numeric values rather than their ASCII values.
 */
export function naturalCompare(a: string | number, b: string | number, opts?: IOptionsNaturalCompare)
{
	let i: number;
	const typeA = typeof a === 'number';
	const typeB = typeof b === 'number';

	if (typeA && typeB)
	{
		// @ts-ignore
		i = a - b
	}
	else
	{
		if (typeA)
		{
			a = String(a);
		}
		if (typeB)
		{
			b = String(b);
		}

		if (a === b)
		{
			return 0
		}

		i = _naturalCompare(a as any, b as any, opts)
	}

	if (i !== 0 && opts?.desc)
	{
		i = 0 - i;
	}

	return i
}

export type ICompareFn = (a: string | number, b: string | number) => number;

/**
 * create compare with preset options
 */
export function createNew(opts?: IOptionsNaturalCompare): ICompareFn
{
	return (a: string | number, b: string | number) => naturalCompare(a, b, opts)
}

/**
 * compare strings case-insensitively
 */
export const compareCaseInsensitive = createNew({
	caseInsensitive: true,
})

export { compareCaseInsensitive as caseInsensitive }

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(naturalCompare, "__esModule", { value: true });

	Object.defineProperty(naturalCompare, "default", { value: naturalCompare });
	Object.defineProperty(naturalCompare, "naturalCompare", { value: naturalCompare });

	Object.defineProperty(naturalCompare, "createNew", { value: createNew });
	Object.defineProperty(naturalCompare, "compareCaseInsensitive", { value: compareCaseInsensitive });
	Object.defineProperty(naturalCompare, "caseInsensitive", { value: compareCaseInsensitive });
}

export default naturalCompare
