
declare module 'fast-glob/out/settings' {
	type EntryObjectModePredicate = {
		[P in keyof Pick<Options, 'objectMode'>]-?: true;
	};
	type EntryStatsPredicate = {
		[P in keyof Pick<Options, 'stats'>]-?: true;
	};
	type EntryObjectPredicate = EntryObjectModePredicate | EntryStatsPredicate;
	type OptionsWithEntryObjectPredicate = Options & EntryObjectPredicate;
}

export * from 'fast-glob/out/settings';
