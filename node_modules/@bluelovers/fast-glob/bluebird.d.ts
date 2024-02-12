/**
 * Created by user on 2019/6/27.
 */
/// <reference path="./settings.d.ts" />
/// <reference types="node" />
import * as _setting from 'fast-glob/out/settings';
import * as _types from 'fast-glob/out/types';
import _FastGlob_ = require('fast-glob');
import Bluebird = require('bluebird');
import Pattern = _FastGlob_.Pattern;
import Options = _FastGlob_.Options;
import OptionsWithEntryObjectPredicate = _setting.OptionsWithEntryObjectPredicate;
import Entry = _FastGlob_.Entry;
import EntryItem = _types.EntryItem;
declare function FastGlob(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Bluebird<Entry[]>;
declare namespace FastGlob {
    var default: typeof FastGlob;
}
declare function FastGlob(source: Pattern | Pattern[], options?: Options): Bluebird<string[]>;
declare namespace FastGlob {
    var default: typeof FastGlob;
}
declare function FastGlob<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): Bluebird<T[]>;
declare namespace FastGlob {
    var default: typeof FastGlob;
}
declare namespace FastGlob {
    export import Options = _FastGlob_.Options;
    export import OptionsWithEntryObjectPredicate = _setting.OptionsWithEntryObjectPredicate;
    export import Entry = _FastGlob_.Entry;
    export import EntryItem = _types.EntryItem;
    export import Task = _FastGlob_.Task;
    export import Pattern = _FastGlob_.Pattern;
    export import FileSystemAdapter = _FastGlob_.FileSystemAdapter;
    function async(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Bluebird<Entry[]>;
    function async(source: Pattern | Pattern[], options?: Options): Bluebird<string[]>;
    function async<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): Bluebird<T[]>;
    function sync(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Entry[];
    function sync(source: Pattern | Pattern[], options?: Options): string[];
    function sync<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): T[];
    function stream(source: Pattern | Pattern[], options?: Options): NodeJS.ReadableStream;
    function generateTasks(source: Pattern | Pattern[], options?: Options): Task[];
}
export = FastGlob;
