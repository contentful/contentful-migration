'use strict';

const _ = require('lodash');
const sliceByContentTypeId = require('./slicers/content-type-id');
const sliceByFieldDelete = require('./slicers/field-delete');

module.exports = function migrationPlan (migrationSteps) {
  const uninterruptedSteps = sliceByContentTypeId(migrationSteps);
  const slicedByDeleteSteps = uninterruptedSteps.map((chunk) => sliceByFieldDelete(chunk));
  const flattened = _.flatten(slicedByDeleteSteps);

  return flattened;
};
