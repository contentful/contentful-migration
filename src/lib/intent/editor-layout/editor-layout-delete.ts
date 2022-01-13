import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutDeleteAction } from '../../action/editor-layout/editor-layout-delete'

export default class EditorLayoutDeleteIntent extends Intent {
  isEditorInterfaceIntent() {
    return true
  }
  isEditorLayoutUpdate() {
    return true
  }
  isGroupable() {
    return false
  }
  groupsWith(): boolean {
    return false
  }
  endsGroup(): boolean {
    return true
  }
  shouldSave(): boolean {
    return true
  }
  shouldPublish(): boolean {
    return false
  }
  toActions() {
    return [
      new EditorLayoutDeleteAction(
        this.payload.contentTypeId,
      )
    ]
  }
  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Delete editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [],
      details: []
    }
  }
}
