import APIEntry from './interfaces/api-entry'

import { migration as buildIntents } from './migration-steps'
import validateChunks from './migration-chunks/validation'

import { ContentType, EditorInterfaces } from './entities/content-type'

import ContentTypeUpdateIntentValidator from './intent-validator/content-type-update'
import FieldUpdateIntentValidator from './intent-validator/field-update'
import FieldMovementValidator from './intent-validator/field-movement'
import EntryDeriveIntentValidator from './intent-validator/entry-derive'
import ContentTransformIntentValidator from './intent-validator/content-transform'
import TagUpdateIntentValidator from './intent-validator/tag-update'
import IntentList from './intent-list'
import * as errors from './errors/index'
import Entry from './entities/entry'
import Tag from './entities/tag'
import Fetcher from './fetcher'
import OfflineAPI, { RequestBatch } from './offline-api'
import ValidationError, { InvalidActionError } from './interfaces/errors'
import { ClientConfig } from '../bin/lib/config'

class ParseResult {
  public batches: RequestBatch[] = []
  public stepsValidationErrors: ValidationError[] = []
  public payloadValidationErrors: InvalidActionError[] | ValidationError[] = []

  hasValidationErrors() {
    return this.batches.some((batch) => batch.validationErrors.length > 0)
  }

  hasRuntimeErrors() {
    return this.batches.some((batch) => batch.runtimeErrors.length > 0)
  }

  hasStepsValidationErrors() {
    return this.stepsValidationErrors.length > 0
  }

  hasPayloadValidationErrors() {
    return this.payloadValidationErrors.length > 0
  }

  getRuntimeErrors() {
    return this.batches.reduce((errors, batch) => {
      return errors.concat(batch.runtimeErrors)
    }, [])
  }

  getValidationErrors() {
    return this.batches.reduce((errors, batch) => {
      return errors.concat(batch.validationErrors)
    }, [])
  }
}

const createMigrationParser = function (
  makeRequest: Function,
  config: ClientConfig
): (migrationCreator: (migration: any) => any) => Promise<ParseResult> {
  return async function migration(migrationCreator) {
    const fetcher = new Fetcher(makeRequest, config.requestBatchSize)
    const parseResult = new ParseResult()
    const intents = await buildIntents(migrationCreator, makeRequest, config)

    const intentList = new IntentList(intents)

    intentList.addValidator(new ContentTypeUpdateIntentValidator())
    intentList.addValidator(new FieldUpdateIntentValidator())
    intentList.addValidator(new FieldMovementValidator())
    intentList.addValidator(new ContentTransformIntentValidator())
    intentList.addValidator(new EntryDeriveIntentValidator())
    intentList.addValidator(new TagUpdateIntentValidator())

    const stepsValidationErrors = intentList.validate()

    if (stepsValidationErrors.length) {
      parseResult.stepsValidationErrors = stepsValidationErrors
      return parseResult
    }

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

    let apiEditorInterfaces
    try {
      apiEditorInterfaces = await fetcher.getEditorInterfacesInIntents(intentList)
    } catch (error) {
      throw new errors.EditorInterfacesFetchingError()
    }

    const existingEditorInterfaces: Map<string, EditorInterfaces> = new Map()
    for (const [contentTypeId, apiEi] of apiEditorInterfaces) {
      const editorInterfaces = new EditorInterfaces(apiEi)
      existingEditorInterfaces.set(contentTypeId, editorInterfaces)
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

    let apiTags
    try {
      apiTags = await fetcher.getTagsForEnvironment(intentList)
    } catch (error) {
      throw new errors.SpaceAccessError()
    }

    const existingTags: Map<String, Tag> = new Map()
    for (const apiTag of apiTags) {
      const tag = new Tag(apiTag)
      existingTags.set(tag.id, tag)
    }

    const tags: Tag[] = apiTags.map((apiTag) => {
      return new Tag(apiTag)
    })

    const payloadValidationErrors = validateChunks(intentList, ctsWithEntryInfo, existingEditorInterfaces, tags)

    if (payloadValidationErrors.length) {
      parseResult.payloadValidationErrors = payloadValidationErrors
      return parseResult
    }

    const locales = await fetcher.getLocalesForSpace()

    const api = new OfflineAPI({
      contentTypes: existingCts,
      entries,
      locales,
      editorInterfacesByContentType: existingEditorInterfaces,
      tags: existingTags
    })

    await intentList.compressed().applyTo(api)

    const batches = await api.getRequestBatches()
    parseResult.batches = batches

    return parseResult
  }
}

export { createMigrationParser as default, createMigrationParser, ParseResult }
