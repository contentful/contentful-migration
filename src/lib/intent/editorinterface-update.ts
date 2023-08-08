import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import { UpdateEditorInterfaceAction } from '../action/editorinterface-update'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'

export default class EditorInterfaceUpdateIntent extends Intent {
  isEditorInterfaceUpdate() {
    return true
  }
  isEditorInterfaceIntent() {
    return true
  }
  isGroupable() {
    return true
  }
  groupsWith(other: Intent): boolean {
    return other.isGroupable() && other.isEditorInterfaceIntent() && this.isSameContentType(other)
  }
  endsGroup(): boolean {
    return false
  }
  shouldSave(): boolean {
    return false
  }
  shouldPublish(): boolean {
    return false
  }
  toActions() {
    return [
      new UpdateEditorInterfaceAction(
        this.payload.contentTypeId,
        this.payload.editorInterface.fieldId,
        this.payload.editorInterface.widgetId,
        this.payload.editorInterface.settings,
        this.payload.editorInterface.widgetNamespace
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage(): PlanMessage {
    const { widgetId, fieldId, settings, widgetNamespace } = this.payload.editorInterface
    let createDetails = [chalk`{italic widgetId}: "${widgetId}"`]

    if (widgetNamespace) {
      createDetails = [...createDetails, chalk`{italic widgetNamespace}: "${widgetNamespace}"`]
    }

    Object.keys(settings).forEach((settingName) =>
      createDetails.push(chalk`{italic ${settingName}}: "${settings[settingName].toString()}"`)
    )

    return {
      heading: chalk`Update field controls for Content Type {bold.yellow ${this.getContentTypeId()}}`,
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
