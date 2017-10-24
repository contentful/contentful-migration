import Action from './action'
import RawStep from './raw-step'
import ContentType from '../immutable-content-type/index'

interface Intent {
  toActions? (): Action<ContentType>[]
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
