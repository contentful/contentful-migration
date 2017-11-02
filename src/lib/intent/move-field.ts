import Intent from './base-intent'
import { FieldMoveAction } from '../action/field-move'

export default class MoveFieldIntent extends Intent {
  isFieldMove () {
    return true
  }

  getPivotId () {
    return this.payload.movement.pivot
  }

  getFieldMovementKey () {
    return [this.getContentTypeId(), this.getFieldId()].join('/')
  }

  getDirection () {
    return this.payload.movement.direction
  }

  toActions () {
    return [new FieldMoveAction(
      this.getContentTypeId(),
      this.getFieldId(),
      this.getDirection(),
      this.getPivotId()
    )]
  }
}
