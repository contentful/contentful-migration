import Intent from './base-intent'
import { TagDeleteAction } from '../action/tag-delete'
import chalk from 'chalk'
import { PlanMessage } from '../interfaces/plan-message'

export default class TagDeleteIntent extends Intent {
  isTagIntent (): boolean {
    return true
  }

  getTagId (): string {
    return this.payload.tagId
  }

  isTagDelete () {
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
    // TODO: Do we need this in general in tag classes?
    return false
  }

  requiresAllTags () {
    return true
  }

  toActions () {
    return [new TagDeleteAction(this.getTagId())]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Delete Tag {bold.yellow ${this.getTagId()}}`,
      details: [],
      sections: []
    }
  }
}
