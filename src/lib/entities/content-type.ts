import { cloneDeep, find } from 'lodash'

interface Field {
  id: string
  newId?: string
  name?: string
  type?: string
  linkType?: string
  items?: {
    type: string
    linkType?: string
    validations?: any[]
  }
  omitted?: boolean
  deleted?: boolean
  localized?: boolean
  required?: boolean
  validations?: any[]
  disabled?: boolean
}

class Fields {
  private _fields: Field[]

  constructor (fields: Field[] = []) {
    this._fields = fields
  }

  getField (id: string): Field {
    return find(this._fields, { id })
  }

  setField (id: string, field: Field) {
    const allFields = this.fields

    const currentFieldIndex = allFields.findIndex((field) => field.id === id)
    if (currentFieldIndex === -1) {
      allFields.push(field)
    } else {
      allFields[currentFieldIndex] = field
    }
    this._fields = allFields
  }

  get fields () {
    return this._fields
  }

  set fields (fields: Field[]) {
    this._fields = fields
  }

  clone (): Fields {
    return new Fields(this.fields)
  }

  toRaw (): Field[] {
    return this.fields
  }
}

interface RawCT {
  id: string
  version: number
  name?: string
  fields?: Field[]
  description?: string
}

class ContentType {
  private _id: string
  private _fields: Fields
  private _name: string
  private _description: string
  private _version: number

  constructor (ct: RawCT) {
    this._id = ct.id
    this._fields = new Fields(ct.fields)
    this._name = ct.name
    this._description = ct.description
    this._version = ct.version
  }

  get id () {
    return this._id
  }

  get fields () {
    return this._fields
  }

  set fields (fields: Fields) {
    this._fields = fields
  }

  get name () {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }

  get description () {
    return this._description
  }

  set description (description: string) {
    this._description = description
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  toRaw (): RawCT {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields.toRaw(),
      description: this.description,
      version: this.version
    }
  }

  clone (): ContentType {
    return new ContentType(this.toRaw())
  }
}

export {
  ContentType as default,
  ContentType,
  Fields,
  Field
}
