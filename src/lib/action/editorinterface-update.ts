import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class UpdateEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string
  private _widgetId: string
  private _settings?: object

  constructor (contentTypeId: string, fieldId: string, widgetId: string, settings?: object) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this._widgetId = widgetId
    this._settings = settings
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
    editorInterfaces.update(this.getFieldId(), this._widgetId, this._settings)
  }
}

export { UpdateEditorInterfaceAction }
