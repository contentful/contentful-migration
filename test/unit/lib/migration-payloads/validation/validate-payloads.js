const Bluebird = require('bluebird');
const migrationPayloads = require('../../../../../src/lib/migration-payloads');
const migrationPlan = require('../../../../../src/lib/migration-plan');
const migrationChunks = require('../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../src/lib/migration-steps');
const validatePayloads = require('../../../../../src/lib/migration-payloads/validation');

module.exports = Bluebird.coroutine(function * (migration, existingCts) {
  const steps = yield migrationSteps(migration);
  const chunks = migrationChunks(steps);
  const plan = migrationPlan(chunks);
  const payloads = migrationPayloads(plan, existingCts);
  const errors = validatePayloads(payloads);
  return errors;
});
