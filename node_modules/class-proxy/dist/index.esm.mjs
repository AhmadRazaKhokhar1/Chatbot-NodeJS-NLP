function createClassProxy(r, e) {
  let t;
  return e.construct && (t = e.construct), new Proxy(r, {
    construct(r, s) {
      let a;
      return a = t ? t(r, s) : new r(...s), new Proxy(a, e);
    }
  });
}

function createClassProxy2(r, e) {
  return createClassProxy(r, e);
}

export { createClassProxy, createClassProxy2, createClassProxy as default };
//# sourceMappingURL=index.esm.mjs.map
