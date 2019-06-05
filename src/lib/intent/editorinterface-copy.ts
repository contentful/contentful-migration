import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { CopyEditorInterfaceAction } from '../action/editorinterface-copy'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceCopyIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other: Intent): boolean {
    return other.isGroupable()
      && other.isEditorInterfaceIntent()
      && this.isSameContentType(other)
  }
  endsGroup (): boolean {
    return false
  }
  shouldSave (): boolean {
    return false
  }
  shouldPublish (): boolean {
    return false
  }
  toActions () {
    return [
      new CopyEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterfaceCopy.source,
        this.payload.editorInterfaceCopy.destination
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const {source, destination} = this.payload.editorInterfaceCopy
    return {
      heading: chalk`Copy field control for Content Type {bold.yellow ${this.getContentTypeId()}} from field {italic ${source}} to field {italic ${destination}}`,
      details: [],
      sections: []
    }
  }
}
