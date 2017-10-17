const _ = require('lodash');
const { validateContentType, validateFields } = require('./schema-validation');
const errorMessages = require('./errors');

const isDisplayFieldAndHasBeenDeleted = function (field, displayField) {
  return field.id === displayField && field.deleted;
};

const fieldIsDisplayField = function (field, displayField) {
  return field.id === displayField;
};

const checkIfDisplayFieldsExist = function (payload) {
  const errors = [];
  const displayField = payload.payload.displayField;
  const fields = payload.payload.fields;
  const ctId = payload.meta.contentTypeId;
  if (!displayField) {
    return [];
  }
  if (!fields.some((field) => fieldIsDisplayField(field, displayField))) {
    errors.push({
      type: 'InvalidAction',
      message: errorMessages.contentType.NON_EXISTENT_DISPLAY_FIELD(displayField, ctId)
    });
  }
  if (fields.some((field) => isDisplayFieldAndHasBeenDeleted(field, displayField))) {
    errors.push({
      type: 'InvalidAction',
      message: errorMessages.contentType.DELETE_DISPLAY_FIELD(displayField, ctId)
    });
  }
  return errors;
};

const deletedFieldError = function (contentTypeId, fieldId) {
  return {
    type: 'InvalidAction',
    message: errorMessages.field.NO_DELETE_WITHOUT_OMIT(fieldId, contentTypeId)
  };
};

const checkIfDeletionWasOmitted = function (payload) {
  const contentTypeId = payload.meta.contentTypeId;
  const deletedFields = payload.payload.fields.filter((field) => {
    return field.deleted === true;
  }).map((field) => field.id);

  const parent = payload.meta.parent;

  let previouslyOmittedFields;

  if (parent) {
    previouslyOmittedFields = parent.payload.fields.filter((field) => {
      return field.omitted === true;
    }).map((field) => field.id);
  } else {
    previouslyOmittedFields = [];
  }

  const deletedButNotOmitted = _.difference(deletedFields, previouslyOmittedFields);

  return deletedButNotOmitted.map((fieldId) => deletedFieldError(contentTypeId, fieldId));
};

const checkIfTypeWasChanged = function (payload) {
  const contentTypeId = payload.meta.contentTypeId;
  const fieldsById = _.keyBy(payload.payload.fields, 'id');

  if (!payload.meta.parent) {
    return [];
  }

  const parentFieldsById = _.keyBy(payload.meta.parent.payload.fields, 'id');
  const errors = [];

  for (const fieldId of Object.keys(fieldsById)) {
    const parentField = parentFieldsById[fieldId];

    // we don't care about a type change if the previous change was a deletion
    if (parentField && !parentField.deleted) {
      const fieldType = fieldsById[fieldId].type;
      const parentFieldType = parentField.type;

      if (fieldType !== parentFieldType) {
        errors.push({
          type: 'InvalidAction',
          message: errorMessages.field.NO_TYPE_CHANGE(fieldId, contentTypeId, parentFieldType, fieldType)
        });
      }
    }
  }

  return errors;
};

module.exports = function (payloads) {
  return payloads.map((payload) => {
    if (payload.isDelete) {
      return [];
    }
    const displayFieldValidation = checkIfDisplayFieldsExist(payload);
    const ctErrors = validateContentType(payload);
    const fieldErrors = validateFields(payload);
    const deletionErrors = checkIfDeletionWasOmitted(payload);
    const typeChangeErrors = checkIfTypeWasChanged(payload);

    return ctErrors.concat(fieldErrors)
      .concat(displayFieldValidation)
      .concat(deletionErrors)
      .concat(typeChangeErrors)
      .filter((error) => Boolean(error));
  });
};
