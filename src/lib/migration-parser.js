'use strict';

const _ = require('lodash');
const Bluebird = require('bluebird');

const buildSteps = require('./migration-steps');

const validateChunks = require('./migration-chunks/validation');
const buildChunks = require('./migration-chunks');

const buildPlan = require('./migration-plan');

const buildPayloads = require('./migration-payloads');
const validatePayloads = require('./migration-payloads/validation');

const buildRequests = require('./requests-builder');
const getContentTypesInChunks = require('./content-types-in-plan');
const getEntriesForDeletedCts = require('./deleted-ct-entries');
const Step = require('./step');

const ContentTypeUpdateStepValidator = require('./step-validator/content-type-update');
const FieldUpdateStepValidator = require('./step-validator/field-update');
const FieldMovementValidator = require('./step-validator/field-movement');

const StepList = require('./step-list');

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
    const rawSteps = yield buildSteps(migrationCreator);

    const steps = rawSteps.map((step) => new Step(step));
    const stepList = new StepList(steps);

    stepList.addValidator(new ContentTypeUpdateStepValidator());
    stepList.addValidator(new FieldUpdateStepValidator());
    stepList.addValidator(new FieldMovementValidator());

    const stepsValidationErrors = stepList.validate();

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

    const payloads = buildPayloads(plan, contentTypes);
    const payloadValidationErrors = validatePayloads(payloads, contentTypes);

    const payloadValidationFailed = payloadValidationErrors.some(err => err.length > 0);
    if (payloadValidationFailed) {
      throw new errors.PayloadValidationError(payloadValidationErrors);
    }

    yield hooks.onPayloads(payloads);

    const requests = buildRequests(payloads, contentTypes);

    return requests;
  });
};

module.exports = createMigrationParser;
