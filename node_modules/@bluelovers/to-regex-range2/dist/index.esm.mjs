import { isUnSafeNumLike as e } from "@lazy-assert/check-basic";

const t = Symbol.for("SymCache");

function isAllowedValue(t) {
  return !0 === e(t) && ("string" != typeof t || /^-?\d+$/.test(t));
}

function toRegexRange(e, n, r) {
  if (!isAllowedValue(e)) throw new TypeError(`toRegexRange: expected the first argument '${e}' to be a number like.`);
  if (void 0 === n || e === n) return String(e);
  if (!isAllowedValue(n)) throw new TypeError(`toRegexRange: expected the second argument '${n}' to be a number like.`);
  e = String(e), n = String(n);
  let a = {
    relaxZeros: !0,
    ...r
  };
  "boolean" == typeof a.strictZeros && (a.relaxZeros = !1 === a.strictZeros);
  let o = e + ":" + n + "=" + String(a.relaxZeros) + String(a.shorthand) + String(a.capture) + String(a.wrap);
  if (toRegexRange[t].hasOwnProperty(o)) return toRegexRange[t][o].result;
  let i = Math.min(e, n), s = Math.max(e, n);
  if (1 === Math.abs(i - s)) {
    let t = e + "|" + n;
    return a.capture ? `(${t})` : !1 === a.wrap ? t : `(?:${t})`;
  }
  let u = hasPadding(e) || hasPadding(n), g = {
    min: e,
    max: n,
    a: i,
    b: s
  }, l = [], c = [];
  return u && (g.isPadded = u, g.maxLen = String(g.max).length), i < 0 && (c = splitToPatterns(s < 0 ? Math.abs(s) : 1, Math.abs(i), g, a), 
  i = g.a = 0), s >= 0 && (l = splitToPatterns(i, s, g, a)), g.negatives = c, g.positives = l, 
  g.result = function collatePatterns(e, t, n) {
    let r = filterPatterns(e, t, "-", !1) || [], a = filterPatterns(t, e, "", !1) || [], o = filterPatterns(e, t, "-?", !0) || [];
    return r.concat(o).concat(a).join("|");
  }(c, l), !0 === a.capture ? g.result = `(${g.result})` : !1 !== a.wrap && l.length + c.length > 1 && (g.result = `(?:${g.result})`), 
  toRegexRange[t][o] = g, g.result;
}

function rangeToPattern(e, t, n) {
  if (e === t) return {
    pattern: e,
    count: [],
    digits: 0
  };
  let r = function zip(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) n.push([ e[r], t[r] ]);
    return n;
  }(e, t), a = r.length, o = "", i = 0;
  for (let e = 0; e < a; e++) {
    let [t, n] = r[e];
    t === n ? o += t : "0" !== t || "9" !== n ? o += `[${s = t}${(u = n) - s == 1 ? "" : "-"}${u}]` : i++;
  }
  var s, u;
  return i && (o += !0 === n.shorthand ? "\\d" : "[0-9]"), {
    pattern: o,
    count: [ i ],
    digits: a
  };
}

function splitToPatterns(e, t, n, r) {
  let a, o = function splitToRanges(e, t) {
    let n = 1, r = 1, a = countNines(e, n), o = new Set([ t ]);
    for (;e <= a && a <= t; ) o.add(a), n += 1, a = countNines(e, n);
    for (a = countZeros(t + 1, r) - 1; e < a && a <= t; ) o.add(a), r += 1, a = countZeros(t + 1, r) - 1;
    return o = [ ...o ], o.sort(compare), o;
  }(e, t), i = [], s = e;
  for (let e = 0; e < o.length; e++) {
    let t = o[e], u = rangeToPattern(String(s), String(t), r), g = "";
    n.isPadded || !a || a.pattern !== u.pattern ? (n.isPadded && (g = padZeros(t, n, r)), 
    u.string = g + u.pattern + toQuantifier(u.count), i.push(u), s = t + 1, a = u) : (a.count.length > 1 && a.count.pop(), 
    a.count.push(u.count[0]), a.string = a.pattern + toQuantifier(a.count), s = t + 1);
  }
  return i;
}

function filterPatterns(e, t, n, r, a) {
  let o = [];
  for (let a of e) {
    let {string: e} = a;
    r || contains(t, "string", e) || o.push(n + e), r && contains(t, "string", e) && o.push(n + e);
  }
  return o;
}

function compare(e, t) {
  return e > t ? 1 : t > e ? -1 : 0;
}

function contains(e, t, n) {
  return e.some((e => e[t] === n));
}

function countNines(e, t) {
  return Number(String(e).slice(0, -t) + "9".repeat(t));
}

function countZeros(e, t) {
  return e - e % Math.pow(10, t);
}

function toQuantifier(e) {
  let [t = 0, n = ""] = e;
  return n || t > 1 ? `{${t + (n ? "," + n : "")}}` : "";
}

function hasPadding(e) {
  return /^-?(0+)\d/.test(e);
}

function padZeros(e, t, n) {
  if (!t.isPadded) return e;
  let r = Math.abs(t.maxLen - String(e).length), a = !1 !== n.relaxZeros;
  switch (r) {
   case 0:
    return "";

   case 1:
    return a ? "0?" : "0";

   case 2:
    return a ? "0{0,2}" : "00";

   default:
    return a ? `0{0,${r}}` : `0{${r}}`;
  }
}

toRegexRange[t] = {}, toRegexRange.clearCache = () => toRegexRange[t] = {}, Object.defineProperty(toRegexRange, "toRegexRange", {
  value: toRegexRange
}), Object.defineProperty(toRegexRange, "default", {
  value: toRegexRange
}), Object.defineProperty(toRegexRange, "SymCache", {
  value: t
});

export { t as SymCache, toRegexRange as default, toRegexRange };
//# sourceMappingURL=index.esm.mjs.map
