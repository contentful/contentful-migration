'use strict';
const Bluebird = require('bluebird');

const migrationSteps = require('../../../../../src/lib/migration-steps').migration;
const IntentList = require('../../../../../src/lib/intent-list').default;

const stripCallsite = require('../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));
const validate = require('../../../../../src/lib/migration-chunks/validation');

const validateChunks = Bluebird.coroutine(function * (migration, contentTypes) {
  const intents = yield migrationSteps(migration);
  const list = new IntentList(intents);

  const packages = list.toPackages();

  const raw = packages.map((pack) => pack.toRawSteps());

  const stripped = stripCallsites(raw);

  return validate(stripped, contentTypes);
});

module.exports = validateChunks;
