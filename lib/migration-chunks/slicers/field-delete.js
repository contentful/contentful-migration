'use strict';

const createPredicateSlicer = require('./predicate');

module.exports = createPredicateSlicer((list) => {
  const isDelete = list[0].type === 'field/delete';

  if (!isDelete) {
    return (item) => item.type !== 'field/delete';
  }
  return (item) => {
    const isSameField = list[0].payload.fieldId === item.payload.fieldId;
    return item.type === 'field/delete' && isSameField;
  };
});
