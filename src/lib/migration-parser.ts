import APIEntry from './interfaces/api-entry'

import * as _ from 'lodash'
import * as Bluebird from 'bluebird'
import { migration as buildIntents } from './migration-steps'
import validateChunks from './migration-chunks/validation'

import { ContentType, Field } from './entities/content-type'
import { fetcher as getContentTypesInChunks } from './content-types-in-plan'
import { fetcher as getEntriesInIntents } from './fetch-entries'
import checkEntriesForDeletedCts from './deleted-ct-entries'

import ContentTypeUpdateIntentValidator from './intent-validator/content-type-update'
import FieldUpdateIntentValidator from './intent-validator/field-update'
import FieldMovementValidator from './intent-validator/field-movement'
import IntentList from './intent-list'
import * as errors from './errors/index'

import Entry from './entities/entry'
import FakeAPI from './fake-api'

const createMigrationParser = function (makeRequest, hooks): (migrationCreator: () => any) => Promise<any[]> {
  // tslint:disable: no-empty
  hooks = Object.assign({
    onPackages: () => {}
  }, hooks)
  // tslint:enable: no-empty

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

    intentList.validate()

    await hooks.onPackages(intentList.toPackages())

    const chunks = intentList.toPackages().map((pack) => {
      return pack.toRawSteps()
    })

    let APIContentTypes
    try {
      APIContentTypes = await getContentTypesInChunks(chunks, makeRequest)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const existingCts: Map<String, ContentType> = new Map()
    for (const apiCt of APIContentTypes) {
      const contentType = new ContentType({
        id: apiCt.sys.id,
        version: apiCt.sys.version,
        name: apiCt.name,
        description: apiCt.description,
        fields: apiCt.fields as Field[]
      })
      existingCts.set(contentType.id, contentType)
    }

    const rawCts = APIContentTypes.map((apiCt) => {
      return {
        id: apiCt.sys.id,
        version: apiCt.sys.version,
        fields: apiCt.fields,
        name: apiCt.name,
        description: apiCt.description
      }
    })

    const contentTypes: ContentType[] = rawCts.map((rawCt => new ContentType(rawCt)))

    let existingEntries: APIEntry[]
    try {
      existingEntries = await getEntriesInIntents(chunks, makeRequest)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const entries: Entry[] = existingEntries.map((apiEntry) => {
      return new Entry({
        id: apiEntry.sys.id,
        contentTypeId: apiEntry.sys.contentType.sys.id,
        fields: apiEntry.fields,
        version: apiEntry.sys.version
      })
    })

    const ctsWithEntryInfo = await checkEntriesForDeletedCts(chunks, contentTypes, makeRequest)

    const rawCtsWithEntryInfo = ctsWithEntryInfo.map(c => c.toRaw())
    validateChunks(intentList, rawCtsWithEntryInfo)

    const state = new FakeAPI(existingCts, entries)

    for (const pkg of intentList.toPackages()) {
      await pkg.applyTo(state)
    }

    const batches = await state.getRequestBatches()
      // for now, making this compatible to our tests where we expect a flat array of request objects
    return _.flatten(batches.map(b => b.requests))
  }
}

export {
  createMigrationParser as default,
  createMigrationParser
}
