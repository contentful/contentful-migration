import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class UpdateEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string
  private _widgetId: string

  constructor (contentTypeId: string, fieldId: string, widgetId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this._widgetId = widgetId
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
    editorInterfaces.update(this.getFieldId(), this._widgetId)
  }
}

export { UpdateEditorInterfaceAction }
