'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function array_unique_indexOf(arr) {
  return arr.filter(function (el, index, arr) {
    return index === arr.indexOf(el);
  });
}
function array_unique_by_set(arr) {
  return [...new Set(arr)];
}

exports.array_unique_by_set = array_unique_by_set;
exports.array_unique_indexOf = array_unique_indexOf;
//# sourceMappingURL=index.cjs.development.cjs.map
