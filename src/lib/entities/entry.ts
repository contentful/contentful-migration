import { cloneDeep } from 'lodash'

interface RawEntry {
  id: string
  contentTypeId: string
  version: number
  fields: object
}

class Entry {
  private _id: string
  private _contentTypeId: string
  private _version: number
  private _fields: object

  constructor (entry: RawEntry) {
    this._id = entry.id
    this._fields = entry.fields
    this._version = entry.version
    this._contentTypeId = entry.contentTypeId
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

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  toRaw (): RawEntry {
    return {
      id: this.id,
      contentTypeId: this.contentTypeId,
      fields: cloneDeep(this.fields),
      version: this.version
    }
  }

  clone (): Entry {
    return new Entry(this.toRaw())
  }
}

export {
  Entry as default,
  Entry,
  RawEntry
}
