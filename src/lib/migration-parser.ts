import APIEntry from './interfaces/api-entry'

import { migration as buildIntents } from './migration-steps'
import validateChunks from './migration-chunks/validation'

import { ContentType } from './entities/content-type'
import { fetcher as getContentTypesInChunks } from './content-types-in-plan'
import { fetcher as getEntriesInIntents } from './fetch-entries'
import checkEntriesForDeletedCts from './deleted-ct-entries'

import ContentTypeUpdateIntentValidator from './intent-validator/content-type-update'
import FieldUpdateIntentValidator from './intent-validator/field-update'
import FieldMovementValidator from './intent-validator/field-movement'
import IntentList from './intent-list'
import * as errors from './errors/index'

import Entry from './entities/entry'
import OfflineAPI, { RequestBatch } from './offline-api'

const createMigrationParser = function (makeRequest): (migrationCreator: () => any) => Promise<RequestBatch[]> {
  return async function migration (migrationCreator) {
    const intents = await buildIntents(migrationCreator)

    const intentList = new IntentList(intents)

    intentList.addValidator(new ContentTypeUpdateIntentValidator())
    intentList.addValidator(new FieldUpdateIntentValidator())
    intentList.addValidator(new FieldMovementValidator())

    intentList.validate()

    let apiContentTypes
    try {
      apiContentTypes = await getContentTypesInChunks(intentList, makeRequest)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const existingCts: Map<String, ContentType> = new Map()
    for (const apiCt of apiContentTypes) {
      const contentType = new ContentType(apiCt)
      existingCts.set(contentType.id, contentType)
    }

    const contentTypes: ContentType[] = apiContentTypes.map((apiCt) => {
      return new ContentType(apiCt)
    })

    let existingEntries: APIEntry[]
    try {
      existingEntries = await getEntriesInIntents(intentList, makeRequest)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const entries: Entry[] = existingEntries.map((apiEntry) => {
      return new Entry(apiEntry)
    })

    const ctsWithEntryInfo = await checkEntriesForDeletedCts(intentList, contentTypes, makeRequest)

    validateChunks(intentList, ctsWithEntryInfo)

    const api = new OfflineAPI(existingCts, entries)

    await intentList.compressed().applyTo(api)

    const batches = await api.getRequestBatches()

    return batches
  }
}

export {
  createMigrationParser as default,
  createMigrationParser
}
