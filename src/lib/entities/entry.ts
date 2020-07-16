import { cloneDeep } from 'lodash'
import APIEntry from '../interfaces/api-entry'
import isDefined from '../utils/is-defined'

class Entry {
  private _id: string
  private _contentTypeId: string
  private _version: number
  private _fields: object
  private _publishedVersion?: number
  private _tags?: object[]

  constructor (entry: APIEntry) {
    this._id = entry.sys.id
    this._fields = entry.fields
    this._version = entry.sys.version
    this._contentTypeId = entry.sys.contentType.sys.id
    this._publishedVersion = entry.sys.publishedVersion
    this._tags = entry.metadata?.tags
  }

  get id () {
    return this._id
  }

  get contentTypeId () {
    return this._contentTypeId
  }

  get fields () {
    return this._fields
  }

  set fields (fields: object) {
    this._fields = fields
  }

  setField (id: string, value: any) {
    this._fields[id] = value
  }

  setFieldForLocale (id: string, locale: string, value: any) {
    const field = this._fields[id] || {}
    field[locale] = value
    this._fields[id] = field
  }

  replaceArrayLinkForLocale (id: string, locale: string, index: number, linkId: string) {
    const link = { sys: { id: linkId, type: 'Link', linkType: 'Entry' } }
    const field = this._fields[id] || {}
    const fieldArray: any[] = field[locale]

    if (fieldArray.length < index + 1) {
      fieldArray.push(link)
    } else {
      fieldArray[index] = link
    }
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  get isPublished () {
    return isDefined(this._publishedVersion)
  }

  get publishedVersion () {
    return this._publishedVersion
  }

  set publishedVersion (version: number | null) {
    this._publishedVersion = version
  }

  get tags () {
    return this._tags
  }

  set tags (tags: object[]) {
    this._tags = tags
  }

  toApiEntry (): APIEntry {
    const sys = {
      id: this.id,
      version: this.version,
      publishedVersion: this.publishedVersion,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: this.contentTypeId
        }
      }
    }

    let payload: APIEntry
    if (this.tags !== undefined) {
      payload = {
        sys,
        fields: cloneDeep(this.fields),
        metadata: { tags: cloneDeep(this.tags) }
      }
    } else {
      payload = {
        sys,
        fields: cloneDeep(this.fields)
      }
    }
    return payload
  }

  clone (): Entry {
    return new Entry(this.toApiEntry())
  }
}

export {
  Entry as default,
  Entry
}
