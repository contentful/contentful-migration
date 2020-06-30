// import { cloneDeep } from 'lodash'
import APITag from '../interfaces/api-tag'

class Tag {
  private _id: string
  private _name: string

  constructor (tag: APITag) {
    this._id = tag.sys.id
    this._name = tag.name
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  setName (name: string) {
    this._name = name
  }

  toApiTag (): APITag {
    const sys = {
      id: this.id,
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
