import Intent from './base-intent'
import { FieldRenameAction } from '../action/field-rename'

export default class FieldRenameIntent extends Intent {
  isFieldRename () {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }

  getNewId (): string {
    return this.payload.props.newId
  }

  toActions () {
    return [
      new FieldRenameAction(
        this.getContentTypeId(),
        this.getFieldId(),
        { newId: this.getNewId() }
      )
    ]
  }
}
