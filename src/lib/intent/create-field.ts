import Intent from './base-intent'
import Action from '../interfaces/action'
import { StateInterface } from '../state/index'
import { ContentType, Field } from '../immutable-content-type/index'

export default class CreateFieldIntent extends Intent {
  isFieldCreate () {
    return true
  }

  async applyTo (state: StateInterface<ContentType>) {
    const ct: ContentType = await state.get(this.getContentTypeId())

    const clone = ct.clone()
    const fields = clone.fields
    const field: Field = { id: this.payload.fieldId }

    fields.setField(this.payload.fieldId, field)

    clone.fields = fields
    await state.set(this.getContentTypeId(), clone)
  }

  toActions () {
    return [[this]]
  }
}
