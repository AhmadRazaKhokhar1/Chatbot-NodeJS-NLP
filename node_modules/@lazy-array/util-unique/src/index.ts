type ITSValueOfTuple<T extends readonly any[]> =
	T extends readonly [...infer U]
			? U : never
	;

export function array_unique_indexOf<T extends readonly any[]>(arr: T)
{
	return arr.filter(function (el, index, arr)
	{
		return index === arr.indexOf(el);
	}) as any as ITSValueOfTuple<T>;
}

export function array_unique_by_set<T extends readonly any[]>(arr: T)
{
	return [...new Set(arr)] as any as ITSValueOfTuple<T>;
}

