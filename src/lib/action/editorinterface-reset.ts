import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class ResetEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string

  constructor (contentTypeId: string, fieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  getFieldId (): string {
    return this.fieldId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.reset(this.getFieldId())
  }
}

export { ResetEditorInterfaceAction }
