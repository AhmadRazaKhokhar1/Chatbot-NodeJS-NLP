'use strict';

var utilUnique = require('@lazy-array/util-unique');

function sortObjectKeys(object, sortWith) {
  let options = {};
  if (typeof sortWith === 'function') {
    options.sort = sortWith;
  } else if (Array.isArray(sortWith)) {
    options.keys = sortWith;
  } else {
    options = Object.assign(options, sortWith);
  }
  let {
    keys = [],
    useSource
  } = options;
  if (Array.isArray(keys)) {
    keys = keys.slice();
  }
  if (options.onlyKeys) {
    useSource = false;
    if (typeof keys.length !== 'number' || keys.length === 0) {
      throw new ReferenceError(`options.key is empty or not exists.`);
    }
  } else {
    keys = keys.concat(Object.keys(object).sort(options.sort));
  }
  keys = utilUnique.array_unique_indexOf(keys);
  if (options.desc) {
    keys = keys.reverse();
  }
  let ret = keys.reduce(function (total, key) {
    if (options.allowNotExists || key in object) {
      total[key] = object[key];
    }
    return total;
  }, {});
  if (useSource) {
    Object.keys(ret).forEach(function (key) {
      delete object[key];
      object[key] = ret[key];
    });
    return object;
  }
  return ret;
}
{
  Object.defineProperty(sortObjectKeys, 'sortObjectKeys', {
    value: sortObjectKeys
  });
  Object.defineProperty(sortObjectKeys, 'sortObject', {
    value: sortObjectKeys
  });
  Object.defineProperty(sortObjectKeys, 'default', {
    value: sortObjectKeys
  });
  Object.defineProperty(sortObjectKeys, "__esModule", {
    value: true
  });
}

// @ts-ignore
module.exports = sortObjectKeys;
//# sourceMappingURL=index.cjs.development.cjs.map
