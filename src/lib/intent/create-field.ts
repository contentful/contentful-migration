import Intent from './base-intent'
import Action from '../interfaces/action'


/*
applyTo (state) {
  const ct = state.getContentType(id)
  const field = new Field(this.fieldId)
  ct.addField(field)
  state.setContentType(id, ct)
}
*/
export default class CreateFieldIntent extends Intent {
  isFieldCreate() {
    return true
  }
}

