import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { entries } from 'lodash'
import { EditorLayoutChangeFieldGroupControlAction } from '../../action/editor-layout/editor-layout-change-field-group-control'

export default class EditorLayoutChangeFieldGroupControlIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isEditorLayoutUpdate () {
    return true
  }
  isFieldGroupControlChange () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other): boolean {
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
      new EditorLayoutChangeFieldGroupControlAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId,
        this.payload.groupControl
      )
    ]
  }
  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.groupControl).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update editor layout for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [{
        heading: chalk`Update group controls for field group {yellow ${this.getFieldGroupId()}}`,
        details
      }],
      details: []
    }
  }
}
