import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutDeleteFieldGroupAction } from '../../action/editor-layout/editor-layout-delete-field-group'
import {SaveEditorInterfaceAction} from "../../action/editorinterface-save";

export default class EditorLayoutDeleteFieldGroupIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isEditorLayoutUpdate () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other: Intent): boolean {
    return other.isGroupable()
      && other.isEditorLayoutUpdate()
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
      new EditorLayoutDeleteFieldGroupAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Delete field group {yellow ${this.payload.fieldGroupId}} in editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
