import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { EntryEditorConfigureAction } from '../action/entryeditor-configure'

export default class EntryEditorConfigureIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isGroupable () {
    return false
  }
  groupsWith (): boolean {
    return false
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
      new EntryEditorConfigureAction(
        this.payload.contentTypeId,
        this.payload.entryEditor.widgetNamespace,
        this.payload.entryEditor.widgetId,
        this.payload.entryEditor.settings
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Configure entry editor interface for content type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
