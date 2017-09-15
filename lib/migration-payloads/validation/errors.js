'use strict';

const errors = {
  contentType: {
    REQUIRED_PROPERTY: (path) => {
      return `The property "${path}" is required on a content type.`;
    },
    TOO_MANY_FIELDS: (id, maxFields) => {
      return `Content type "${id}" cannot have more than ${maxFields} fields.`;
    },
    NON_EXISTENT_DISPLAY_FIELD: (displayField, ctId) => {
      return `Cannot set "${displayField}" as displayField on content type "${ctId}" because it does not exist`;
    },
    DELETE_DISPLAY_FIELD: (displayField, ctId) => {
      return `Cannot delete field "${displayField}" on content type "${ctId}" because it is set as the display field`;
    }
  },
  field: {
    REQUIRED_DEPENDENT_PROPERTY: (prop, id, dependentProp, dependentValue) => {
      return `The property "${prop}" is required on the field "${id}" because "${dependentProp}" is "${dependentValue}".`;
    },
    REQUIRED_PROPERTY: (prop, id) => {
      return `The property "${prop}" is required on the field "${id}".`;
    },
    FORBIDDEN_DEPENDENT_PROPERTY: (prop, id, dependentProp, dependentValue) => {
      return `The property "${prop}" is forbidden on the field "${id}" because "${dependentProp}" is not "${dependentValue}".`;
    },
    FORBIDDEN_PROPERTY: (prop, id) => {
      return `The property "${prop}" is forbidden on the field "${id}".`;
    },
    PROPERTY_MUST_BE_ONE_OF: (prop, id, validOptions) => {
      const typeStrings = validOptions.map((valid) => `"${valid}"`);
      const oneOf = `[${typeStrings.join(', ')}]`;

      return `The property "${prop}" on the field "${id}" must be one of ${oneOf}.`;
    },
    NO_DELETE_WITHOUT_OMIT: (fieldId, ctId) => {
      return `Cannot set "deleted" to "true" on field "${fieldId}" on content type "${ctId}". It needs to be omitted first. Consider using "deleteField".`;
    },
    NO_TYPE_CHANGE: (fieldId, ctId, parentFieldType, fieldType) => {
      return `Cannot change the type of field "${fieldId}" on content type "${ctId}" from "${parentFieldType}" to "${fieldType}". Field types cannot be changed.`;
    },
    ID_MUST_MATCH_SCHEMA: (fieldId, newId) => {
      return `The new ID "${newId}" for the field "${fieldId}" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`;
    }
  }
};

module.exports = errors;
