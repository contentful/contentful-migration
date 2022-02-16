import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'

export type EntryEditorNamespace = 'extension' | 'app'
export interface EntryEditorSettings {
  [key: string]: any
}

class EntryEditorConfigureAction extends EntityAction {
  protected contentTypeId: string
  protected widgetId: string
  protected widgetNamespace?: EntryEditorNamespace
  protected settings?: EntryEditorSettings

  constructor (
    contentTypeId: string,
    widgetNamespace: EntryEditorNamespace,
    widgetId: string,
    settings: EntryEditorSettings
  ) {
    super()
    this.contentTypeId = contentTypeId
    this.widgetId = widgetId
    this.widgetNamespace = widgetNamespace
    this.settings = settings
  }

  getEntityType (): EntityType {
    return EntityType.EditorInterface
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
