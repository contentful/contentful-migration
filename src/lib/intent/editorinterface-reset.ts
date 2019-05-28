import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { ResetEditorInterfaceAction } from '../action/editorinterface-reset'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceResetIntent extends Intent {
  isEditorInterfaceReset () {
    return true
  }
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
        other.isEditorInterfaceCopy() ||
        other.isEditorInterfaceReset() ||
        other.isEditorInterfaceUpdate() ||
        other.isSidebarWidgetAdd()
    ) && sameContentType
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
      new ResetEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterfaceReset.fieldId
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
