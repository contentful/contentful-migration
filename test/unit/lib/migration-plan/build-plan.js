'use strict';
const Bluebird = require('bluebird');

const migrationSteps = require('../../../../src/lib/migration-steps').migration;
const IntentList = require('../../../../src/lib/intent-list').default;
const migrationPlan = require('../../../../src/lib/migration-plan');
const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

const buildPayloads = Bluebird.coroutine(function * (migration) {
  const intents = yield migrationSteps(migration);
  const list = new IntentList(intents);

  const sliced = list.slice();

  const raw = sliced.map((list) => list.toRaw());

  const plan = migrationPlan(raw);

  return stripCallsites(plan);
});

module.exports = buildPayloads;
