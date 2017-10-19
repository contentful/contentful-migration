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
  transformation?: string
  movement?: Movement
}

interface Movement {
  pivot?: string
  direction?: string
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
  RawStepProps
}