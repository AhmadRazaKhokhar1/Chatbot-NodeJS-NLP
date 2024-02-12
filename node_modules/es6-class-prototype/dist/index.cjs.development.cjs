'use strict';

function classPrototype(target, all) {
  let desc = Object.getOwnPropertyDescriptors(target.prototype);
  let prototype = Object.keys(desc).reduce(function (a, b) {
    if (all || !desc[b].get && !desc[b].set) {
      a[b] = target.prototype[b];
    }
    return a;
  }, {});
  return Object.assign({}, target.prototype, prototype);
}
{
  Object.defineProperty(classPrototype, "__esModule", {
    value: true
  });
  Object.defineProperty(classPrototype, 'classPrototype', {
    value: classPrototype
  });
  Object.defineProperty(classPrototype, 'default', {
    value: classPrototype
  });
}

/**
 * Created by user on 2018/2/11/011.
 */

// @ts-ignore
module.exports = classPrototype;
//# sourceMappingURL=index.cjs.development.cjs.map
