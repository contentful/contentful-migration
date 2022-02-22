import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'

class SidebarResetToDefaultAction extends EntityAction {
  protected contentTypeId: string

  constructor(contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  async applyTo(editorInterfaces: EditorInterfaces) {
    editorInterfaces.resetSidebarToDefault()
  }
}

export { SidebarResetToDefaultAction }
