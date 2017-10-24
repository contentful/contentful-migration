import Intent from './base-intent'
import Action from '../interfaces/action'
import { FieldUpdateAction } from '../action/field-update'
import { StateInterface } from '../state/index'
import ContentType from '../immutable-content-type/index'

export default class UpdateFieldIntent extends Intent implements Action<ContentType>{
  isFieldUpdate () {
    return true
  }

  async applyTo (state: StateInterface<ContentType>) {
    const ct: ContentType = await state.get(this.getContentTypeId())

    const clone = ct.clone()
    const fields = clone.fields
    const field = fields.getField(this.payload.fieldId)

    Object.assign(field, this.payload.props)

    fields.setField(this.payload.fieldId, field)

    clone.fields = fields
    await state.set(this.getContentTypeId(), clone)
  }

  toActions () {
    return [this]
  }
}
