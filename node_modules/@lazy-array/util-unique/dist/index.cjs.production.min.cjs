"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.array_unique_by_set = function array_unique_by_set(e) {
  return [ ...new Set(e) ];
}, exports.array_unique_indexOf = function array_unique_indexOf(e) {
  return e.filter((function(e, r, n) {
    return r === n.indexOf(e);
  }));
};
//# sourceMappingURL=index.cjs.production.min.cjs.map
