import Intent from './base-intent'
import { TagUpdateAction } from '../action/tag-update'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { entries } from 'lodash'

export default class TagUpdateIntent extends Intent {
  isTagUpdate () {
    return true
  }

  getTagId () {
    return this.payload.tagId
  }

  // groupsWith (other: Intent): boolean {
  //   const sameTag = other.getTagId() === this.getTagId()
  //   return (
  //     other.isTagUpdate() ||
  //     other.isTagCreate() ||
  //     other.isFieldCreate() ||
  //     other.isFieldUpdate() ||
  //     other.isFieldMove()
  //  ) && sameTag
  // }

  endsGroup (): boolean {
    return false
  }

  toActions () {
    return [
      new TagUpdateAction(
        this.getTagId()
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getTagId()}}`,
      details,
      sections: []
    }
  }
}
