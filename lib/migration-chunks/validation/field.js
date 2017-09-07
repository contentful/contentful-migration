'use strict';

const { field: fieldErrors } = require('./errors');

const invalidActionError = (message, step) => {
  return {
    type: 'InvalidAction',
    message: message,
    details: { step }
  };
};

module.exports = function (chunks, contentTypes = []) {
  const errors = [];
  const contentTypeFields = contentTypes.reduce((acc, curr) => {
    const fieldIds = curr.fields.map((f) => f.id);
    acc[curr.sys.id] = new Set(fieldIds);
    return acc;
  }, {});

  const recentlyRemoved = {};

  for (const chunk of chunks) {
    const contentTypeId = chunk[0].payload.contentTypeId;
    const contentTypeExists = Boolean(contentTypes.find((ct) => ct.sys.id === contentTypeId));
    const fieldSet = contentTypeFields[contentTypeId] || new Set();
    const fieldRemovals = recentlyRemoved[contentTypeId] || new Set();

    // ...
    const fieldSteps = chunk.filter((step) => step.type.startsWith('field'));

    for (const step of fieldSteps) {
      const fieldId = step.payload.fieldId;
      const fieldExists = fieldSet.has(fieldId);
      const fieldRecentlyRemoved = fieldRemovals.has(fieldId);

      if (step.type === 'field/create' && !fieldExists) {
        fieldSet.add(fieldId);
        fieldRemovals.delete(fieldId);
      }

      if (step.type === 'field/delete' && fieldExists) {
        fieldSet.delete(fieldId);
        fieldRemovals.add(fieldId);
      }

      if (!contentTypeExists) {
        const type = step.type.split('/')[1];
        errors.push(invalidActionError(
          fieldErrors[type].CONTENT_TYPE_DOES_NOT_EXIST(fieldId, contentTypeId),
          step
        ));
        continue;
      }

      if (step.type === 'field/create' && fieldExists) {
        errors.push(invalidActionError(
          fieldErrors.create.FIELD_ALREADY_CREATED(fieldId),
          step
        ));
      }


      if (step.type === 'field/delete' && !fieldExists && fieldRecentlyRemoved) {
        errors.push(invalidActionError(
          fieldErrors.delete.FIELD_ALREADY_DELETED(fieldId),
          step
        ));
      }

      if (step.type === 'field/delete' && !fieldExists && !fieldRecentlyRemoved) {
        errors.push(invalidActionError(
          fieldErrors.delete.FIELD_DOES_NOT_EXIST(fieldId),
          step
        ));
      }

      if (step.type === 'field/update' && !fieldExists && fieldRecentlyRemoved) {
        errors.push(invalidActionError(
          fieldErrors.update.FIELD_ALREADY_DELETED(fieldId),
          step
        ));
      }

      if (step.type === 'field/update' && !fieldExists && !fieldRecentlyRemoved) {
        errors.push(invalidActionError(
          fieldErrors.update.FIELD_DOES_NOT_EXIST(fieldId),
          step
        ));
      }
    }

    contentTypeFields[contentTypeId] = fieldSet;
    recentlyRemoved[contentTypeId] = fieldRemovals;
  }

  return errors;
};
