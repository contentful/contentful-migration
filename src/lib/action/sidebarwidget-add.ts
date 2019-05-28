import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'
import { APIWidgetNamespace } from '../interfaces/content-type'

interface SidebarWidgetSettings {
  [key: string]: any
}

class SidebarWidgetAddAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace: APIWidgetNamespace
  protected settings: SidebarWidgetSettings
  protected disabled: boolean

  constructor (contentTypeId: string,
               widgetId: string,
               widgetNamespace: APIWidgetNamespace,
               settings?: SidebarWidgetSettings,
               disabled: boolean = false) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.widgetNamespace = widgetNamespace
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
      this.settings,
      this.disabled
    )
  }
}

export { SidebarWidgetAddAction }
