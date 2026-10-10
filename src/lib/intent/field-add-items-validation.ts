import Intent from './base-intent'
import { FieldAddItemsValidationAction } from '../action/field-add-items-validation'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { RawStep } from '../interfaces/raw-step'

export default class FieldAddItemsValidationIntent extends Intent {
  constructor(rawStep: RawStep) {
    super(rawStep)
  }

  isFieldAddItemsValidation() {
    return true
  }

  groupsWith(other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      (other.isContentTypeUpdate() ||
        other.isContentTypeCreate() ||
        other.isContentTypeAnnotate() ||
        other.isFieldCreate() ||
        other.isFieldUpdate() ||
        other.isFieldMove() ||
        other.isFieldAddItemsValidation()) &&
      sameContentType
    )
  }

  endsGroup(): boolean {
    return false
  }

  toActions() {
    return [
      new FieldAddItemsValidationAction(
        this.getContentTypeId(),
        this.getFieldId(),
        this.payload.props.validations
      )
    ]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`Add items validations to array field {yellow ${this.getFieldId()}}`,
          details: [`Validations: ${JSON.stringify(this.payload.props.validations)}`]
        }
      ],
      details: []
    }
  }
} 