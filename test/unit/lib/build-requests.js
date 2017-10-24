'use strict';
const Bluebird = require('bluebird');

const migrationSteps = require('../../../src/lib/migration-steps').migration;
const IntentList = require('../../../src/lib/intent-list').default;
const migrationPlan = require('../../../src/lib/migration-plan');
const migrationPayloads = require('../../../src/lib/migration-payloads/index');

const builder = require('../../../src/lib/requests-builder').default;


const buildPayloads = Bluebird.coroutine(function * (migration, contentTypes) {
  const intents = yield migrationSteps(migration);
  const list = new IntentList(intents);

  const packages = list.toPackages();

  const raw = packages.map((pack) => pack.toRawSteps());

  const plan = migrationPlan(raw);
  const payloads = migrationPayloads(plan, contentTypes);

  return builder(payloads);
});

module.exports = buildPayloads;
