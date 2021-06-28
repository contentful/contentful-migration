import { cloneDeep, find, filter, findIndex, pull, forEach } from 'lodash'

import {
  APIContentType,
  Field,
  APISidebarWidgetSettings,
  APIEditorInterfaceControl,
  APIEditorInterfaces,
  APIEditorInterfaceSettings,
  APIEditorInterfaceSidebar,
  APIEditorIntefaceEditor,
  APISidebarWidgetNamespace, APIControlWidgetNamespace
} from '../interfaces/content-type'
import { SidebarWidgetNamespace, DEFAULT_SIDEBAR_LIST } from '../action/sidebarwidget'

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
  private _editors?: APIEditorIntefaceEditor[]

  constructor (apiEditorInterfaces: APIEditorInterfaces) {
    this._version = apiEditorInterfaces.sys.version
    this._controls = apiEditorInterfaces.controls
    this._sidebar = apiEditorInterfaces.sidebar || undefined
    this._editor = apiEditorInterfaces.editor || undefined
    this._editors = apiEditorInterfaces.editors || undefined
  }

  get version () {
    return this._version
  }

  set version (version: number) {
    this._version = version
  }

  getSidebar () {
    return this._sidebar
  }

  getEditor () {
    return this._editor
  }

  getEditors () {
    return this._editors
  }

  getControls () {
    return this._controls
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
      this.update(toFieldId, control.widgetId, control.settings, control.widgetNamespace)
    }
  }

  update (
    fieldId: string,
    widgetId: string,
    settings?: APIEditorInterfaceSettings,
    widgetNamespace?: APIControlWidgetNamespace
  ) {
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

    if (widgetNamespace) {
      control.widgetNamespace = widgetNamespace
    }
  }

  addSidebarWidget (
    widgetId: string,
    widgetNamespace: APISidebarWidgetNamespace,
    settings: APISidebarWidgetSettings,
    insertBeforeWidgetId: string,
    disabled: boolean
  ) {

    this._sidebar = Array.isArray(this._sidebar) ? this._sidebar : [].concat(DEFAULT_SIDEBAR_LIST)
    const isDuplicateWidget = this._sidebar.find(widget => widget.widgetId === widgetId && widget.widgetNamespace === widgetNamespace)

    if (isDuplicateWidget) {
      return
    }

    const nextWidgetIndex = this._sidebar.map(w => w.widgetId).indexOf(insertBeforeWidgetId)

    const newWidget: APIEditorInterfaceSidebar = {
      disabled,
      settings,
      widgetId,
      widgetNamespace
    }

    if (nextWidgetIndex < 0) {
      this._sidebar.push(newWidget)
    } else {
      this._sidebar.splice(nextWidgetIndex, 0, newWidget)
    }
  }

  updateSidebarWidget (
    widgetId: string,
    widgetNamespace: SidebarWidgetNamespace,
    settings?: APISidebarWidgetSettings,
    disabled?: boolean
  ) {

    this._sidebar = Array.isArray(this._sidebar) ? this._sidebar : [].concat(DEFAULT_SIDEBAR_LIST)
    const existingWidget = this._sidebar.find(widget => widget.widgetId === widgetId && widget.widgetNamespace === widgetNamespace)

    if (!existingWidget) {
      return
    }

    existingWidget.settings = settings ? settings : existingWidget.settings
    existingWidget.disabled = typeof disabled === 'boolean' ? disabled : existingWidget.disabled
  }

  removeSidebarWidget (widgetId: string, widgetNamespace: APISidebarWidgetNamespace) {
    const currentSidebarWidgets = Array.isArray(this._sidebar) ? this._sidebar : [].concat(DEFAULT_SIDEBAR_LIST)
    const widgetToDisable = currentSidebarWidgets.find(widget => widget.widgetId === widgetId && widget.widgetNamespace === widgetNamespace)

    if (!widgetToDisable) {
      return
    }

    this._sidebar = currentSidebarWidgets.filter(widget => widget.widgetId !== widgetId || widget.widgetNamespace !== widgetNamespace)
  }

  resetSidebarToDefault () {
    this._sidebar = undefined
  }

  resetEditorToDefault () {
    this._editor = undefined
    this._editors = undefined
  }

  setEditor (editor: APIEditorIntefaceEditor) {
    this._editor = editor
  }

  setEditors (editors: APIEditorIntefaceEditor[]) {
    this._editors = editors
  }

  toAPI (): object {
    let controls: APIEditorInterfaceControl[] = []
    forEach(this._controls, (c) => {
      controls.push({
        fieldId: c.fieldId,
        widgetId: c.widgetId,
        settings: c.settings,
        widgetNamespace: c.widgetNamespace
      })
    })

    const result: {
      controls: APIEditorInterfaceControl[],
      sidebar?: APIEditorInterfaceSidebar[],
      editor?: APIEditorIntefaceEditor,
      editors?: APIEditorIntefaceEditor[]
    } = {
      controls
    }

    if (this._sidebar) {
      result.sidebar = this._sidebar
    }

    // prefer editors over editor
    if (this._editors) {
      result.editors = this._editors
    } else if (this._editor) {
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
