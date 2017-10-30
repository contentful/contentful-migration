'use strict';
const Bluebird = require('bluebird');

const migrationSteps = require('../../../../../src/lib/migration-steps').migration;
const IntentList = require('../../../../../src/lib/intent-list').default;

const stripCallsite = require('../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));
const validate = require('../../../../../src/lib/migration-chunks/validation');

const validateChunks = Bluebird.coroutine(function * (migration, testCts) {
  const intents = yield migrationSteps(migration);
  const list = new IntentList(intents);

  const packages = list.toPackages();

  const raw = packages.map((pack) => pack.toRawSteps());

  const stripped = stripCallsites(raw);

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

  return validate(stripped, existingCts);
});

module.exports = validateChunks;
