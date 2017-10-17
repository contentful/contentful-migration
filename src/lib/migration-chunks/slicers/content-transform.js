'use strict';

const createPredicateSlicer = require('./predicate');

module.exports = createPredicateSlicer((list) => {
  const isContentTransform = list[0].type === 'contentType/transformContent';

  if (!isContentTransform) {
    return (item) => item.type !== 'contentType/transformContent';
  }
  return (item) => {
    return item.type === 'contentType/transformContent';
  };
});
