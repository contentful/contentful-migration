'use strict';

const createPredicateSlicer = require('./predicate');

module.exports = createPredicateSlicer((list) => {
  const currentCT = list[0].payload.contentTypeId;

  return (item) => item.payload.contentTypeId === currentCT;
});
