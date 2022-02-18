import Intent from './base-intent'
import { FieldMoveAction } from '../action/field-move'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'

export default class FieldMoveIntent extends Intent {
  isFieldMove() {
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

  getPivotId() {
    return this.payload.movement.pivot
  }

  getFieldMovementKey() {
    return [this.getContentTypeId(), this.getFieldId()].join('/')
  }

  getDirection() {
    return this.payload.movement.direction
  }

  toActions() {
    return [
      new FieldMoveAction(
        this.getContentTypeId(),
        this.getFieldId(),
        this.getDirection(),
        this.getPivotId()
      )
    ]
  }

  toPlanMessage(): PlanMessage {
    const direction = this.getDirection()
    const pivot = this.getPivotId()
    let humanizedMovement

    if (direction === 'toTheTop') {
      humanizedMovement = `to the first position`
    }

    if (direction === 'toTheBottom') {
      humanizedMovement = `to the last position`
    }

    if (direction === 'afterField') {
      humanizedMovement = chalk`after field {yellow ${pivot}}`
    }

    if (direction === 'beforeField') {
      humanizedMovement = chalk`before field {yellow ${pivot}}`
    }

    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`{bold Move field {yellow ${this.getFieldId()}} ${humanizedMovement}}`,
          details: []
        }
      ],
      details: []
    }
  }
}
