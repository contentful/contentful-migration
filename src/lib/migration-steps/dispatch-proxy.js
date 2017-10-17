'use strict';

const getFirstExternalCaller = require('./first-external-caller');

/*
  Base class that dynamically dispatches property update messages based on the function being called
  For example, if the proxy is called with `proxy.name('foo')` it dispatches a message with `props: { name: 'foo' }`
  That means that any dispatch function is dynamically created at call time,
  making it unnecessary to implement every step of the DSL manually.
  If an existing method is found on the instance, that method is returned instead
*/

class DispatchProxy {
  constructor ({ dispatchUpdate }) {
    const dispatchProxy = new Proxy(this, {
      get: function (target, propertyName) {
        // Promises are determined by duck-typing
        // if `then` or `catch` are defined, it's treated as
        // thenable, which needs to be resolved first.
        // Since we return the proxy for every unknown value
        // this breaks asynchronous migration functions.
        if (['then', 'catch'].includes(propertyName)) {
          return void 0;
        }

        if (propertyName in target) {
          return target[propertyName];
        }

        return function (propertyValue) {
          const callsite = getFirstExternalCaller();
          dispatchUpdate(callsite, propertyName, propertyValue);
          return this;
        };
      }
    });

    return dispatchProxy;
  }
}

module.exports = DispatchProxy;
