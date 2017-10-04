'use strict';

const _ = require('lodash');
const sliceByContentTypeId = require('./slicers/content-type-id');
const sliceByFieldDelete = require('./slicers/field-delete');
const slicedByContentTransform = require('./slicers/content-transform');
const sliceByFieldIdChange = require('./slicers/field-id-change');

module.exports = function migrationPlan (migrationSteps) {
  const uninterruptedSteps = sliceByContentTypeId(migrationSteps);
  const slicedByDeleteSteps = _.flatten(uninterruptedSteps.map((chunk) => sliceByFieldDelete(chunk)));
  const slicedByContentTransformSteps = _.flatten(slicedByDeleteSteps.map((chunk) => slicedByContentTransform(chunk)));
  const slicedByFieldIdChangeSteps = slicedByContentTransformSteps.map((chunk) => sliceByFieldIdChange(chunk));
  const result = _.flatten(slicedByFieldIdChangeSteps);

  return result;
};
