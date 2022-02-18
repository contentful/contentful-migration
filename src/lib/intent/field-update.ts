import Intent from './base-intent'
import { FieldUpdateAction } from '../action/field-update'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { entries } from 'lodash'

export default class FieldUpdateIntent extends Intent {
  isFieldUpdate() {
    return true
  }

  groupsWith(other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      (other.isContentTypeUpdate() ||
        other.isContentTypeCreate() ||
        other.isFieldCreate() ||
        other.isFieldUpdate() ||
        other.isFieldMove()) &&
      sameContentType
    )
  }

  endsGroup(): boolean {
    return false
  }

  toActions() {
    return [
      new FieldUpdateAction(this.getContentTypeId(), this.payload.fieldId, this.payload.props)
    ]
  }

  toPlanMessage(): PlanMessage {
    const details = entries(this.payload.props).map(([key, value]) => {
      return chalk`{italic ${key}}: ${JSON.stringify(value)}`
    })

    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`Update field {yellow ${this.getFieldId()}}`,
          details
        }
      ],
      details: []
    }
  }
}
