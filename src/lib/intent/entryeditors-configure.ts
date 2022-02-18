import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { EntryEditorsConfigureAction } from '../action/entryeditors-configure'

export default class EntryEditorsConfigureIntent extends Intent {
  isEditorInterfaceIntent() {
    return true
  }
  isGroupable() {
    return false
  }
  groupsWith(): boolean {
    return false
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
      new EntryEditorsConfigureAction(this.payload.contentTypeId, this.payload.entryEditors),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Configure entry editors interface for content type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
