// import { cloneDeep } from 'lodash'
import APITag from '../interfaces/api-tag'

class Tag {
  private _id: string
  private _name: string
  private _version: number

  constructor (tag: APITag) {
    this._id = tag.sys.id
    this._name = tag.name
    this._version = tag.sys.version
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


  setName (name: string) {
    this._name = name
  }

  toApiTag (): APITag {
    const sys = {
      id: this.id,
      version: this.version
    }
    return {
      sys,
      name: this._name
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
