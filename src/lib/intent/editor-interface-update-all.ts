import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { EditorInterfaceUpdateAllAction } from '../action/editorinterface-update-all'

export default class EditorInterfaceUpdateAllIntent extends Intent {
  isEditorInterfaceUpdateAll() {
    return true
  }
  isEditorInterfaceIntent() {
    return true
  }
  // I am not sure if this is a groupable intent
  //   isGroupable() {
  //     return true
  //   }
  //   groupsWith(other: Intent): boolean {
  //     return other.isGroupable() && other.isEditorInterfaceIntent() && this.isSameContentType(other)
  //   }
  endsGroup(): boolean {
    return true
  }
  shouldSave(): boolean {
    return false
  }
  shouldPublish(): boolean {
    return false
  }
  toActions() {
    return [
      new EditorInterfaceUpdateAllAction(this.payload.contentTypeId, this.payload.editorInterfaces),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }

  // TODO
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
