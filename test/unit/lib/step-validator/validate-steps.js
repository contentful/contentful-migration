'use strict';

const Bluebird = require('bluebird');

const createSteps = require('../../../../src/lib/migration-steps');
const StepList = require('../../../../src/lib/step-list');

const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (errors) => errors.map((error) => {
  const step = error.details.step;
  const strippedStep = stripCallsite(step);

  const strippedDetails = Object.assign({}, error.details, {
    step: strippedStep
  });

  return Object.assign({}, error, {
    details: strippedDetails
  });
});

module.exports = Bluebird.coroutine(function * (validators, migration) {
  const steps = yield createSteps(migration);

  const stepList = StepList.fromRaw(steps);

  for (const Validator of validators) {
    stepList.addValidator(new Validator());
  }

  const validationErrors = stripCallsites(stepList.validate());

  return validationErrors;
});
