import { FieldAction } from '../action/field-action'
import { StateInterface } from '../state/index'
import { ContentType, Field } from '../entities/content-type'

class FieldCreateAction extends FieldAction {
  private props: object

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
