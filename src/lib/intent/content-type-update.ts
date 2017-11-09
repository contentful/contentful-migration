import Intent from './base-intent'
import { ContentTypeUpdateAction } from '../action/content-type-update'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { entries } from 'lodash'

export default class ContentTypeUpdateIntent extends Intent {
  isContentTypeUpdate () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      other.isContentTypeUpdate() ||
      other.isContentTypeCreate() ||
      other.isFieldCreate() ||
      other.isFieldUpdate() ||
      other.isFieldMove()
   ) && sameContentType
  }

  endsGroup (): boolean {
    return false
  }

  toActions () {
    return [
      new ContentTypeUpdateAction(
        this.getContentTypeId(),
        this.payload.props
      )
    ]
  }

  toPlanMessage (): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      details,
      sections: []
    }
  }
}
