'use strict'

import * as _ from 'lodash'
import * as Bluebird from 'bluebird'
import { migration as buildIntents } from './migration-steps/index'
import * as validateChunks from './migration-chunks/validation/index'
import * as buildPlan from './migration-plan/index'
import * as buildPayloads from './migration-payloads/index'

import Intent from './intent/index'
import RawStep from './interfaces/raw-step'
import HttpRequest from './interfaces/request'
import ContentType from './content-type/index'
import { fetcher as getContentTypesInChunks } from './content-types-in-plan'
import checkEntriesForDeletedCts from './deleted-ct-entries'
import validatePayloads from './migration-payloads/validation/index'
import buildRequests from './requests-builder'

import ContentTypeUpdateIntentValidator from './intent-validator/content-type-update'
import FieldUpdateIntentValidator from './intent-validator/field-update'
import FieldMovementValidator from './intent-validator/field-movement'
import IntentList from './intent-list/index'
import * as errors from './errors/index'

const createMigrationParser = function (makeRequest, hooks): (migrationCreator: () => any) => Promise<any[]> {
  hooks = Object.assign({
    onSteps: () => {},
    onChunks: () => {},
    onPlan: () => {},
    onPayloads: () => {}
  }, hooks)

  // Ensure we follow the promise interface
  hooks = _.mapValues(hooks, (hook) => {
    return Bluebird.method(hook)
  })

  return async function migration (migrationCreator) {
    const intents = await buildIntents(migrationCreator)

    const intentList = new IntentList(intents)

    intentList.addValidator(new ContentTypeUpdateIntentValidator())
    intentList.addValidator(new FieldUpdateIntentValidator())
    intentList.addValidator(new FieldMovementValidator())

    const intentValidationErrors = intentList.validate()

    if (intentValidationErrors.length > 0) {
      throw new errors.StepsValidationError(intentValidationErrors)
    }

    await hooks.onSteps(intents)

    const chunks = intentList.toPackages().map((pack) => {
      return pack.toRawSteps();
    })

    let APIContentTypes
    try {
      APIContentTypes = await getContentTypesInChunks(chunks, makeRequest)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const contentTypes = APIContentTypes.map((apiCt => new ContentType(apiCt)))

    const ctsWithEntryInfo = await checkEntriesForDeletedCts(chunks, contentTypes, makeRequest)

    const chunksValidationErrors = validateChunks(chunks, ctsWithEntryInfo)

    if (chunksValidationErrors.length > 0) {
      throw new errors.ChunksValidationError(chunksValidationErrors)
    }

    await hooks.onChunks(chunks)

    const plan = buildPlan(chunks)

    await hooks.onPlan(plan)

    const payloads = buildPayloads(plan, contentTypes)
    const payloadValidationErrors = validatePayloads(payloads)

    const payloadValidationFailed = payloadValidationErrors.some(err => err.length > 0)
    if (payloadValidationFailed) {
      throw new errors.PayloadValidationError(payloadValidationErrors)
    }

    await hooks.onPayloads(payloads)

    const requests: HttpRequest[] = buildRequests(payloads)

    return requests
  }
}

export {
  createMigrationParser as default,
  createMigrationParser
}
