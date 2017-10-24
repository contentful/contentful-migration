import { FieldAction } from '../action/field-action'
import { Action } from '../interfaces/action'
import { StateInterface } from '../state/index'
import ContentType from '../immutable-content-type/index'

class FieldUpdateAction extends FieldAction implements Action<ContentType> {
  private props: object

  constructor (contentTypeId: string, fieldId: string, props: object) {
    super(contentTypeId, fieldId)
    this.props = props
  }

  async applyTo (state: StateInterface<ContentType>) {
    const ct: ContentType = await state.get(this.getContentTypeId())

    const clone = ct.clone()
    const fields = clone.fields
    const field = fields.getField(this.getFieldId())

    Object.assign(field, this.props)

    fields.setField(this.getFieldId(), field)

    clone.fields = fields
    await state.set(this.getContentTypeId(), clone)
  }
}

export { FieldUpdateAction }
