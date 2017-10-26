// - ApiAction
// - EntityAction
import ContentType from '../entities/content-type'
import Request from '../interfaces/request'
import { Entry } from '../entities/entry'

interface RequestBatch {
  id: string
  requests: Request[]
}

const saveContentTypeRequest = function (ct: ContentType): Request {
  return {
    method: 'PUT',
    url: `/content_types/${ct.id}`,
    headers: {
      'X-Contentful-Version': ct.version
    },
    data: {
      name: ct.name,
      description: ct.description,
      fields: ct.toRaw().fields
    }
  }
}

const saveEntryRequest = function (entry: Entry): Request {
  return {
    method: 'PUT',
    url: `/entries/${entry.id}`,
    headers: {
      'X-Contentful-Version': entry.version
    },
    data: {
      fields: entry.toRaw().fields
    }
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
  private contentTypes: Map<String, ContentType> = null
  private entries: Entry[] = null
  private isRecordingRequests: boolean = false
  private currentRequestsRecorded: Request[] = null
  private batchId: string = null
  private requestBatches: RequestBatch[] = []

  constructor (contentTypes: Map<String, ContentType> = new Map(), entries: Entry[] = []) {
    this.contentTypes = contentTypes
    this.entries = entries
  }

  async getContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    if (!this.hasContentType(id)) {
      throw new Error(`Cannot get CT ${id} because it does not exist`)
    }

    return this.contentTypes.get(id)
  }

  async hasContentType (id: string): Promise<boolean> {
    return this.contentTypes.has(id)
  }

  async createContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = new ContentType({ id , version: 0 })

    await this.contentTypes.set(id, ct)

    return ct
  }

  async saveContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const hasContentType = this.contentTypes.has(id)

    if (!hasContentType) {
      throw new Error(`Cannot save CT ${id} because it does not exist`)
    }

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(saveContentTypeRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.contentTypes.set(id, ct)

    return ct
  }

  async publishContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(publishContentTypeRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.contentTypes.set(id, ct)

    return ct
  }

  async unpublishContentType (id: string): Promise<ContentType> {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(unpublishRequest(ct.clone()))

    // Mutate version bump
    ct.version = ct.version + 1

    await this.contentTypes.set(id, ct)

    return ct
  }

  async deleteContentType (id: string) {
    this.assertRecording()

    const ct = await this.getContentType(id)
    // Store clone as a request
    this.currentRequestsRecorded.push(deleteRequest(ct.clone()))

    await this.contentTypes.delete(id)
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
    this.assertRecording()
    console.log(this.entries)
    const entries = this.entries.filter((entry) => entry.contentTypeId === ctId)

    return entries
  }

  async startRecordingRequests (id: string) {
    if (this.isRecordingRequests) {
      throw new Error('You need to stop recording before starting again')
    }
    this.isRecordingRequests = true
    this.currentRequestsRecorded = []
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
      requests: this.currentRequestsRecorded
    }

    this.requestBatches.push(batch)

    this.isRecordingRequests = false
    this.currentRequestsRecorded = []
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
