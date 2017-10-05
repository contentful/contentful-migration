'use strict';

const _ = require('lodash');
const Bluebird = require('bluebird');

const buildSteps = require('./migration-steps');
const validateSteps = require('./migration-steps/validation');

const validateChunks = require('./migration-chunks/validation');
const buildChunks = require('./migration-chunks');

const buildPlan = require('./migration-plan');

const buildPayloads = require('./migration-payloads');
const validatePayloads = require('./migration-payloads/validation');

const buildRequests = require('./requests-builder');
const getContentTypesInChunks = require('./content-types-in-plan');
const getEntriesForDeletedCts = require('./deleted-ct-entries');

const errors = require('./errors');

const createMigrationParser = function (makeRequest, hooks) {
  hooks = Object.assign({
    onSteps: () => {},
    onChunks: () => {},
    onPlan: () => {},
    onPayloads: () => {}
  }, hooks);

  // Ensure we follow the promise interface
  hooks = _.mapValues(hooks, (hook) => {
    return Bluebird.method(hook);
  });

  return Bluebird.coroutine(function * migration (migrationCreator) {
    const steps = yield buildSteps(migrationCreator);
    const stepsValidationErrors = validateSteps(steps);

    if (stepsValidationErrors.length > 0) {
      throw new errors.StepsValidationError(stepsValidationErrors);
    }

    yield hooks.onSteps(steps);

    const chunks = buildChunks(steps);

    let contentTypes;
    try {
      contentTypes = yield getContentTypesInChunks(chunks, makeRequest);
    } catch (error) {
      throw new errors.SpaceAccessError();
    }

    const ctsWithEntryInfo = yield getEntriesForDeletedCts(chunks, contentTypes, makeRequest);

    const chunksValidationErrors = validateChunks(chunks, ctsWithEntryInfo);

    if (chunksValidationErrors.length > 0) {
      throw new errors.ChunksValidationError(chunksValidationErrors);
    }

    yield hooks.onChunks(chunks);

    const plan = buildPlan(chunks);

    yield hooks.onPlan(plan);

    const planWithPayloads = buildPayloads(plan, contentTypes);
    const contentTypePayloads = planWithPayloads.filter((chunk) => {
      return chunk.type === 'CONTENT_MODEL_CHANGE';
    }).map((chunk) => chunk.payload);

    const payloadValidationErrors = validatePayloads(contentTypePayloads, contentTypes);

    const payloadValidationFailed = payloadValidationErrors.some(err => err.length > 0);
    if (payloadValidationFailed) {
      throw new errors.PayloadValidationError(payloadValidationErrors);
    }

    yield hooks.onPayloads(contentTypePayloads);

    const requests = buildRequests(contentTypePayloads, contentTypes);

    return requests;
  });
};

module.exports = createMigrationParser;
