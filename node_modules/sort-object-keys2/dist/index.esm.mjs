import { array_unique_indexOf as e } from "@lazy-array/util-unique";

function sortObjectKeys(t, r) {
  let s = {};
  "function" == typeof r ? s.sort = r : Array.isArray(r) ? s.keys = r : s = Object.assign(s, r);
  let {keys: o = [], useSource: n} = s;
  if (Array.isArray(o) && (o = o.slice()), s.onlyKeys) {
    if (n = !1, "number" != typeof o.length || 0 === o.length) throw new ReferenceError("options.key is empty or not exists.");
  } else o = o.concat(Object.keys(t).sort(s.sort));
  o = e(o), s.desc && (o = o.reverse());
  let c = o.reduce((function(e, r) {
    return (s.allowNotExists || r in t) && (e[r] = t[r]), e;
  }), {});
  return n ? (Object.keys(c).forEach((function(e) {
    delete t[e], t[e] = c[e];
  })), t) : c;
}

export { sortObjectKeys as default, sortObjectKeys as sortObject, sortObjectKeys };
//# sourceMappingURL=index.esm.mjs.map
