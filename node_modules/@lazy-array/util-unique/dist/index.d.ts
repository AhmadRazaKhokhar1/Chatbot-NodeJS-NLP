type ITSValueOfTuple<T extends readonly any[]> = T extends readonly [...infer U] ? U : never;
export declare function array_unique_indexOf<T extends readonly any[]>(arr: T): ITSValueOfTuple<T>;
export declare function array_unique_by_set<T extends readonly any[]>(arr: T): ITSValueOfTuple<T>;
export {};
