import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'

class EditorLayoutRenameFieldAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly oldFieldId: string

  private readonly newFieldId: string

  constructor(contentTypeId: string, oldFieldId: string, newFieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.oldFieldId = oldFieldId
    this.newFieldId = newFieldId
  }

  getEntityType(): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  async applyTo(editorInterfaces: EditorInterfaces) {
    await editorInterfaces.updateFieldIdInEditorLayout(this.oldFieldId, this.newFieldId)
  }
}

export { EditorLayoutRenameFieldAction }
