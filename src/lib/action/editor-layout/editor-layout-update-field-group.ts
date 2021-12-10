import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'
import { APIEditorLayoutFieldGroupItem } from '../../interfaces/content-type'

class EditorLayoutUpdateFieldGroupAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldGroupId: string
  protected props: Pick<APIEditorLayoutFieldGroupItem, 'name'>

  constructor (contentTypeId: string, fieldGroupId: string, props: Pick<APIEditorLayoutFieldGroupItem, 'name'>) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldGroupId = fieldGroupId
    this.props = props
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.updateEditorLayoutFieldGroup(this.fieldGroupId, this.props)
  }
}

export { EditorLayoutUpdateFieldGroupAction }
