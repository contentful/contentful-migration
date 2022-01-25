import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutChangeFieldGroupIdAction } from '../../action/editor-layout/editor-layout-update-field-group'

export default class EditorLayoutChangeFieldGroupIdIntent extends Intent {
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
    return true
  }
  shouldPublish (): boolean {
    return false
  }
  getFieldGroupId (): string {
    return this.payload.fieldGroupId
  }
  getNewFieldGroupId (): string {
    return this.payload.newFieldGroupId
  }
  toActions () {
    return [
      new EditorLayoutChangeFieldGroupIdAction(
        this.payload.contentTypeId,
        this.getFieldGroupId(),
        this.getNewFieldGroupId()
      )
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Change field group id from {yellow ${this.payload.fieldGroupId}} to {yellow ${this.payload.newFieldGroupId}}`,
        details: []
      }],
      details: []
    }
  }
}
