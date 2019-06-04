import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

class SidebarWidgetRemoveAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string

  constructor (contentTypeId: string,
               widgetId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
  }

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.removeSidebarWidget(
      this.widgetId
    )
  }
}

export { SidebarWidgetRemoveAction }
