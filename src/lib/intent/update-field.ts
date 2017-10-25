import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'
import { StateInterface } from '../state/index'
import ContentType from '../immutable-content-type/index'

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
