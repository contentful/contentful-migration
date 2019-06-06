import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { EntryEditorResetToDefaultAction } from '../action/entryeditor-reset-to-default'

export default class EntryEditorResetToDefaultIntent extends Intent {
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
      new EntryEditorResetToDefaultAction(this.payload.contentTypeId),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Reset entry editor interface for content type {bold.yellow ${this.getContentTypeId()}} to default`,
      details: [],
      sections: []
    }
  }
}
