import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'
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

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
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
