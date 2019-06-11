import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'
import { SidebarWidgetNamespace, SidebarWidgetSettings } from './sidebarwidget'

class SidebarWidgetAddAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace: SidebarWidgetNamespace
  protected settings: SidebarWidgetSettings
  protected disabled: boolean
  protected insertBeforeWidgetId: string

  constructor (contentTypeId: string,
               widgetId: string,
               widgetNamespace: SidebarWidgetNamespace,
               insertBeforeWidgetId?: string,
               settings?: SidebarWidgetSettings,
               disabled: boolean = false) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.widgetNamespace = widgetNamespace
    this.insertBeforeWidgetId = insertBeforeWidgetId
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
    editorInterfaces.addSidebarWidget(
      this.widgetId,
      this.widgetNamespace,
      this.insertBeforeWidgetId,
      this.settings,
      this.disabled
    )
  }
}

export { SidebarWidgetAddAction }
