import { EditorInterfaces } from '../entities/content-type'
import { EntityAction } from './action'

export type EntryEditorNamespace = 'extension'
export interface EntryEditorSettings {
  [key: string]: any
}

class EntryEditorConfigureAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace?: EntryEditorNamespace
  protected settings?: EntryEditorSettings

  constructor (contentTypeId: string, widgetNamespace, widgetId, settings) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.widgetNamespace = widgetNamespace
    this.settings = settings
  }

  getEntityType (): string {
    return 'EDITOR_INTERFACE'
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  async applyTo (editorInterfaces: EditorInterfaces) {
    editorInterfaces.setEditor({
      widgetId: this.widgetId,
      widgetNamespace: this.widgetNamespace,
      settings: this.settings
    })
  }
}

export { EntryEditorConfigureAction }
