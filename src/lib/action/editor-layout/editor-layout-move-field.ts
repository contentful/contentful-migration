import { EditorInterfaces, EditorLayoutFieldMovementDirection } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'

class EditorLayoutMoveFieldGroupAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldId: string
  private readonly direction: EditorLayoutFieldMovementDirection
  private readonly pivot: string

  constructor (contentTypeId: string, fieldId: string, direction: EditorLayoutFieldMovementDirection, pivot?: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId,
    this.direction = direction,
    this.pivot = pivot
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.moveFieldInEditorLayout(this.fieldId, this.direction, this.pivot)
  }
}

export { EditorLayoutMoveFieldGroupAction }
