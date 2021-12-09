import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../../action/editorinterface-save'
import { EditorLayoutUpdateFieldGroupAction } from '../../action/editor-layout/editor-layout-update-field-group'
import { entries } from 'lodash'

export default class EditorLayoutUpdateFieldGroupIntent extends Intent {
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
      new EditorLayoutUpdateFieldGroupAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId,
        this.payload.fieldGroupProps
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Update field group {yellow ${this.payload.fieldGroupId}}`,
        details
      }],
      details: []
    }
  }
}
