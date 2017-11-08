import Intent from './base-intent'
import { FieldCreateAction } from '../action/field-create'

export default class FieldCreateIntent extends Intent {
  isFieldCreate () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      other.isContentTypeUpdate() ||
      other.isContentTypeCreate() ||
      other.isFieldCreate() ||
      other.isFieldUpdate() ||
      other.isFieldMove()
    ) && sameContentType
  }

  endsGroup (): boolean {
    return false
  }

  toActions () {
    return [
      new FieldCreateAction(this.getContentTypeId(), this.payload.fieldId)
    ]
  }
}
