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
    const existingValidations = field.items.validations || []
    const newValidations = this.validations || []

    // Handle linkContentType validations specially
    const existingLinkContentType = existingValidations.find((v) => v.linkContentType)
    const newLinkContentType = newValidations.find((v) => v.linkContentType)

    if (existingLinkContentType && newLinkContentType) {
      // Merge linkContentType arrays
      const mergedContentTypes = [
        ...new Set([
          ...(existingLinkContentType.linkContentType || []),
          ...(newLinkContentType.linkContentType || [])
        ])
      ]

      // Remove both old validations
      const filteredExisting = existingValidations.filter((v) => !v.linkContentType)
      const filteredNew = newValidations.filter((v) => !v.linkContentType)

      // Add merged validation
      field.items.validations = [
        ...filteredExisting,
        ...filteredNew,
        { linkContentType: mergedContentTypes }
      ]
    } else {
      // If no linkContentType to merge, just append
      field.items.validations = [...existingValidations, ...newValidations]
    }

    fields.setField(this.getFieldId(), field)
  }
}

export { FieldAddItemsValidationAction }
