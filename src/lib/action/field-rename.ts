import { FieldUpdateAction } from '../action/field-update'
import ContentType from '../entities/content-type'

interface FieldRenameProps { newId: string }

class FieldRenameAction extends FieldUpdateAction {
  constructor (contentTypeId: string, fieldId: string, props: FieldRenameProps) {
    super(contentTypeId, fieldId, props)
    this.props = props
  }

  updateOfflineAPIWithNewFieldId (ct: ContentType) {
    const fields = ct.fields
    const field = fields.getField(this.getFieldId())

    fields.deleteField(this.getFieldId())
    field.id = this.props.newId
    delete field.newId

    fields.setField(this.props.newId, field)
  }
}

export { FieldRenameAction }
