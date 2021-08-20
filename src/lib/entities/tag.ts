import APITag, { TagVisibility } from '../interfaces/api-tag'

class Tag {
  private _id: string
  private _name: string
  private _version: number
  private _visibility: TagVisibility

  constructor (tag: APITag) {
    this._id = tag.sys.id
    this._version = tag.sys.version
    this._name = tag.name
    this._visibility = tag.sys.visibility || 'private'
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  set name (name: string) {
    this._name = name
  }

  get visibility () {
    return this._visibility || 'private'
  }

  set visibility (visibility: TagVisibility) {
    this._visibility = visibility
  }

  toApiTag (): APITag {
    const sys = {
      id: this.id,
      version: this.version,
      visibility: this.visibility
    }
    return {
      sys,
      name: this.name
    }
  }

  clone (): Tag {
    return new Tag(this.toApiTag())
  }
}

export {
    Tag as default,
    Tag
}
