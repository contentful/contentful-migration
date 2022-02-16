import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { SidebarWidgetRemoveAction } from '../action/sidebarwidget-remove'

export default class SidebarWidgetRemoveIntent extends Intent {
  isSidebarUpdate () {
    return true
  }
  isEditorInterfaceIntent () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other: Intent): boolean {
    return other.isGroupable() && other.isEditorInterfaceIntent() && this.isSameContentType(other)
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
      new SidebarWidgetRemoveAction(
        this.payload.contentTypeId,
        this.payload.sidebarWidget.widgetId,
        this.payload.sidebarWidget.widgetNamespace
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const { widgetId, widgetNamespace } = this.payload.sidebarWidget

    return {
      heading: chalk`Update sidebar for Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: [
        {
          heading: chalk`Remove sidebar widget {yellow ${widgetId}}`,
          details: [chalk`{italic widgetNamespace}: "${widgetNamespace}"`]
        }
      ]
    }
  }
}
