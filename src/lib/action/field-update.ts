import { Action } from '../action/base-action'
import { Action as ActionInterface } from '../interfaces/action'
import ContentType from '../interfaces/content-type'

class FieldUpdateAction extends Action implements ActionInterface<ContentType> {
  applyTo (state): any {
    const ct = state.getContentType(this.getContentTypeId())
    const field = ct.getField(this.getFieldId())
    field.update(this.getProps())
    // state.setContentType(id, ct)
  }
}

export { FieldUpdateAction }
