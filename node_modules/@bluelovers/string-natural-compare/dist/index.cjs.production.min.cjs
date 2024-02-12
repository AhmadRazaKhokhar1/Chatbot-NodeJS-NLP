"use strict";

var e = require("string-natural-compare2");

function naturalCompare(r, a, t) {
  let n;
  const u = "number" == typeof r, o = "number" == typeof a;
  if (u && o) n = r - a; else {
    if (u && (r = String(r)), o && (a = String(a)), r === a) return 0;
    n = e.naturalCompare(r, a, t);
  }
  return 0 !== n && null != t && t.desc && (n = 0 - n), n;
}

function createNew(e) {
  return (r, a) => naturalCompare(r, a, e);
}

const r = createNew({
  caseInsensitive: !0
});

Object.defineProperty(naturalCompare, "__esModule", {
  value: !0
}), Object.defineProperty(naturalCompare, "default", {
  value: naturalCompare
}), Object.defineProperty(naturalCompare, "naturalCompare", {
  value: naturalCompare
}), Object.defineProperty(naturalCompare, "createNew", {
  value: createNew
}), Object.defineProperty(naturalCompare, "compareCaseInsensitive", {
  value: r
}), Object.defineProperty(naturalCompare, "caseInsensitive", {
  value: r
}), module.exports = naturalCompare;
//# sourceMappingURL=index.cjs.production.min.cjs.map
