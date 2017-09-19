const _ = require('lodash');
const { contentType: ctErrors } = require('./errors');

const errorFormatter = function (messageFormatter) {
  return function (errors) {
    return errors.map((step) => {
      return {
        type: 'InvalidAction',
        message: messageFormatter(step),
        details: { step }
      };
    });
  };
};

const filterStepsForExistingCTs = function (steps, contentTypes) {
  const existingIds = contentTypes.map((ct) => ct.sys.id);
  const nonExistingCTSteps = steps.filter((step) => !existingIds.includes(step.payload.contentTypeId));

  return nonExistingCTSteps;
};

const checkForDuplicateCreate = function (chunks, contentTypes) {
  // We don't need the chunked structure for this one. Merge it all
  const steps = _.flatten(chunks);
  // Find all create steps
  const ctCreates = steps.filter((step) => step.type === 'contentType/create');
  // Filter out the ones that already exist on the API side. They are handled by different validation
  const nonExistingCreates = filterStepsForExistingCTs(ctCreates, contentTypes);

  // Group the steps into an object by the content type ID
  const createGroups = _.groupBy(nonExistingCreates, (item) => item.payload.contentTypeId);
  // For every group, drop every first item
  // The remaining items are duplicate creates
  const potentialErrors = _.mapValues(createGroups, (createGroup) => _.tail(createGroup));
  // Strip out all groups that are empty since they aren't error cases
  const allErrors = _.omitBy(potentialErrors, _.isEmpty);

  return _.flatten(_.values(allErrors));
};


const checkForEditBeforeCreate = function (chunks, contentTypes) {
  // We don't need the chunked structure for this one. Merge it all
  const steps = _.flatten(chunks);

  const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes);
  // Find all create and edit steps
  const ctChanges = nonExistentCTs.filter((step) => ['contentType/create', 'contentType/update'].includes(step.type));
  // Group the steps into an object by the content type ID
  const editGroups = _.groupBy(ctChanges, (item) => item.payload.contentTypeId);
  // Filter any group that has no create
  const createGroups = _.omitBy(editGroups, (group) => {
    return !group.find((step) => step.type === 'contentType/create');
  });
  // Any update happening before a create action is wrong, so take all until the first create
  const potentialErrors = _.mapValues(createGroups, (createGroup) => {
    return _.takeWhile(createGroup, (step) => step.type !== 'contentType/create');
  });

  // Strip out all groups that are empty since they aren't error cases
  const allErrors = _.omitBy(potentialErrors, _.isEmpty);

  return _.flatten(_.values(allErrors));
};

const checkForNonExistingEdits = function (chunks, contentTypes) {
  // We don't need the chunked structure for this one. Merge it all
  const steps = _.flatten(chunks);

  const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes);
  // Find all create and edit steps
  const ctChanges = nonExistentCTs.filter((step) => ['contentType/create', 'contentType/update'].includes(step.type));
  // Group the steps into an object by the content type ID
  const changeGroups = _.groupBy(ctChanges, (item) => item.payload.contentTypeId);
  // Filter any group that has a create. That one will be taken over by the editBeforeCreate validation
  const editGroups = _.omitBy(changeGroups, (group) => {
    return group.find((step) => step.type === 'contentType/create');
  });

  // Strip out all groups that are empty since they aren't error cases
  const allErrors = _.omitBy(editGroups, _.isEmpty);

  return _.flatten(_.values(allErrors));
};

const checkForAlreadyExistingCreates = function (chunks, contentTypes) {
  // We don't need the chunked structure for this one. Merge it all
  const steps = _.flatten(chunks);

  const existingIds = contentTypes.map((ct) => ct.sys.id);
  // Find all create steps
  const ctCreates = steps.filter((step) => step.type === 'contentType/create');
  const existingCreates = ctCreates.filter((step) => existingIds.includes(step.payload.contentTypeId));

  return existingCreates;
};

const checkForNonExistingDeletes = function (chunks, contentTypes) {
  const steps = _.flatten(chunks);
  const nonExistentCTs = filterStepsForExistingCTs(steps, contentTypes);
  const nonExistentDeletes = nonExistentCTs.filter((step) => step.type === 'contentType/delete');
  return nonExistentDeletes;
};

const checkForDuplicateDeletes = function (chunks) {
  const steps = _.flatten(chunks);
  const ctDeletes = steps.filter((step) => step.type === 'contentType/delete');
  const deletedCts = _.groupBy(ctDeletes, (item) => item.payload.contentTypeId);
  const duplicateDeletes = _.pickBy(deletedCts, (steps) => steps.length > 1);
  return _.flatten(_.map(_.values(duplicateDeletes), _.drop));
};

const formatNonExistingUpdateErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.update.CONTENT_TYPE_DOES_NOT_EXIST(id);
});

const formatEditBeforeCreateErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.update.CONTENT_TYPE_NOT_YET_CREATED(id);
});

const formatDuplicateCreateErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.create.CONTENT_TYPE_ALREADY_CREATED(id);
});

const formatAlreadyExistingCreateErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.create.CONTENT_TYPE_ALREADY_EXISTS(id);
});

const formatNonExistingDeleteErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.delete.CONTENT_TYPE_DOES_NOT_EXIST(id);
});

const formatDuplicateDeleteErrors = errorFormatter((step) => {
  const id = step.payload.contentTypeId;
  return ctErrors.delete.CONTENT_TYPE_ALREADY_DELETED(id);
});

module.exports = function (chunks, contentTypes) {
  const duplicateContentTypeCreates = checkForDuplicateCreate(chunks, contentTypes);
  const contentTypeEditBeforeCreates = checkForEditBeforeCreate(chunks, contentTypes);
  const existingCreates = checkForAlreadyExistingCreates(chunks, contentTypes);
  const nonExistingEdits = checkForNonExistingEdits(chunks, contentTypes);
  const nonExistingDeletes = checkForNonExistingDeletes(chunks, contentTypes);
  const duplicateDeletes = checkForDuplicateDeletes(chunks, contentTypes);

  const duplicateErrors = formatDuplicateCreateErrors(duplicateContentTypeCreates);
  const editBeforeCreateErrors = formatEditBeforeCreateErrors(contentTypeEditBeforeCreates);
  const existingCreateErrors = formatAlreadyExistingCreateErrors(existingCreates);
  const nonExistingUpdateErrors = formatNonExistingUpdateErrors(nonExistingEdits);
  const nonExistingDeleteErrors = formatNonExistingDeleteErrors(nonExistingDeletes);
  const duplicateDeleteErrors = formatDuplicateDeleteErrors(duplicateDeletes);

  return duplicateErrors
    .concat(editBeforeCreateErrors)
    .concat(existingCreateErrors)
    .concat(nonExistingUpdateErrors)
    .concat(nonExistingDeleteErrors)
    .concat(duplicateDeleteErrors);
};
