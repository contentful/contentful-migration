import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'

export default class FieldUpdateIntent extends Intent {
  isFieldUpdate () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      other.isContentTypeUpdate() ||
      other.isContentTypeCreate() ||
      other.isFieldCreate() ||
      other.isFieldUpdate()
    ) && sameContentType
  }

  endsGroup (): boolean {
    return false
  }

  toActions () {
    return [
      new FieldUpdateAction(
        this.getContentTypeId(),
        this.payload.fieldId,
        this.payload.props
      )
    ]
  }
}
