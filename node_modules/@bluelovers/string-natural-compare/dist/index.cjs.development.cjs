'use strict';

var stringNaturalCompare2 = require('string-natural-compare2');

function naturalCompare(a, b, opts) {
  let i;
  const typeA = typeof a === 'number';
  const typeB = typeof b === 'number';
  if (typeA && typeB) {
    i = a - b;
  } else {
    if (typeA) {
      a = String(a);
    }
    if (typeB) {
      b = String(b);
    }
    if (a === b) {
      return 0;
    }
    i = stringNaturalCompare2.naturalCompare(a, b, opts);
  }
  if (i !== 0 && opts !== null && opts !== void 0 && opts.desc) {
    i = 0 - i;
  }
  return i;
}
function createNew(opts) {
  return (a, b) => naturalCompare(a, b, opts);
}
const compareCaseInsensitive = /*#__PURE__*/createNew({
  caseInsensitive: true
});
{
  Object.defineProperty(naturalCompare, "__esModule", {
    value: true
  });
  Object.defineProperty(naturalCompare, "default", {
    value: naturalCompare
  });
  Object.defineProperty(naturalCompare, "naturalCompare", {
    value: naturalCompare
  });
  Object.defineProperty(naturalCompare, "createNew", {
    value: createNew
  });
  Object.defineProperty(naturalCompare, "compareCaseInsensitive", {
    value: compareCaseInsensitive
  });
  Object.defineProperty(naturalCompare, "caseInsensitive", {
    value: compareCaseInsensitive
  });
}

// @ts-ignore
module.exports = naturalCompare;
//# sourceMappingURL=index.cjs.development.cjs.map
