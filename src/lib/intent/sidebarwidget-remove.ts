import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { SidebarWidgetRemoveAction } from '../action/sidebarwidget-remove'

export default class SidebarWidgetRemoveIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isGroupable () {
    return true
  }
  groupsWith (other: Intent): boolean {
    return other.isGroupable()
      && other.isEditorInterfaceIntent()
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
      new SidebarWidgetRemoveAction(
        this.payload.contentTypeId,
        this.payload.sidebarWidget.widgetId
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    const { widgetId } = this.payload.sidebarWidget

    return {
      heading: chalk`Remove sidebar widget {yellow ${widgetId}} from Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
