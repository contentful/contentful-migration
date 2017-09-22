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
  },
  INVALID_MOVEMENT_TYPE: (typeName) => {
    return `"${typeName}" is not a valid type for field movement. Expected "string".`;
  },
  INVALID_MOVEMENT_WITH_SELF: (fieldId) => {
    return `You cannot move the field "${fieldId}" relative to itself.`;
  },
  INVALID_MOVEMENT_NAME: (movement) => {
    return `"${movement}" is not a valid field movement.`;
  },
  INVALID_MOVEMENT_NAME_WITH_SUGGESTION: (movement, suggestion) => {
    return `${errors.INVALID_MOVEMENT_NAME(movement)} Did you mean "${suggestion}"?`;
  }
};

module.exports = errors;
