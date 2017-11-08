import Intent from './base-intent'
import { FieldMoveAction } from '../action/field-move'

export default class FieldMoveIntent extends Intent {
  isFieldMove () {
    return true
  }
  
  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isContentTypeUpdate() && sameContentType
  }

  endsGroup (): boolean {
    return false
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
