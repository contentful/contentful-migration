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

  toActions () {
    return [
      new TagCreateAction(this.getTagId())
    ]
  }

  toPlanMessage (): PlanMessage {
    return {
      heading: chalk`Create Tag {bold.yellow ${this.getTagId()}}`,
      details: [],
      sections: []
    }
  }
}
