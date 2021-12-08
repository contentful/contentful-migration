import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'
import { APIEditorInterfaceGroupControl } from '../../interfaces/content-type'

class EditorLayoutChangeFieldGroupControlAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldGroupId: string
  private readonly groupControl: Omit<APIEditorInterfaceGroupControl, 'groupId'>

  constructor (contentTypeId: string, fieldGroupId: string, groupControl: Omit<APIEditorInterfaceGroupControl, 'groupId'>) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldGroupId = fieldGroupId
    this.groupControl = groupControl
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.updateGroupControl(this.fieldGroupId, this.groupControl)
  }
}

export { EditorLayoutChangeFieldGroupControlAction }
