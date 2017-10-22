const Bluebird = require('bluebird');
const buildPayloads = require('../build-payloads');
const validatePayloads = require('../../../../../src/lib/migration-payloads/validation').default;

module.exports = Bluebird.coroutine(function * (migration, existingCts) {
  const payloads = yield buildPayloads(migration, existingCts);
  const errors = validatePayloads(payloads);
  return errors;
});
