import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { ResetEditorInterfaceAction } from '../action/editorinterface-reset'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceResetIntent extends Intent {
  isEditorInterfaceUpdate () {
    return true
  }
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isEditorInterfaceUpdate() && sameContentType
  }
  endsGroup (): boolean {
    return true
  }
  shouldSave (): boolean {
    return false
  }
  shouldPublish (): boolean {
    return false
  }
  toActions () {
    // TODO: check for optimizing API calls and saving multiple editor interfaces changes on the same content type done as 1 single API call instead of multiple.
    return [
      new ResetEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterface.fieldId
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Reset editor interface for Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
