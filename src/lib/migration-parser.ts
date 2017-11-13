import ContentTransformIntentValidator from './intent-validator/content-transform'
import APIEntry from './interfaces/api-entry'

import { migration as buildIntents } from './migration-steps'
import validateChunks from './migration-chunks/validation'

import { ContentType } from './entities/content-type'

import ContentTypeUpdateIntentValidator from './intent-validator/content-type-update'
import FieldUpdateIntentValidator from './intent-validator/field-update'
import FieldMovementValidator from './intent-validator/field-movement'
import IntentList from './intent-list'
import * as errors from './errors/index'

import Entry from './entities/entry'
import OfflineAPI, { RequestBatch } from './offline-api'

const createMigrationParser = function (fetcher): (migrationCreator: (migration: any) => any) => Promise<{batches: RequestBatch[]}> {
  return async function migration (migrationCreator) {
    const intents = await buildIntents(migrationCreator)

    const intentList = new IntentList(intents)

    intentList.addValidator(new ContentTypeUpdateIntentValidator())
    intentList.addValidator(new FieldUpdateIntentValidator())
    intentList.addValidator(new FieldMovementValidator())
    intentList.addValidator(new ContentTransformIntentValidator())

    intentList.validate()

    let apiContentTypes
    try {
      apiContentTypes = await fetcher.getContentTypesInChunks(intentList)
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
      existingEntries = await fetcher.getEntriesInIntents(intentList)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const entries: Entry[] = existingEntries.map((apiEntry) => {
      return new Entry(apiEntry)
    })

    const ctsWithEntryInfo = await fetcher.checkContentTypesForDeletedCts(intentList, contentTypes)

    validateChunks(intentList, ctsWithEntryInfo)

    const locales = await fetcher.getLocalesForSpace()

    const api = new OfflineAPI(existingCts, entries, locales)

    await intentList.compressed().applyTo(api)

    const batches = await api.getRequestBatches()

    console.log(batches[0].requests)
    return { batches }
  }
}

export {
  createMigrationParser as default,
  createMigrationParser
}
