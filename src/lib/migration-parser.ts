'use strict';

import * as _ from 'lodash'
import * as Bluebird from 'bluebird'
import { migration as buildSteps } from './migration-steps/index'
import * as validateChunks from './migration-chunks/validation/index'
import * as buildChunks from './migration-chunks/index'
import * as buildPlan from './migration-plan/index'
import * as buildPayloads from './migration-payloads/index'

import Intent from './intent/index'
import RawStep from './interfaces/raw-step'
import HttpRequest from './interfaces/request'
import { fetcher as getContentTypesInChunks } from './content-types-in-plan'
import checkEntriesForDeletedCts from './deleted-ct-entries'
import validatePayloads from './migration-payloads/validation/index'
import buildRequests from './requests-builder'

import * as ContentTypeUpdateStepValidator from './step-validator/content-type-update'
import * as FieldUpdateStepValidator from './step-validator/field-update'
import * as FieldMovementValidator from './step-validator/field-movement'
import * as StepList from './step-list/index'
import * as errors from './errors/index'

const createMigrationParser = function (makeRequest, hooks): (migrationCreator: () => any) => Promise<any[]> {
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

  return async function migration (migrationCreator) {
    const rawSteps = await buildSteps(migrationCreator);

    const steps = rawSteps.map((step: RawStep) => new Intent(step));
    const stepList = new StepList(steps);

    stepList.addValidator(new ContentTypeUpdateStepValidator());
    stepList.addValidator(new FieldUpdateStepValidator());
    stepList.addValidator(new FieldMovementValidator());

    const stepsValidationErrors = stepList.validate();

    if (stepsValidationErrors.length > 0) {
      throw new errors.StepsValidationError(stepsValidationErrors);
    }

    await hooks.onSteps(steps);

    const chunks = buildChunks(steps);

    let contentTypes;
    try {
      contentTypes = await getContentTypesInChunks(chunks, makeRequest);
    } catch (error) {
      throw new errors.SpaceAccessError();
    }

    const ctsWithEntryInfo = await checkEntriesForDeletedCts(chunks, contentTypes, makeRequest);

    const chunksValidationErrors = validateChunks(chunks, ctsWithEntryInfo);

    if (chunksValidationErrors.length > 0) {
      throw new errors.ChunksValidationError(chunksValidationErrors);
    }

    await hooks.onChunks(chunks);

    const plan = buildPlan(chunks);

    await hooks.onPlan(plan);

    const payloads = buildPayloads(plan, contentTypes);
    const payloadValidationErrors = validatePayloads(payloads);

    const payloadValidationFailed = payloadValidationErrors.some(err => err.length > 0);
    if (payloadValidationFailed) {
      throw new errors.PayloadValidationError(payloadValidationErrors);
    }

    await hooks.onPayloads(payloads);

    const requests: HttpRequest[] = buildRequests(payloads);

    return requests;
  }
};

export {
  createMigrationParser as default,
  createMigrationParser
}
