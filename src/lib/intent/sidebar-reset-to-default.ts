import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { SaveEditorInterfaceAction } from '../action/editorinterface-save'
import { SidebarResetToDefaultAction } from '../action/sidebar-reset-to-default'

export default class SidebarResetToDefaultIntent extends Intent {
  isEditorInterfaceIntent () {
    return true
  }
  isGroupable () {
    return false
  }
  groupsWith (other: Intent): boolean {
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
      new SidebarResetToDefaultAction(
        this.payload.contentTypeId
      ),
      new SaveEditorInterfaceAction(this.payload.contentTypeId)
    ]
  }
  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Reset sidebar for content type {bold.yellow ${this.getContentTypeId()}} to default`,
      details: [],
      sections: []
    }
  }
}
