'use strict';

const createPredicateSlicer = require('./predicate');
const isFieldIdChange = (item) => item.type === 'field/rename';

module.exports = createPredicateSlicer((list) => {
  if (isFieldIdChange(list[0])) {
    return (item) => {
      const isSameField = list[0].payload.fieldId === item.payload.fieldId;
      return isSameField && isFieldIdChange(item);
    };
  }
  return (item) => {
    return !isFieldIdChange(item);
  };
});
