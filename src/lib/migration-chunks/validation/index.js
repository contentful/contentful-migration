'use strict';

const contentTypeValidations = require('./content-type').default;
const fieldValidations = require('./field');
const checkForDuplicatePropsErrors = require('./duplicate-props');

module.exports = function (chunks, contentTypes) {
  const ctErrors = contentTypeValidations(chunks, contentTypes);

  if (ctErrors.length > 0) {
    return ctErrors;
  }

  const createdCTs = [];

  for (const chunk of chunks) {
    const createCTs = chunk.filter((step) => step.type === 'contentType/create');
    const createdIds = createCTs.map((createStep) => {
      return createStep.payload.contentTypeId;
    });

    for (const ctId of createdIds) {
      createdCTs.push({
        sys: { id: ctId },
        fields: []
      });
    }
  }

  const allCTs = contentTypes.concat(createdCTs);
  const fieldErrors = fieldValidations(chunks, allCTs);

  return fieldErrors.concat(checkForDuplicatePropsErrors(chunks));
};
