import { cloneDeep } from 'lodash'
import APIEntry from '../interfaces/api-entry'
import { isNullOrUndefined } from 'util'

class Entry {
  private _id: string
  private _contentTypeId: string
  private _version: number
  private _fields: object
  private _isPublished: boolean

  constructor (entry: APIEntry) {
    this._id = entry.sys.id
    this._fields = entry.fields
    this._version = entry.sys.version
    this._contentTypeId = entry.sys.contentType.sys.id
    this._isPublished = !isNullOrUndefined(entry.sys.publishedVersion)
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
    const link = { sys: { id: linkId, type: 'Link', linkType: 'Entry'}}
    const field = this._fields[id] || {}
    const fieldArray = field[locale] as Array<any> || new Array<any>()

    if (fieldArray.length < index + 1) {
      fieldArray.push(link)
    } else {
      fieldArray.splice(index, 1, link)
    }
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  get isPublished () {
    return this._isPublished
  }

  set isPublished (published: boolean) {
    this._isPublished = published
  }

  toApiEntry (): APIEntry {
    const sys = {
      id: this.id,
      version: this.version,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: this.contentTypeId
        }
      }
    }

    return {
      sys,
      fields: cloneDeep(this.fields)
    }
  }

  clone (): Entry {
    return new Entry(this.toApiEntry())
  }
}

export {
  Entry as default,
  Entry
}
