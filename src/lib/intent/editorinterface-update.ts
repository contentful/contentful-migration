import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { UpdateEditorInterfaceAction } from '../action/editorinterface-update'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceUpdateIntent extends Intent {
  isEditorInterfaceUpdate () {
    return true
  }
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isEditorInterfaceUpdate() && sameContentType
  }
  endsGroup (): boolean {
    return true
  }
  shouldSave (): boolean {
    return false
  }
  shouldPublish (): boolean {
    return false
  }
  toActions () {
    // TODO: check for optimizing API calls and saving multiple editor interfaces changes on the same content type done as 1 single API call instead of multiple.
    return [
      new UpdateEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterface.fieldId,
        this.payload.editorInterface.widgetId,
        this.payload.editorInterface.settings
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const { fieldId, settings } = this.payload.editorInterface
    let createDetails = [chalk`{italic widgetId}: "${this.payload.editorInterface.widgetId}"`]

    Object.keys(this.payload.editorInterface.settings).forEach(settingName =>
      createDetails.push(chalk`{italic ${settingName}}: "${settings[settingName]}"`)
    )

    return {
      heading: chalk`Update editor interface for Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: [
        {
          heading: chalk`Update field {yellow ${fieldId}}`,
          details: createDetails
        }
      ]
    }
  }
}
