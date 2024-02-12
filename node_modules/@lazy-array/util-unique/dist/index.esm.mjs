function array_unique_indexOf(n) {
  return n.filter((function(n, e, r) {
    return e === r.indexOf(n);
  }));
}

function array_unique_by_set(n) {
  return [ ...new Set(n) ];
}

export { array_unique_by_set, array_unique_indexOf };
//# sourceMappingURL=index.esm.mjs.map
