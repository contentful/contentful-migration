import ContentTransform from './content-transform'
import EntryDerive from './entry-derive'
import { APIEditorInterfaceSettings } from './content-type'

interface RawStep {
  type: string
  meta: RawStepMeta
  payload: RawStepPayload
}

interface RawStepMeta {
  contentTypeInstanceId: string
  fieldInstanceId?: string
  callsite: CallSiteInfo
}

interface CallSiteInfo {
  line: number
  file: string
}

interface RawStepPayload {
  contentTypeId: string
  fieldId?: string
  props?: RawStepProps
  transformation?: ContentTransform
  derivation?: EntryDerive
  movement?: Movement
  editorInterfaceCopy?: EditorInterfaceCopy
  editorInterfaceReset?: EditorInterfaceReset
  editorInterface?: EditorInterfaceInfo
}

interface EditorInterfaceInfo {
  fieldId: string
  widgetId: string
  settings?: APIEditorInterfaceSettings
}

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

export {
  RawStep as default,
  RawStep,
  RawStepMeta,
  CallSiteInfo,
  RawStepPayload,
  RawStepProps,
  EditorInterfaceInfo
}
