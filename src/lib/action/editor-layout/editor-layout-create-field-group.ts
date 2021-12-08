import { EditorInterfaces } from '../../entities/content-type'
import { EntityAction, EntityType } from '../action'

interface FieldGroupItem {
  groupId: string
  name: string
  items: EditorLayoutItem[]
}

interface FieldItem {
  fieldId: string
}

type EditorLayoutItem = FieldItem | FieldGroupItem

export type EditorLayout = EditorLayoutItem[]

class EditorLayoutCreateFieldGroupAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldGroupId: string
  private readonly parentFieldGroupId: string

  constructor (contentTypeId: string, fieldGroupId: string, parentFieldGroupId?: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldGroupId = fieldGroupId
    this.parentFieldGroupId = parentFieldGroupId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.createEditorLayoutFieldGroup(this.fieldGroupId, this.parentFieldGroupId)
    if (!this.parentFieldGroupId) {
      await editorInterfaces.createTabGroupControl(this.fieldGroupId)
    }
  }
}

export { EditorLayoutCreateFieldGroupAction }
