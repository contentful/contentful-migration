import { Action } from '../action/base-action'
import { Action as ActionInterface} from '../interfaces/action'

class FieldCreateAction extends Action implements ActionInterface {
  applyTo(state): any {
    const ct = state.getContentType(this.getContentTypeId())
    // const field = new Field(this.fieldId)
    // ct.addField(field)
    // state.setContentType(id, ct)
  }

}

export { FieldCreateAction }