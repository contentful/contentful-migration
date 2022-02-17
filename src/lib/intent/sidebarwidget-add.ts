import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { SidebarWidgetAddAction } from '../action/sidebarwidget-add'

export default class SidebarWidgetAddIntent extends Intent {
  isSidebarUpdate() {
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
      new SidebarWidgetAddAction(
        this.payload.contentTypeId,
        this.payload.sidebarWidget.widgetId,
        this.payload.sidebarWidget.widgetNamespace,
        this.payload.sidebarWidget.insertBeforeWidgetId,
        this.payload.sidebarWidget.settings
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage(): PlanMessage {
    const { settings, widgetId, widgetNamespace } = this.payload.sidebarWidget

    const settingDetails = Object.keys(settings).map(
      (settingName) => chalk`{italic ${settingName}}: "${settings[settingName].toString()}"`
    )

    const createDetails = [chalk`{italic widgetNamespace}: "${widgetNamespace}"`, ...settingDetails]

    return {
      heading: chalk`Update sidebar for Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: [
        {
          heading: chalk`Add sidebar widget {yellow ${widgetId}}`,
          details: createDetails
        }
      ]
    }
  }
}
