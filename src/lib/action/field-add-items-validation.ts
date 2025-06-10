import { FieldAction } from './field-action'
import ContentType from '../entities/content-type'

class FieldAddItemsValidationAction extends FieldAction {
  protected validations: any[]

  constructor(contentTypeId: string, fieldId: string, validations: any[]) {
    super(contentTypeId, fieldId)
    this.validations = validations
  }

  async applyTo(ct: ContentType) {
    const fields = ct.fields
    const field = fields.getField(this.getFieldId())

    if (!field.items) {
      field.items = { type: 'Symbol' } // Default type for array items
    }

    if (!field.items.validations) {
      field.items.validations = []
    }

    // Merge new validations with existing ones
    field.items.validations = [...field.items.validations, ...this.validations]

    fields.setField(this.getFieldId(), field)
  }
}

export { FieldAddItemsValidationAction } 