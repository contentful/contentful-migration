import { APIContentType, Field, APIEditorInterfaceControl, APIEditorInterfaces, APIEditorInterfaceSettings, APIEditorInterfaceSidebar, APIEditorIntefaceEditor } from '../interfaces/content-type'
import { cloneDeep, find, filter, findIndex, pull, forEach } from 'lodash'

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
  private _controls: APIEditorInterfaceControl[]
  private _sidebar?: APIEditorInterfaceSidebar[]
  private _editor?: APIEditorIntefaceEditor

  constructor (apiEditorInterfaces: APIEditorInterfaces) {
    this._version = apiEditorInterfaces.sys.version
    this._controls = apiEditorInterfaces.controls
    this._sidebar = apiEditorInterfaces.sidebar || undefined
    this._editor = apiEditorInterfaces.editor || undefined
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  reset (fieldId: string) {
    let controlIndex: number = findIndex(this._controls, (c) => {
      return c.fieldId === fieldId
    })
    if (controlIndex !== -1) {
      this._controls.splice(controlIndex, 1)
    }
  }

  copy (fromFieldId: string, toFieldId: string) {
    let control: APIEditorInterfaceControl = find(this._controls, (c) => {
      return c.fieldId === fromFieldId
    })
    if (control) {
      this.update(toFieldId, control.widgetId, control.settings)
    }
  }

  update (fieldId: string, widgetId: string, settings?: APIEditorInterfaceSettings) {
    let control: APIEditorInterfaceControl = find(this._controls, (c) => {
      return c.fieldId === fieldId
    })

    if (!control) {
      control = {
        fieldId: fieldId,
        widgetId: widgetId
      }
      control.fieldId = fieldId
      this._controls.push(control)
    }

    control.widgetId = widgetId

    if (settings) {
      forEach(settings, (v: any, k: string) => {
        control.settings = control.settings || {}
        control.settings[k] = v
      })
    }
  }

  toAPI (): object {
    let controls: APIEditorInterfaceControl[] = []
    forEach(this._controls, (c) => {
      controls.push({
        fieldId: c.fieldId,
        widgetId: c.widgetId,
        settings: c.settings
      })
    })

    const result: {
      controls: APIEditorInterfaceControl[],
      sidebar?: APIEditorInterfaceSidebar[],
      editor?: APIEditorIntefaceEditor
    } = {
      controls
    }

    if (this._sidebar) {
      result.sidebar = this._sidebar
    }
    if (this._editor) {
      result.editor = this._editor
    }

    return result
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
