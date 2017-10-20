import { Action } from '../action/base-action'
import { Action as ActionInterface} from '../interfaces/action'

class FieldUpdateAction extends Action implements ActionInterface {
  applyTo(state): any {
    const ct = state.getContentType(this.getContentTypeId())
    const field = ct.getField(this.getFieldId())
    field.update(this.getProps())
    // state.setContentType(id, ct)
  }
}

export { FieldUpdateAction }