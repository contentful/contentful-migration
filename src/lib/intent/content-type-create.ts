import Intent from './base-intent'
import { ContentTypeCreateAction } from '../action/content-type-create'
import chalk from 'chalk'
import { PlanMessage } from '../interfaces/plan-message'

export default class ContentTypeCreateIntent extends Intent {
  isContentTypeCreate() {
    return true
  }

  groupsWith(): boolean {
    return false
  }

  endsGroup(): boolean {
    return false
  }

  toActions() {
    return [new ContentTypeCreateAction(this.getContentTypeId())]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Create Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
