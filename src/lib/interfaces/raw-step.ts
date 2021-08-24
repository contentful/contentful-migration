import { TagVisibility } from './api-tag'
import ContentTransform from './content-transform'
import EntryDerive from './entry-derive'
import EntrySetTags from './entry-set-tags'
import TransformEntryToType from './entry-transform-to-type'
import { SidebarWidgetNamespace, SidebarWidgetSettings } from '../action/sidebarwidget'
import {
  EntryEditorNamespace,
  EntryEditorSettings
} from '../action/entryeditor-configure'
import {
  EntryEditor
} from '../action/entryeditors-configure'

interface RawStep {
  type: string
  meta: RawStepMeta
  payload: RawStepPayload
}

interface RawStepMeta {
  contentTypeInstanceId?: string
  fieldInstanceId?: string
  tagInstanceId?: string
  callsite: CallSiteInfo
}

interface CallSiteInfo {
  line: number
  file: string
}

interface RawStepPayload {
  contentTypeId?: string
  fieldId?: string
  props?: RawStepProps
  transformation?: ContentTransform
  derivation?: EntryDerive
  movement?: Movement
  entryTransformationToType?: TransformEntryToType
  editorInterfaceCopy?: EditorInterfaceCopy
  editorInterfaceReset?: EditorInterfaceReset
  editorInterface?: EditorInterfaceInfo
  sidebarWidget?: SidebarWidgetInfo
  entryEditor?: EntryEditorInfo
  entryEditors?: EntryEditor[]
  tagId?: string
  tagVisibility?: TagVisibility
  entryTransformationForTags?: EntrySetTags
}

interface EditorInterfaceInfo {
  fieldId: string
  widgetId: string
  widgetNamespace: FieldControlNamespace
  settings?: FieldControlSettings
}

type SettingsParameterValue = number | boolean | string

interface FieldControlSettings {
  [setting: string]: SettingsParameterValue
}

type FieldControlNamespace = 'builtin' | 'extension'

interface Movement {
  pivot?: string
  direction?: string
}

interface EditorInterfaceCopy {
  source?: string
  destination?: string
}

interface EditorInterfaceReset {
  fieldId: string
}

interface RawStepProps {
  [propName: string]: any
}

export interface SidebarWidgetInfo {
  widgetId: string
  widgetNamespace?: SidebarWidgetNamespace
  disabled?: boolean
  settings?: SidebarWidgetSettings
  insertBeforeWidgetId?: string
}

export interface EntryEditorInfo {
  widgetId: string
  widgetNamespace?: EntryEditorNamespace
  settings?: EntryEditorSettings
}

export {
  RawStep as default,
  RawStep,
  RawStepMeta,
  CallSiteInfo,
  RawStepPayload,
  RawStepProps,
  EditorInterfaceInfo
}
