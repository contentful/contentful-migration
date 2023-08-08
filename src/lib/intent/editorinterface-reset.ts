import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { ResetEditorInterfaceAction } from '../action/editorinterface-reset'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceResetIntent extends Intent {
  isEditorInterfaceIntent() {
    return true
  }
  isGroupable() {
    return true
  }
  groupsWith(other: Intent): boolean {
    return other.isGroupable() && other.isEditorInterfaceIntent() && this.isSameContentType(other)
  }
  endsGroup(): boolean {
    return false
  }
  shouldSave(): boolean {
    return false
  }
  shouldPublish(): boolean {
    return false
  }
  toActions() {
    return [
      new ResetEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterfaceReset.fieldId
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Reset field control for Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
