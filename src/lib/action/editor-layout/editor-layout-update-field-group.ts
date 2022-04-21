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

class EditorLayoutChangeFieldGroupIdAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldGroupId: string
  private readonly newFieldGroupId: string

  constructor (contentTypeId: string, fieldGroupId: string, newFieldGroupId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldGroupId = fieldGroupId
    this.newFieldGroupId = newFieldGroupId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.changeFieldGroupId(this.fieldGroupId, this.newFieldGroupId)
  }
}

export { EditorLayoutUpdateFieldGroupAction, EditorLayoutChangeFieldGroupIdAction }
