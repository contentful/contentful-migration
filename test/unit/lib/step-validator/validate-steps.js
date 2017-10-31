'use strict';

const Bluebird = require('bluebird');

const createSteps = require('../../../../src/lib/migration-steps').migration;
const IntentList = require('../../../../src/lib/intent-list').default;

const stripCallsites = (errors) => {
  return errors.map((error) => {
    error.details.step = error.details.intent;
    delete error.details.intent;
    delete error.details.step.meta.callsite;
    return error;
  });
};

module.exports = Bluebird.coroutine(function * (validators, migration) {
  const steps = yield createSteps(migration);

  const stepList = new IntentList(steps);

  for (const Validator of validators) {
    stepList.addValidator(new Validator());
  }

  let errors = [];

  try {
    stepList.validate();
  } catch (err) {
    if (!err.errors) {
      throw err;
    }
    errors = err.errors;
    const stripped = stripCallsites(errors);
    errors = stripped;
  }
  return errors;
});
