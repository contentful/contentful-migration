import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'

class EditorLayoutDeleteFieldAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldId: string

  constructor(contentTypeId: string, fieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  getEntityType(): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  async applyTo(editorInterfaces: EditorInterfaces) {
    await editorInterfaces.deleteFieldFromEditorLayout(this.fieldId)
  }
}

export { EditorLayoutDeleteFieldAction }
