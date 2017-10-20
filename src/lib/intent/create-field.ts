import Intent from './base-intent'
import Action from '../interfaces/action'
import { FieldCreateAction } from '../action/field-create'


export default class CreateFieldIntent extends Intent {
  isFieldCreate() {
    return true
  }

  toActions () {
    return [new FieldCreateAction(this.payload)]
  }
}

