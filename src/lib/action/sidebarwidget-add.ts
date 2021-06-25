import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'
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

  getEntityType (): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.addSidebarWidget(
      this.widgetId,
      this.widgetNamespace,
      this.settings,
      this.insertBeforeWidgetId,
      this.disabled
    )
  }
}

export { SidebarWidgetAddAction }
