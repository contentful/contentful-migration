import { APIContentType, Field, APIEditorInterface, APIEditorInterfaces } from '../interfaces/content-type'
import { cloneDeep, find, filter, findIndex, pull } from 'lodash'

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

  deleteField (id: string) {
    const fieldToDelete = find(this._fields, { id })
    pull(this._fields, fieldToDelete)
  }

  moveField (id: string, direction: string, pivot: string) {
    const fields = this._fields
    const field = this.getField(id)
    pull(fields, field)

    if (direction === 'toTheTop') {
      fields.unshift(field)
    }

    if (direction === 'toTheBottom') {
      fields.push(field)
    }

    const pivotIndex = findIndex(fields, { id: pivot })

    if (direction === 'afterField') {
      fields.splice(pivotIndex + 1, 0, field)
    }

    if (direction === 'beforeField') {
      fields.splice(pivotIndex, 0, field)
    }
  }

  filter (predicate: (field: Field) => boolean): Field[] {
    return filter(this._fields, predicate)
  }

  map<T> (mapper: (field: Field) => T): T[] {
    return this._fields.map(mapper)
  }

  get fields () {
    return this._fields
  }

  set fields (fields: Field[]) {
    this._fields = fields
  }

  clone (): Fields {
    return new Fields(this.toRaw())
  }

  toRaw (): Field[] {
    return cloneDeep(this.fields)
  }
}

class EditorInterfaces {
  private _version: number
  private _controls: Map<string, string>

  constructor (apiEditorInterfaces: APIEditorInterfaces) {
    this._version = apiEditorInterfaces.sys.version
    this._controls = new Map<string, string>()
    apiEditorInterfaces.controls.forEach((ei: APIEditorInterface) => {
      this._controls.set(ei.fieldId, ei.widgetId)
    })
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  update (fieldId: string, widgetId: string) {
    this._controls.set(fieldId, widgetId)
  }

  toAPI (): object {
    let result = new Array<APIEditorInterface>()
    this._controls.forEach((widgetId, fieldId) => result.push({
      fieldId,
      widgetId
    }))
    return {
      controls: result
    }
  }
}

class ContentType {
  public hasEntries: Boolean
  private _id: string
  private _fields: Fields
  private _name: string
  private _description: string
  private _version: number
  private _displayField: string

  constructor (ct: APIContentType) {
    this._id = ct.sys.id
    this._fields = new Fields(ct.fields)
    this._name = ct.name
    this._description = ct.description
    this._version = ct.sys.version
    this._displayField = ct.displayField
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

  get displayField () {
    return this._displayField
  }

  set displayField (displayField: string) {
    this._displayField = displayField
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  toAPI (): APIContentType {
    return {
      sys: {
        id: this.id,
        version: this.version
      },
      name: this.name,
      displayField: this.displayField,
      fields: this.fields.toRaw(),
      description: this.description
    }
  }

  clone (): ContentType {
    return new ContentType(this.toAPI())
  }
}

export {
  ContentType as default,
  ContentType,
  Fields,
  Field,
  EditorInterfaces
}
