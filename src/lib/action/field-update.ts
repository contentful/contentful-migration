import { FieldAction } from '../action/field-action'
import ContentType from '../entities/content-type'

class FieldUpdateAction extends FieldAction {
  protected props: { newId?: string }

  constructor(contentTypeId: string, fieldId: string, props: object) {
    super(contentTypeId, fieldId)
    this.props = props
  }

  async applyTo(ct: ContentType) {
    const fields = ct.fields
    const field = fields.getField(this.getFieldId())

    Object.assign(field, this.props)

    fields.setField(this.getFieldId(), field)
  }
}

export { FieldUpdateAction }
