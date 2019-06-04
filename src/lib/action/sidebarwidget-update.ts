import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'
import { SidebarWidgetSettings } from './sidebarwidget'

class SidebarWidgetUpdateAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected settings: SidebarWidgetSettings
  protected disabled: boolean

  constructor (contentTypeId: string,
               widgetId: string,
               settings?: SidebarWidgetSettings,
               disabled?: boolean) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.settings = settings
    this.disabled = disabled
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
      this.settings,
      this.disabled
    )
  }
}

export { SidebarWidgetUpdateAction }
