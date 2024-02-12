'use strict';

function createClassProxy(target, handler) {
  let construct;
  if (handler.construct) {
    construct = handler.construct;
  }
  return new Proxy(target, {
    construct(target, args) {
      let obj;
      if (construct) {
        obj = construct(target, args);
      } else {
        obj = new target(...args);
      }
      return new Proxy(obj, handler);
    }
  });
}
{
  Object.defineProperty(createClassProxy, "__esModule", {
    value: true
  });
  Object.defineProperty(createClassProxy, 'createClassProxy', {
    value: createClassProxy
  });
  Object.defineProperty(createClassProxy, 'createClassProxy2', {
    value: createClassProxy
  });
  Object.defineProperty(createClassProxy, 'default', {
    value: createClassProxy
  });
}

/**
 * Created by user on 2018/2/11/011.
 */

// @ts-ignore
module.exports = createClassProxy;
//# sourceMappingURL=index.cjs.development.cjs.map
