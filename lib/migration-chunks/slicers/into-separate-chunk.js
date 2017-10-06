'use strict';

const createPredicateSlicer = require('./predicate');

const returnTrueOnce = function () {
  let neverCalled = true;
  return function () {
    const ret = neverCalled;
    neverCalled = false;
    return ret;
  };
};

module.exports = (itemType) => {
  const isItemType = (item) => item.type === itemType;
  return createPredicateSlicer((list) => {
    if (isItemType(list[0])) {
      return returnTrueOnce();
    }
    return (item) => {
      return !isItemType(item);
    };
  });
};
