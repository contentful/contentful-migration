import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'
import { SidebarWidgetNamespace } from './sidebarwidget'

class SidebarWidgetRemoveAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace: SidebarWidgetNamespace

  constructor (contentTypeId: string,
               widgetId: string,
               widgetNamespace: SidebarWidgetNamespace) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.widgetNamespace = widgetNamespace
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.removeSidebarWidget(
      this.widgetId,
      this.widgetNamespace
    )
  }
}

export { SidebarWidgetRemoveAction }
