import { naturalCompare as e } from "string-natural-compare2";

function naturalCompare(r, a, t) {
  let n;
  const o = "number" == typeof r, u = "number" == typeof a;
  if (o && u) n = r - a; else {
    if (o && (r = String(r)), u && (a = String(a)), r === a) return 0;
    n = e(r, a, t);
  }
  return 0 !== n && null != t && t.desc && (n = 0 - n), n;
}

function createNew(e) {
  return (r, a) => naturalCompare(r, a, e);
}

const r = createNew({
  caseInsensitive: !0
});

export { r as caseInsensitive, r as compareCaseInsensitive, createNew, naturalCompare as default, naturalCompare };
//# sourceMappingURL=index.esm.mjs.map
