import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'

class CopyEditorInterfaceAction extends EntityAction {
  protected contentTypeId: string
  protected sourceFieldId: string
  protected destinationFieldId: string

  constructor (contentTypeId: string, sourceFieldId: string, destinationFieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.sourceFieldId = sourceFieldId
    this.destinationFieldId = destinationFieldId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  getSourceFieldId (): string {
    return this.sourceFieldId
  }

  getDestinationFieldId (): string {
    return this.destinationFieldId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.copy(this.getSourceFieldId(), this.getDestinationFieldId())
  }
}

export { CopyEditorInterfaceAction }
