"use strict";

function classPrototype(e, t) {
  let o = Object.getOwnPropertyDescriptors(e.prototype), r = Object.keys(o).reduce((function(r, s) {
    return (t || !o[s].get && !o[s].set) && (r[s] = e.prototype[s]), r;
  }), {});
  return Object.assign({}, e.prototype, r);
}

Object.defineProperty(classPrototype, "__esModule", {
  value: !0
}), Object.defineProperty(classPrototype, "classPrototype", {
  value: classPrototype
}), Object.defineProperty(classPrototype, "default", {
  value: classPrototype
}), module.exports = classPrototype;
//# sourceMappingURL=index.cjs.production.min.cjs.map
