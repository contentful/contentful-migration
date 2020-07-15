import Intent from './base-intent'
import { TagUpdateAction } from '../action/tag-update'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { entries } from 'lodash'

export default class TagUpdateIntent extends Intent {
  isTagIntent (): boolean {
    return true
  }

  getTagId (): string {
    return this.payload.tagId
  }

  isTagUpdate (): boolean {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameTag = other.getTagId() === this.getTagId()
    return (
      other.isTagUpdate() || other.isTagCreate()
   ) && sameTag
  }

  endsGroup (): boolean {
    return false
  }

  shouldPublish (): boolean {
    return false
  }

  toActions () {
    return [
      new TagUpdateAction(
        this.getTagId(),
        this.payload.props
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update Tag {bold.yellow ${this.getTagId()}}`,
      details,
      sections: []
    }
  }
}
