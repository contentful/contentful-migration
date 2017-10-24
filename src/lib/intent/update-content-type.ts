import Intent from './base-intent'
import Action from '../interfaces/action'
import { StateInterface } from '../state/index'
import ContentType from '../immutable-content-type/index'

export default class UpdateContentTypeIntent extends Intent implements Action<ContentType> {
  isContentTypeUpdate () {
    return true
  }

  async applyTo (state: StateInterface<ContentType>) {
    const ct: ContentType = await state.get(this.getContentTypeId())

    const ctClone = ct.clone()
    Object.assign(ctClone, this.payload.props)

    await state.set(this.getContentTypeId(), ctClone)
  }

  toActions () {
    return [[this]]
  }
}
