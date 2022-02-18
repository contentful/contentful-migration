import { FieldAction } from '../action/field-action'
import ContentType from '../entities/content-type'

class FieldMoveAction extends FieldAction {
  private direction: string
  private pivot: string

  constructor(contentTypeId: string, fieldId: string, direction: string, pivot: string) {
    super(contentTypeId, fieldId)
    this.direction = direction
    this.pivot = pivot
  }

  async applyTo(ct: ContentType) {
    ct.fields.moveField(this.getFieldId(), this.direction, this.pivot)
  }
}

export { FieldMoveAction }
