import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutCreateAction } from '../../action/editor-layout/editor-layout-create'

export default class EditorLayoutCreateIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  requiresContentType () {
    // We need the fields to build the initial editor layout
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
      new EditorLayoutCreateAction(
        this.payload.contentTypeId
      )
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Create editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
