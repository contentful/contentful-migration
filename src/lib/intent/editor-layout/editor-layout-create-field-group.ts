import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutCreateFieldGroupAction } from '../../action/editor-layout/editor-layout-create-field-group'

export default class EditorLayoutCreateFieldGroupIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isEditorLayoutUpdate () {
    return true
  }
  isFieldGroupCreate () {
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
      new EditorLayoutCreateFieldGroupAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId,
        this.payload.parentFieldGroupId
      )
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Create field group {yellow ${this.payload.fieldGroupId}}`,
        details: []
      }],
      details: []
    }
  }
}
