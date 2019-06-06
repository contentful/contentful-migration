import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'
import { SidebarWidgetNamespace, SidebarWidgetSettings } from './sidebarwidget'

class SidebarWidgetUpdateAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace: SidebarWidgetNamespace
  protected settings: SidebarWidgetSettings
  protected disabled: boolean

  constructor (contentTypeId: string,
               widgetId: string,
               widgetNamespace: SidebarWidgetNamespace,
               settings?: SidebarWidgetSettings,
               disabled?: boolean) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.settings = settings
    this.disabled = disabled
    this.widgetNamespace = widgetNamespace
  }

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.updateSidebarWidget(
      this.widgetId,
      this.widgetNamespace,
      this.settings,
      this.disabled
    )
  }
}

export { SidebarWidgetUpdateAction }
