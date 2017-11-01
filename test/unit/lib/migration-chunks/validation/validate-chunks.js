'use strict';
const Bluebird = require('bluebird');

const migrationSteps = require('../../../../../src/lib/migration-steps').migration;
const IntentList = require('../../../../../src/lib/intent-list').default;

const stripCallsites = (errors) => {
  return errors.map((error) => {
    delete error.details.intent.package;
    error.details.step = error.details.intent;
    delete error.details.intent;
    delete error.details.step.meta.callsite;
    return error;
  });
};
const validate = require('../../../../../src/lib/migration-chunks/validation').default;

const validateChunks = Bluebird.coroutine(function * (migration, testCts) {
  const intents = yield migrationSteps(migration);
  const list = new IntentList(intents);

  const existingCts = testCts.map((ct) => {
    const contentType = {
      id: ct.sys.id,
      version: ct.sys.version,
      name: ct.name,
      description: ct.description,
      fields: ct.fields,
      hasEntries: ct.hasEntries
    };
    return contentType;
  });

  let errors = [];

  try {
    validate(list, existingCts);
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

module.exports = validateChunks;
