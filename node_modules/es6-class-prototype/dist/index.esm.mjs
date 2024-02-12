function classPrototype(t, e) {
  let o = Object.getOwnPropertyDescriptors(t.prototype), r = Object.keys(o).reduce((function(r, s) {
    return (e || !o[s].get && !o[s].set) && (r[s] = t.prototype[s]), r;
  }), {});
  return Object.assign({}, t.prototype, r);
}

export { classPrototype, classPrototype as default };
//# sourceMappingURL=index.esm.mjs.map
