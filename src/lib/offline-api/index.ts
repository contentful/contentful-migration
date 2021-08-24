import { omit, compact, get } from 'lodash'
import FieldDeletionValidator from './validator/field-deletion'
import { ContentTypePayloadValidator } from './validator/content-type'
import { TagSchemaValidator } from './validator/tag'
import { EntryValidator } from './validator/entry'
import { ContentType, EditorInterfaces } from '../entities/content-type'
import Request from '../interfaces/request'
import { Entry } from '../entities/entry'
import { Tag } from '../entities/tag'
import { PayloadValidationError, InvalidActionError } from '../interfaces/errors'
import DisplayFieldValidator from './validator/display-field'
import SchemaValidator from './validator/schema/index'
import TypeChangeValidator from './validator/type-change'
import TagsOnEntryValidator from './validator/tags-on-entry'
import { Intent } from '../interfaces/intent'
import APIEntry from '../interfaces/api-entry'
import APITag, { TagVisibility } from '../interfaces/api-tag'
import Link from '../entities/link'

interface RequestBatch {
  intent: Intent
  requests: Request[]
  validationErrors: (PayloadValidationError | InvalidActionError)[],
  runtimeErrors: Error[],
}

interface OfflineApiOptions {
  contentTypes: Map<String, ContentType>
  entries: Entry[]
  locales: string[]
  editorInterfacesByContentType?: Map<String, EditorInterfaces>
  tags?: Map<String, Tag>
}

export enum ApiHook {
  SaveContentType = 'SAVE_CONTENT_TYPE',
  PublishContentType = 'PUBLISH_CONTENT_TYPE',
  UnpublishContentType = 'UNPUBLISH_CONTENT_TYPE',
  SaveTag = 'SAVE_TAG',
  SaveEntry = 'SAVE_ENTRY'
}

const saveContentTypeRequest = function (ct: ContentType): Request {
  const apiContentType = omit(ct.toAPI(), 'sys')
  apiContentType.fields = apiContentType.fields.filter(field => !field.deleted)
  return {
    method: 'PUT',
    url: `/content_types/${ct.id}`,
    headers: {
      'X-Contentful-Version': ct.version
    },
    data: apiContentType
  }
}

const saveEntryRequest = function (entry: Entry): Request {
  return {
    method: 'PUT',
    url: `/entries/${entry.id}`,
    headers: {
      'X-Contentful-Version': entry.version,
      'X-Contentful-Content-Type': entry.contentTypeId
    },
    data: entry.toApiEntry()
  }
}

const publishEntryRequest = function (entry: Entry): Request {
  return {
    method: 'PUT',
    url: `/entries/${entry.id}/published`,
    headers: {
      'X-Contentful-Version': entry.version,
      'X-Contentful-Content-Type': entry.contentTypeId
    }
  }
}

const unpublishEntryRequest = function (entry: Entry): Request {
  return {
    method: 'DELETE',
    url: `/entries/${entry.id}/published`,
    headers: {
      'X-Contentful-Version': entry.version
    }
  }
}

const deleteEntryRequest = function (entry: Entry): Request {
  return {
    method: 'DELETE',
    url: `/entries/${entry.id}`,
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

const saveEditorInterfacesRequest = function (contentTypeId: string, editorInterfaces: EditorInterfaces): Request {
  return {
    method: 'PUT',
    url: `/content_types/${contentTypeId}/editor_interface`,
    headers: {
      'X-Contentful-Version': editorInterfaces.version
    },
    data: editorInterfaces.toAPI()
  }
}

const saveTagRequest = function (tag: Tag): Request {
  return {
    method: 'PUT',
    url: `/tags/${tag.id}`,
    headers: {
      'X-Contentful-Version': tag.version
    },
    data: tag.toApiTag()
  }
}

const deleteTagRequest = function (tag: Tag): Request {
  return {
    method: 'DELETE',
    url: `/tags/${tag.id}`,
    headers: {
      'X-Contentful-Version': tag.version
    }
  }
}

class OfflineAPI {
  private modifiedContentTypes: Map<String, ContentType> = null
  private savedContentTypes: Map<String, ContentType> = null
  private publishedContentTypes: Map<String, ContentType> = null
  private editorInterfaces: Map<String, EditorInterfaces> = null
  private entries: Entry[] = null
  private isRecordingRequests: boolean = false
  private currentRequestsRecorded: Request[] = null
  private currentValidationErrorsRecorded: (PayloadValidationError | InvalidActionError)[] = null
  private currentRuntimeErrorsRecorded: Error[]
  private intent: Intent = null
  private requestBatches: RequestBatch[] = []
  private contentTypeValidators: ContentTypePayloadValidator[] = []
  private locales: string[] = []
  private modifiedTags: Map<String, Tag> = null
  private savedTags: Map<String, Tag> = null
  private tagValidators: TagSchemaValidator[] = []
  private entryValidators: EntryValidator[] = []

  constructor (options: OfflineApiOptions) {
    const {
      contentTypes,
      entries,
      locales,
      editorInterfacesByContentType = new Map<String, EditorInterfaces>(),
      tags = new Map<String, Tag>()
    } = options

    this.modifiedContentTypes = contentTypes
    this.modifiedTags = tags

    // Initialize saved and published state
    // These are (currently) exclusively needed for stateful validations
    // for example "cannot delete before omitted was published"
    //
    // Since the `modifiedContentTypes` are mutable,
    // we need to perform a clone.
    // TODO: Build a better abstraction over `Map` that allows easy cloning
    // and also allows us to implement async iterators
    this.savedContentTypes = new Map()
    this.savedTags = new Map()
    this.publishedContentTypes = new Map()
    this.editorInterfaces = editorInterfacesByContentType

    for (const [id, contentType] of contentTypes.entries()) {
      this.savedContentTypes.set(id, contentType.clone())
      this.publishedContentTypes.set(id, contentType.clone())
    }

    this.contentTypeValidators.push(new FieldDeletionValidator())
    this.contentTypeValidators.push(new DisplayFieldValidator())
    this.contentTypeValidators.push(new SchemaValidator())
    this.contentTypeValidators.push(new TypeChangeValidator())

    this.tagValidators.push(new TagSchemaValidator())

    // TODO We skip a schema validator for now, because in order to
    // properly implement it, we would need to bump joi.
    // TagsOnEntryValidator will failed if modifiedTags (tags in environment) is empty
    this.entryValidators.push(new TagsOnEntryValidator(this.modifiedTags))

    this.entries = entries
    this.locales = locales
  }

  async getContentType (id: string): Promise<ContentType> {
    if (!this.hasContentType(id)) {
      throw new Error(`Cannot get Content Type ${id} because it does not exist`)
    }

    return this.modifiedContentTypes.get(id)
  }

  async getEditorInterfaces (contentTypeId: string): Promise<EditorInterfaces> {
    if (!this.editorInterfaces.has(contentTypeId)) {
      throw new Error(`Cannot get editor interfaces for Content Type ${contentTypeId} because it does not exist`)
    }

    return this.editorInterfaces.get(contentTypeId)
  }

  async hasContentType (id: string): Promise<boolean> {
    return this.modifiedContentTypes.has(id)
  }

  async createContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = new ContentType({ sys: { id, version: 0 }, fields: [], name: undefined })

    this.modifiedContentTypes.set(id, ct)

    return ct
  }

  async saveContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const hasContentType = this.modifiedContentTypes.has(id)

    if (!hasContentType) {
      throw new Error(`Cannot save the content type (id: ${id}) because it does not exist`)
    }

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveContentTypeRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    this.modifiedContentTypes.set(id, ct)
    this.savedContentTypes.set(id, ct.clone())

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.SaveContentType)) {
        const errors = validator.validate({
          contentType: ct,
          savedContentType: this.savedContentTypes.get(id),
          publishedContentType: this.publishedContentTypes.get(id),
          locales: this.locales
        })
        this.currentValidationErrorsRecorded = this.currentValidationErrorsRecorded.concat(errors)
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
    this.modifiedContentTypes.set(id, ct)
    this.savedContentTypes.set(id, ct.clone())
    this.publishedContentTypes.set(id, ct.clone())
    if (this.editorInterfaces.has(id)) {
      const editorInterfaces = this.editorInterfaces.get(id)
      editorInterfaces.version = editorInterfaces.version + 1
    }

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.PublishContentType)) {
        const errors = validator.validate({
          contentType: ct,
          savedContentType: this.savedContentTypes.get(id),
          publishedContentType: this.publishedContentTypes.get(id),
          locales: this.locales
        })
        this.currentValidationErrorsRecorded = this.currentValidationErrorsRecorded.concat(errors)
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

    this.modifiedContentTypes.set(id, ct)
    this.savedContentTypes.set(id, ct)
    this.publishedContentTypes.delete(id)

    for (const validator of this.contentTypeValidators) {
      if (validator.hooks.includes(ApiHook.UnpublishContentType)) {
        const errors = validator.validate({
          contentType: ct,
          savedContentType: this.savedContentTypes.get(id),
          publishedContentType: this.publishedContentTypes.get(id),
          locales: this.locales
        })
        this.currentValidationErrorsRecorded = this.currentValidationErrorsRecorded.concat(errors)
      }
    }

    return ct
  }

  async deleteContentType (id: string) {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(deleteRequest(ct.clone()))

    this.modifiedContentTypes.delete(id)
    this.publishedContentTypes.delete(id)
    this.savedContentTypes.delete(id)

  }

  async saveEditorInterfaces (contentTypeId: string) {
    this.assertRecording()
    if (!this.editorInterfaces.has(contentTypeId)) {
      throw new Error(`Cannot save editor interfaces for Content Type ${contentTypeId} because they do not exist`)
    }
    const editorInterfaces = this.editorInterfaces.get(contentTypeId)
    this.currentRequestsRecorded.push(saveEditorInterfacesRequest(contentTypeId, editorInterfaces))
    editorInterfaces.version = editorInterfaces.version + 1
    return editorInterfaces
  }

  async createEntry (contentTypeId: string, id: string): Promise<Entry> {
    this.assertRecording()

    const entryData: APIEntry = {
      sys: {
        id,
        version: 0,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: contentTypeId }
        }
      },
      fields: {}
    }

    const entry = new Entry(entryData)

    this.entries.push(entry)

    return entry
  }

  async saveEntry (id: string) {
    this.assertRecording()

    const hasEntry = await this.hasEntry(id)

    if (!hasEntry) {
      throw new Error(`Cannot save Entry ${id} because it does not exist`)
    }

    const entry = this.entries.find((entry) => entry.id === id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveEntryRequest(entry.clone()))

    // Mutate version bump
    entry.version = entry.version + 1

    // TODO: Add a validator for entries here that checks their final
    // payload and checks it against existing tags

    for (const validator of this.entryValidators) {
      if (validator.hooks.includes(ApiHook.SaveEntry)) {
        const errors = validator.validate(entry)
        this.currentValidationErrorsRecorded = this.currentValidationErrorsRecorded.concat(errors)
      }
    }

    return entry
  }

  async hasEntry (id: string): Promise<boolean> {
    return this.entries.some((entry) => entry.id === id)
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
    entry.publishedVersion = entry.version
    entry.version = entry.version + 1

    return entry
  }

  async unpublishEntry (id: string): Promise<Entry> {
    this.assertRecording()

    const hasEntry = this.entries.some((entry) => entry.id === id)

    if (!hasEntry) {
      throw new Error(`Cannot unpublish Entry ${id} because it does not exist`)
    }

    const entry = this.entries.find((entry) => entry.id === id)

    // Store clone as a request
    this.currentRequestsRecorded.push(unpublishEntryRequest(entry.clone()))

    // Mutate version bump
    entry.publishedVersion = null
    entry.version = entry.version + 1

    return entry
  }

  async deleteEntry (id: string): Promise<Entry> {
    this.assertRecording()

    const hasEntry = this.entries.some((entry) => entry.id === id)

    if (!hasEntry) {
      throw new Error(`Cannot delete Entry ${id} because it does not exist`)
    }    // Store clone as a request
    const entry = this.entries.find((entry) => entry.id === id)

    const index = this.entries.indexOf(entry)
    this.entries.splice(index, 1)

    this.currentRequestsRecorded.push(deleteEntryRequest(entry.clone()))

    return entry
  }

  async getEntriesForContentType (ctId: string): Promise<Entry[]> {
    const entries = this.entries.filter((entry) => entry.contentTypeId === ctId)
    return entries
  }

  async getLinks (childId: string, locales: string[]): Promise<Link[]> {

    const links: Link[] = []

    for (let entry of this.entries) {
      const fields = entry.fields
      for (let key of Object.keys(fields)) {
        for (let locale of locales) {
          const field = get(entry.fields, `${key}.${locale}`)
          if (get(field, 'sys.id') === childId) {
            links.push(new Link(entry, key, locale))
          }
          if (field instanceof Array) {
            const fieldArray = field
            fieldArray.forEach((fieldEntry, index) => {
              if (get(fieldEntry, 'sys.id') === childId) {
                links.push(new Link(entry, key, locale, index))
              }
            })
          }
        }
      }
    }

    return links
  }

  async getLocalesForSpace () {
    return this.locales
  }

  async startRecordingRequests (intent: Intent) {
    if (this.isRecordingRequests) {
      throw new Error('You need to stop recording before starting again')
    }
    this.isRecordingRequests = true
    this.currentRequestsRecorded = []
    this.currentValidationErrorsRecorded = []
    this.currentRuntimeErrorsRecorded = []
    this.intent = intent
  }

  // Returns all requests that needed to happen
  // for all changes
  async stopRecordingRequests () {
    if (!this.isRecordingRequests) {
      throw new Error('You need to start recording before stopping')
    }
    const batch: RequestBatch = {
      intent: this.intent,
      requests: this.currentRequestsRecorded,
      validationErrors: compact(this.currentValidationErrorsRecorded),
      runtimeErrors: this.currentRuntimeErrorsRecorded
    }

    this.requestBatches.push(batch)

    this.isRecordingRequests = false
    this.currentRequestsRecorded = []
    this.currentValidationErrorsRecorded = []
    this.intent = null
  }

  async getRequestBatches (): Promise<RequestBatch[]> {
    if (this.isRecordingRequests) {
      throw new Error('Cannot get batches while still recording')
    }
    return this.requestBatches
  }

  async createTag (id: string, visibility: TagVisibility = 'private'): Promise<Tag> {
    this.assertRecording()

    const tagData: APITag = {
      sys: {
        id,
        version: 0,
        visibility
      },
      name: undefined
    }

    const tag = new Tag(tagData)

    this.modifiedTags.set(id, tag)

    return tag
  }

  async saveTag (id: string) {
    this.assertRecording()

    const hasTag = await this.hasTag(id)

    if (!hasTag) {
      throw new Error(`Cannot save the tag (id: ${id}) because it does not exist`)
    }

    const tag = await this.getTag(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveTagRequest(tag.clone()))

    // Mutate version bump
    tag.version = tag.version + 1

    this.modifiedTags.set(id, tag)
    this.savedTags.set(id, tag.clone())

    for (const validator of this.tagValidators) {
      if (validator.hooks.includes(ApiHook.SaveTag)) {
        const errors = validator.validate(tag)
        this.currentValidationErrorsRecorded = this.currentValidationErrorsRecorded.concat(errors)
      }
    }

    return tag
  }

  async deleteTag (id: string) {
    this.assertRecording()

    const tag = await this.getTag(id)
    this.currentRequestsRecorded.push(deleteTagRequest(tag.clone()))

    this.modifiedTags.delete(id)
    this.savedTags.delete(id)
  }

  async hasTag (id: string): Promise<boolean> {
    return this.modifiedTags.has(id)
  }

  async getTag (id: string): Promise<Tag> {
    if (!this.hasTag(id)) {
      throw new Error(`Cannot get Tag ${id} because it does not exist`)
    }

    return this.modifiedTags.get(id)
  }

  async getTagsForEnvironment (): Promise<Map<String, Tag>> {
    return this.modifiedTags
  }

  public async recordRuntimeError (error) {
    this.currentRuntimeErrorsRecorded.push(error)
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
