import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'

class EditorLayoutDeleteAction extends EntityAction {
  private readonly contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.deleteEditorLayout()
  }
}

export { EditorLayoutDeleteAction }
