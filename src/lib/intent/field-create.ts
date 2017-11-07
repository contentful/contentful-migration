import Intent from './base-intent'
import { FieldCreateAction } from '../action/field-create'

export default class FieldCreateIntent extends Intent {
  isFieldCreate () {
    return true
  }

  toActions () {
    return [
      new FieldCreateAction(this.getContentTypeId(), this.payload.fieldId)
    ]
  }
}
