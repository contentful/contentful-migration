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

class EditorLayoutDeleteFieldGroupAction extends EntityAction {
  private readonly contentTypeId: string
  private readonly fieldGroupId: string

  constructor (contentTypeId: string, fieldGroupId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldGroupId = fieldGroupId
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    await editorInterfaces.deleteEditorLayoutFieldGroup(this.fieldGroupId)
  }
}

export { EditorLayoutDeleteFieldGroupAction }
