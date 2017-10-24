import Intent from './base-intent'
import Action from '../interfaces/action'
import { StateInterface } from '../state/index'
import ContentType from '../immutable-content-type/index'

export default class CreateContentTypeIntent extends Intent implements Action<ContentType> {
  isContentTypeCreate () {
    return true
  }

  async applyTo (state: StateInterface<ContentType>) {
    // at some point, check if already exists
    const ct = new ContentType({ id: this.getContentTypeId() })
    await state.set(this.getContentTypeId(), ct)
  }

  toActions () {
    return [[this]]
  }
}
