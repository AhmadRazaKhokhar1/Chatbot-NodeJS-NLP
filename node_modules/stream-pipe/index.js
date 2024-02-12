"use strict";
/**
 * Created by user on 2018/4/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.createReadStream = void 0;
const fs_1 = require("fs");
const fs_2 = require("./fs");
Object.defineProperty(exports, "createReadStream", { enumerable: true, get: function () { return fs_2.createReadStream; } });
function pipe(srcStream, destStream, options) {
    let _dest = destStream;
    _dest.pipeFrom = srcStream;
    if (srcStream instanceof fs_2.ReadStream) {
        return fs_1.ReadStream.prototype.pipe.call(srcStream, _dest);
    }
    return srcStream.pipe(_dest);
}
exports.pipe = pipe;
exports.default = pipe;
//# sourceMappingURL=index.js.map