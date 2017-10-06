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
      // The slicer receives a function returning true for every
      // item that should go into a chunk. We only want one item,
      // hence we return true once
      return returnTrueOnce();
    }

    return (item) => !isItemType(item);
  });
};
