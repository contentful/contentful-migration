import FieldDeletionValidator from './validator/field-deletion'
import { ContentTypePayloadValidator } from './validator/content-type'
import ContentType from '../entities/content-type'
import Request from '../interfaces/request'
import { Entry } from '../entities/entry'
import { PayloadValidationError, InvalidActionError } from '../interfaces/errors'
import DisplayFieldValidator from './validator/display-field'
import SchemaValidator from './validator/schema/index'
import TypeChangeValidator from './validator/type-change'

interface RequestBatch {
  id: string
  requests: Request[]
  errors: (PayloadValidationError | InvalidActionError)[]
}

export enum ApiHook {
  SaveContentType = 'SAVE_CONTENT_TYPE',
  PublishContentType = 'PUBLISH_CONTENT_TYPE',
  UnpublishContentType = 'UNPUBLISH_CONTENT_TYPE',
  DeleteContentType = 'DELETE_CONTENT_TYPE'
}

const saveContentTypeRequest = function (ct: ContentType): Request {
  const data: any = {
    name: ct.name,
    description: ct.description,
    fields: ct.toRaw().fields
  }

  if (ct.displayField) {
    data.displayField = ct.displayField
  }

  return {
    method: 'PUT',
    url: `/content_types/${ct.id}`,
    headers: {
      'X-Contentful-Version': ct.version
    },
    data: data
  }
}

const saveEntryRequest = function (entry: Entry): Request {
  return {
    method: 'PUT',
    url: `/entries/${entry.id}`,
    headers: {
      'X-Contentful-Version': entry.version
    },
    data: entry.toApiEntry()
  }
}
const publishEntryRequest = function (entry: Entry): Request {
  return {
    method: 'PUT',
    url: `/entries/${entry.id}/published`,
    headers: {
      'X-Contentful-Version': entry.version
    }
  }
}

const publishContentTypeRequest = function (ct: ContentType): Request {
  return {
    method: 'PUT',
    url: `/content_types/${ct.id}/published`,
    headers: {
      'X-Contentful-Version': ct.version
    }
  }
}

const unpublishRequest = function (ct: ContentType): Request {
  return {
    method: 'DELETE',
    url: `/content_types/${ct.id}/published`,
    headers: {
      'X-Contentful-Version': ct.version
    }
  }
}

const deleteRequest = function (ct: ContentType): Request {
  return {
    method: 'DELETE',
    url: `/content_types/${ct.id}`,
    headers: {
      'X-Contentful-Version': ct.version
    }
  }
}

class OfflineAPI {
  private modifiedContentTypes: Map<String, ContentType> = null
  private savedContentTypes: Map<String, ContentType> = null
  private publishedContentTypes: Map<String, ContentType> = null
  private entries: Entry[] = null
  private isRecordingRequests: boolean = false
  private currentRequestsRecorded: Request[] = null
  private currentErrorsRecorded: (PayloadValidationError | InvalidActionError)[] = null
  private batchId: string = null
  private requestBatches: RequestBatch[] = []
  private contentTypeValidators: ContentTypePayloadValidator[] = []

  constructor (contentTypes: Map<String, ContentType> = new Map(), entries: Entry[] = []) {
    this.modifiedContentTypes = contentTypes

    // Initialize saved and published state
    // These are (currently) exclusively needed for stateful validations
    // for example "cannot delete before omitted was published"
    //
    // Since the `modifiedContentTypes` are mutable,
    // we need to perform a clone.
    // TODO: Build a better abstraction over `Map` that allows easy cloning
    // and also allows us to implement async iterators
    this.savedContentTypes = new Map()
    this.publishedContentTypes = new Map()

    for (const [id, contentType] of contentTypes.entries()) {
      this.savedContentTypes.set(id, contentType.clone())
      this.publishedContentTypes.set(id, contentType.clone())
    }

    this.contentTypeValidators.push(new FieldDeletionValidator())
    this.contentTypeValidators.push(new DisplayFieldValidator())
    this.contentTypeValidators.push(new SchemaValidator())
    this.contentTypeValidators.push(new TypeChangeValidator())

    this.entries = entries
  }

  async getContentType (id: string): Promise<ContentType> {
    if (!this.hasContentType(id)) {
      throw new Error(`Cannot get CT ${id} because it does not exist`)
    }

    return this.modifiedContentTypes.get(id)
  }

  async hasContentType (id: string): Promise<boolean> {
    return this.modifiedContentTypes.has(id)
  }

  async createContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = new ContentType({ id , version: 0 })

    await this.modifiedContentTypes.set(id, ct)

    return ct
  }

  async saveContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const hasContentType = this.modifiedContentTypes.has(id)

    if (!hasContentType) {
      throw new Error(`Cannot save CT ${id} because it does not exist`)
    }

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveContentTypeRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.modifiedContentTypes.set(id, ct)
    await this.savedContentTypes.set(id, ct.clone())

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.SaveContentType)) {
        const errors = validator.validate(ct, this.savedContentTypes.get(id), this.publishedContentTypes.get(id))
        this.currentErrorsRecorded = this.currentErrorsRecorded.concat(errors)
      }
    }

    return ct
  }

  async publishContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(publishContentTypeRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.modifiedContentTypes.set(id, ct)
    await this.savedContentTypes.set(id, ct.clone())
    await this.publishedContentTypes.set(id, ct.clone())

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.PublishContentType)) {
        const errors = validator.validate(ct, this.savedContentTypes.get(id), this.publishedContentTypes.get(id))
        this.currentErrorsRecorded = this.currentErrorsRecorded.concat(errors)
      }
    }

    return ct
  }

  async unpublishContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(unpublishRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.modifiedContentTypes.set(id, ct)
    await this.savedContentTypes.set(id, ct)
    await this.publishedContentTypes.delete(id)

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.UnpublishContentType)) {
        const errors = validator.validate(ct, this.savedContentTypes.get(id), this.publishedContentTypes.get(id))
        this.currentErrorsRecorded = this.currentErrorsRecorded.concat(errors)
      }
    }

    return ct
  }

  async deleteContentType (id: string) {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(deleteRequest(ct.clone()))

    await this.modifiedContentTypes.delete(id)
    await this.publishedContentTypes.delete(id)
    await this.savedContentTypes.delete(id)

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.DeleteContentType)) {
        const errors = validator.validate(ct, this.savedContentTypes.get(id), this.publishedContentTypes.get(id))
        this.currentErrorsRecorded = this.currentErrorsRecorded.concat(errors)
      }
    }
  }

  async saveEntry (id: string) {
    this.assertRecording()

    const hasEntry = this.entries.some((entry) => entry.id === id)

    if (!hasEntry) {
      throw new Error(`Cannot save Entry ${id} because it does not exist`)
    }

    const entry = this.entries.find((entry) => entry.id === id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveEntryRequest(entry.clone()))

    // Mutate version bump
    entry.version = entry.version + 1

    return entry
  }

  async publishEntry (id: string): Promise<Entry> {
    this.assertRecording()

    const hasEntry = this.entries.some((entry) => entry.id === id)

    if (!hasEntry) {
      throw new Error(`Cannot publish Entry ${id} because it does not exist`)
    }    // Store clone as a request
    const entry = this.entries.find((entry) => entry.id === id)

    this.currentRequestsRecorded.push(publishEntryRequest(entry.clone()))

    // Mutate version bump
    entry.version = entry.version + 1

    return entry
  }

  async getEntriesForContentType (ctId: string): Promise<Entry[]> {
    const entries = this.entries.filter((entry) => entry.contentTypeId === ctId)

    return entries
  }

  async startRecordingRequests (id: string) {
    if (this.isRecordingRequests) {
      throw new Error('You need to stop recording before starting again')
    }
    this.isRecordingRequests = true
    this.currentRequestsRecorded = []
    this.currentErrorsRecorded = []
    this.batchId = id
  }

  // Returns all requests that needed to happen
  // for all changes
  async stopRecordingRequests () {
    if (!this.isRecordingRequests) {
      throw new Error('You need to start recording before stopping')
    }
    const batch: RequestBatch = {
      id: this.batchId,
      requests: this.currentRequestsRecorded,
      errors: this.currentErrorsRecorded
    }

    this.requestBatches.push(batch)

    this.isRecordingRequests = false
    this.currentRequestsRecorded = []
    this.currentErrorsRecorded = []
    this.batchId = null
  }

  async getRequestBatches (): Promise<RequestBatch[]> {
    if (this.isRecordingRequests) {
      throw new Error('Cannot get batches while still recording')
    }
    return this.requestBatches
  }

  private assertRecording () {
    if (this.isRecordingRequests) {
      return
    }

    throw new Error('You need to be recording to use the API methods.')
  }
}

export {
  OfflineAPI as default,
  OfflineAPI,
  RequestBatch
}
