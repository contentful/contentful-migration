import Intent from './base-intent'
import { TagCreateAction } from '../action/tag-create'
import chalk from 'chalk'
import { PlanMessage } from '../interfaces/plan-message'

export default class TagCreateIntent extends Intent {
  isTagCreate () {
    return true
  }

  getTagId () {
    return this.payload.tagId
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
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
