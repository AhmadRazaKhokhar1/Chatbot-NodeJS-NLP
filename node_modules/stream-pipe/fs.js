"use strict";
/**
 * Created by user on 2018/4/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReadStream = exports.ReadStream = void 0;
const fs_1 = require("fs");
const index_1 = require("./index");
class ReadStream extends fs_1.ReadStream {
    constructor(file, ...argv) {
        // @ts-ignore
        super(file, ...argv);
        this.cwd = process.cwd();
    }
    pipe(destination, options) {
        return index_1.pipe(this, destination, options);
    }
    static createReadStream(file, options, ...argv) {
        // @ts-ignore
        return new this(file, options, ...argv);
    }
}
exports.ReadStream = ReadStream;
exports.createReadStream = ReadStream.createReadStream.bind(ReadStream);
exports.default = exports.createReadStream;
//# sourceMappingURL=fs.js.map