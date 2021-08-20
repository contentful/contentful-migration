import { TagVisibility } from '../interfaces/api-tag'
import Intent from './base-intent'
import { TagCreateAction } from '../action/tag-create'
import chalk from 'chalk'
import { PlanMessage } from '../interfaces/plan-message'

export default class TagCreateIntent extends Intent {
  isTagIntent (): boolean {
    return true
  }

  getTagId (): string {
    return this.payload.tagId
  }

  getTagVisibility (): TagVisibility {
    return this.payload.tagVisibility
  }

  isTagCreate (): boolean {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return false
  }

  shouldPublish (): boolean {
    return false
  }

  requiresAllTags () {
    return true
  }

  toActions () {
    return [
      new TagCreateAction(this.getTagId(), this.getTagVisibility())
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Create Tag {bold.yellow ${this.getTagId()}} with visibility: "${this.getTagVisibility()}"`,
      details: [],
      sections: []
    }
  }
}
