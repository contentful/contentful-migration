import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { SidebarWidgetAddAction } from '../action/sidebarwidget-add'

export default class SidebarWidgetAddIntent extends Intent {
  isSidebarWidgetAdd () {
    return true
  }
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
        other.isSidebarWidgetAdd() ||
        other.isEditorInterfaceCopy() ||
        other.isEditorInterfaceReset() ||
        other.isEditorInterfaceUpdate()) &&
        sameContentType
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
      new SidebarWidgetAddAction(
        this.payload.contentTypeId,
        this.payload.sidebarWidget.widgetId,
        this.payload.sidebarWidget.widgetNamespace,
        this.payload.sidebarWidget.settings
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const { settings, widgetId, widgetNamespace } = this.payload.sidebarWidget

    const settingDetails = Object.keys(this.payload.editorInterface.settings).map(settingName =>
      chalk`{italic ${settingName}}: "${settings[settingName]}"`
    )

    const createDetails = [
      chalk`{italic widgetId}: "${widgetId}"`,
      chalk`{italic widgetNamespace}: "${widgetNamespace}"`,
      ...settingDetails
    ]

    return {
      heading: chalk`Update editor interface for Content Type {bold.yellow ${this.getContentTypeId()}}`,
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
