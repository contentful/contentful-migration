import Intent from './base-intent'
import { ContentTypeUnpublishAction } from '../action/content-type-unpublish'
import { ContentTypeDeleteAction } from '../action/content-type-delete'
import chalk from 'chalk'
import { PlanMessage } from '../interfaces/plan-message'

export default class ContentTypeDeleteIntent extends Intent {
  isContentTypeDelete () {
    return true
  }

  groupsWith (): boolean {
    return false
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
    return [
      new ContentTypeUnpublishAction(this.getContentTypeId()),
      new ContentTypeDeleteAction(this.getContentTypeId())
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Delete Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details: [],
      sections: []
    }
  }
}
