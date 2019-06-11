import { EditorInterfaces } from '../entities/content-type'
import { APIControlWidgetNamespace, APIEditorInterfaceSettings } from '../interfaces/content-type'
import { EntityAction } from './action'

class UpdateEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string
  private _widgetId: string
  private _settings?: APIEditorInterfaceSettings
  private _widgetNamespace: APIControlWidgetNamespace

  constructor (
    contentTypeId: string,
    fieldId: string,
    widgetId: string,
    settings?: APIEditorInterfaceSettings,
    widgetNamespace?: APIControlWidgetNamespace
  ) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this._widgetId = widgetId
    this._settings = settings
    this._widgetNamespace = widgetNamespace
  }

  getEntityType (): string {
    // TODO: enums
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  getFieldId (): string {
    return this.fieldId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.update(this.getFieldId(), this._widgetId, this._settings, this._widgetNamespace)
  }
}

export { UpdateEditorInterfaceAction }
