const Bluebird = require('bluebird');
const migrationPayloads = require('../../../../../lib/migration-payloads');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

module.exports = Bluebird.coroutine(function * (migration, existingCts) {
  const steps = yield migrationSteps(migration);
  const chunks = migrationChunks(steps);
  const plan = migrationPlan(chunks);
  const payloads = migrationPayloads(plan, existingCts);
  const errors = validatePayloads(payloads);
  return errors;
});
