import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { CopyEditorInterfaceAction } from '../action/editorinterface-copy'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceCopyIntent extends Intent {
  isEditorInterfaceCopy () {
    return true
  }
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isEditorInterfaceCopy() && sameContentType
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
      heading: chalk`Copy editor interface for Content Type {bold.yellow ${this.getContentTypeId()}} from field ${source} to field ${destination}`,
      details: [],
      sections: []
    }
  }
}
