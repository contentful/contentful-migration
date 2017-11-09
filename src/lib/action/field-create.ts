import { FieldAction } from '../action/field-action'
import { ContentType, Field } from '../entities/content-type'

class FieldCreateAction extends FieldAction {
  constructor (contentTypeId: string, fieldId: string) {
    super(contentTypeId, fieldId)
  }

  async applyTo (ct: ContentType) {
    const fields = ct.fields
    const field: Field = { id: this.fieldId }

    fields.setField(this.fieldId, field)
  }
}

export { FieldCreateAction }
