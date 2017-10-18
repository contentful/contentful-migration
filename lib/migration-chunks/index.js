'use strict';

const _ = require('lodash');
const sliceByContentTypeId = require('./slicers/content-type-id');
const sliceByFieldDelete = require('./slicers/chunk-with-single-step')('field/delete');
const sliceByFieldIdChange = require('./slicers/chunk-with-single-step')('field/rename');

module.exports = function migrationPlan (migrationSteps) {
  const uninterruptedSteps = sliceByContentTypeId(migrationSteps);
  const slicedByDeleteSteps = _.flatten(uninterruptedSteps.map((chunk) => sliceByFieldDelete(chunk)));
  const slicedByFieldIdChangeSteps = slicedByDeleteSteps.map((chunk) => sliceByFieldIdChange(chunk));
  const result = _.flatten(slicedByFieldIdChangeSteps);

  return result;
};
