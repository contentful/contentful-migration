export interface EntryEditor {
  Id: string
  Namespace?: EntryEditorNamespace
}

export interface EntryEditorSettings {
  [key: string]: any
}

export type EntryEditorNamespace = 'extension' | 'app'
