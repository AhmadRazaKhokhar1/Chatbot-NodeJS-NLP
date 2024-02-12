"use strict";

var e = require("@lazy-array/util-unique");

function sortObjectKeys(t, r) {
  let s = {};
  "function" == typeof r ? s.sort = r : Array.isArray(r) ? s.keys = r : s = Object.assign(s, r);
  let {keys: o = [], useSource: c} = s;
  if (Array.isArray(o) && (o = o.slice()), s.onlyKeys) {
    if (c = !1, "number" != typeof o.length || 0 === o.length) throw new ReferenceError("options.key is empty or not exists.");
  } else o = o.concat(Object.keys(t).sort(s.sort));
  o = e.array_unique_indexOf(o), s.desc && (o = o.reverse());
  let y = o.reduce((function(e, r) {
    return (s.allowNotExists || r in t) && (e[r] = t[r]), e;
  }), {});
  return c ? (Object.keys(y).forEach((function(e) {
    delete t[e], t[e] = y[e];
  })), t) : y;
}

Object.defineProperty(sortObjectKeys, "sortObjectKeys", {
  value: sortObjectKeys
}), Object.defineProperty(sortObjectKeys, "sortObject", {
  value: sortObjectKeys
}), Object.defineProperty(sortObjectKeys, "default", {
  value: sortObjectKeys
}), Object.defineProperty(sortObjectKeys, "__esModule", {
  value: !0
}), module.exports = sortObjectKeys;
//# sourceMappingURL=index.cjs.production.min.cjs.map
