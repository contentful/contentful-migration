import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class SidebarResetToDefaultAction extends EntityAction {
  protected contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.resetSidebarToDefault()
  }
}

export { SidebarResetToDefaultAction }
