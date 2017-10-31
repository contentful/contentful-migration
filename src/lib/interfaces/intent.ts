import { APIAction, EntityAction } from '../action/action'
import RawStep from './raw-step'

interface Intent {
  toActions? (): (APIAction|EntityAction)[]
  toRaw (): RawStep
  getContentTypeId (): string
  getFieldId (): string
  getRawType (): string

  isContentTypeUpdate (): boolean
  isContentTypeDelete (): boolean
  isContentTypeCreate (): boolean
  isFieldCreate (): boolean
  isFieldUpdate (): boolean
  isFieldDelete (): boolean
  isFieldRename (): boolean
  isFieldMove (): boolean
  isAboutContentType (): boolean
  isAboutField (): boolean
  isContentTransform (): boolean

  groupsWith (other: Intent): boolean
  endsGroup (): boolean
}

export {
  Intent as default,
  Intent
}
