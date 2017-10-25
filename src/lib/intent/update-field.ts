import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'

export default class UpdateFieldIntent extends Intent {
  isFieldUpdate () {
    return true
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
