import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'

export default class FieldUpdateIntent extends Intent {
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
