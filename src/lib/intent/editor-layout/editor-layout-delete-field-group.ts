import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutDeleteFieldGroupAction } from '../../action/editor-layout/editor-layout-delete-field-group'

export default class EditorLayoutDeleteFieldGroupIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isEditorLayoutUpdate () {
    return true
  }
  isFieldGroupDelete () {
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
  toActions () {
    return [
      new EditorLayoutDeleteFieldGroupAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId
      )
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Delete field group {yellow ${this.getFieldGroupId()}}`,
        details: []
      }],
      details: []
    }
  }
}
