import { EditorInterfaces } from '../entities/content-type'
import { EntityAction, EntityType } from './action'

export type EntryEditorNamespace = 'extension' | 'app'
export interface EntryEditorSettings {
  [key: string]: any
}
export interface EntryEditor {
  widgetNamespace: EntryEditorNamespace
  widgetId: string
  settings?: EntryEditorSettings
  disabled?: boolean
}

class EntryEditorsConfigureAction extends EntityAction {
  protected contentTypeId: string
  protected editors: EntryEditor[]

  constructor(contentTypeId: string, editors: EntryEditor[]) {
    super()
    this.contentTypeId = contentTypeId
    this.editors = editors
  }

  getEntityType(): EntityType {
    return EntityType.EditorInterface
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  async applyTo(editorInterfaces: EditorInterfaces) {
    editorInterfaces.setEditors(this.editors)
  }
}

export { EntryEditorsConfigureAction }
