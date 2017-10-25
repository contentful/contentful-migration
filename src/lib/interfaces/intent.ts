import { APIAction, EntityAction } from '../action/action'
import RawStep from './raw-step'
import ContentType from '../immutable-content-type/index'

interface Intent {
  toActions? (): (APIAction|EntityAction)[]
  toRaw (): RawStep
  getContentTypeId (): string

  isContentTypeUpdate (): boolean
  isContentTypeDelete (): boolean
  isContentTypeCreate (): boolean
  isFieldCreate (): boolean
  isFieldUpdate (): boolean
  isFieldDelete (): boolean
  isFieldRename (): boolean
  isFieldMove (): boolean
  isContentTransform (): boolean

  groupsWith (other: Intent): boolean
  endsGroup (): boolean
}

export {
  Intent as default,
  Intent
}
