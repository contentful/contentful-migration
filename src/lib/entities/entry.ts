import { cloneDeep } from 'lodash'
import APIEntry from '../interfaces/api-entry'

class Entry {
  private _id: string
  private _contentTypeId: string
  private _version: number
  private _fields: object

  constructor (entry: APIEntry) {
    this._id = entry.sys.id
    this._fields = entry.fields
    this._version = entry.sys.version
    this._contentTypeId = entry.sys.contentType.sys.id
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

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
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
