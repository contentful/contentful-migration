import Intent from './base-intent'
import { FieldCreateAction } from '../action/field-create'

export default class FieldCreateIntent extends Intent {
  isFieldCreate () {
    return true
  }

  isContentTypeUpdate () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isContentTypeUpdate() && sameContentType
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
