import Intent from './base-intent'

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
}
