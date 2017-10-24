import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'

export default class DeleteFieldIntent extends Intent {
  isFieldDelete () {
    return true
  }

  groupsWith (other: Intent): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }

  toActions () {
    return [
      [
        new FieldUpdateAction(
          this.getContentTypeId(),
          this.payload.fieldId,
          { omitted: true }
        )
      ],
      [
        new FieldUpdateAction(
          this.getContentTypeId(),
          this.payload.fieldId,
          { deleted: true }
        )
      ]
    ]
  }
}
