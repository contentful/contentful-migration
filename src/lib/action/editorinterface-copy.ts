import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class CopyEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected fromFieldId: string
  protected toFieldId: string

  constructor (contentTypeId: string, fromFieldId: string, toFieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fromFieldId = fromFieldId
    this.toFieldId = toFieldId
  }

  getEntityType (): string {
    // TODO: enums
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  getFromFieldId (): string {
    return this.fromFieldId
  }

  getToFieldId (): string {
    return this.toFieldId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.copy(this.getFromFieldId(), this.getToFieldId())
  }
}

export { CopyEditorInterfaceAction }
