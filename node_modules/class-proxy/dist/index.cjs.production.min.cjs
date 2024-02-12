"use strict";

function createClassProxy(e, r) {
  let t;
  return r.construct && (t = r.construct), new Proxy(e, {
    construct(e, s) {
      let a;
      return a = t ? t(e, s) : new e(...s), new Proxy(a, r);
    }
  });
}

Object.defineProperty(createClassProxy, "__esModule", {
  value: !0
}), Object.defineProperty(createClassProxy, "createClassProxy", {
  value: createClassProxy
}), Object.defineProperty(createClassProxy, "createClassProxy2", {
  value: createClassProxy
}), Object.defineProperty(createClassProxy, "default", {
  value: createClassProxy
}), module.exports = createClassProxy;
//# sourceMappingURL=index.cjs.production.min.cjs.map
