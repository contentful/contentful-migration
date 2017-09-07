'use strict';

const errors = {
  INVALID_PROPERTY_NAME: (propName, typeName) => {
    return `"${propName}" is not a valid property name for a ${typeName}.`;
  },
  INVALID_PROPERTY_NAME_WITH_SUGGESTION: (propName, typeName, suggestion) => {
    return `${errors.INVALID_PROPERTY_NAME(propName, typeName)} Did you mean "${suggestion}"?`;
  },
  INVALID_PROPERTY_TYPE: (propName, typeName, actualType, expectedType) => {
    return `"${actualType}" is not a valid type for the ${typeName} property "${propName}". Expected "${expectedType}".`;
  }
};

module.exports = errors;
