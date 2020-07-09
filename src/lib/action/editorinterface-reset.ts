import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'

class ResetEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string

  constructor (contentTypeId: string, fieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
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
