import Intent from '../base-intent'
import { PlanMessage } from '../../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../../action/editorinterface-save'
import { entries } from 'lodash'
import { EditorLayoutChangeFieldGroupControlAction } from '../../action/editor-layout/editor-layout-change-field-group-control'

export default class EditorLayoutChangeFieldGroupControlIntent extends Intent {
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
      new EditorLayoutChangeFieldGroupControlAction(
        this.payload.contentTypeId,
        this.payload.fieldGroupId,
        this.payload.groupControl
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update group control for field group {yellow ${this.payload.fieldGroupId}} for content type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [],
      details
    }
  }
}
