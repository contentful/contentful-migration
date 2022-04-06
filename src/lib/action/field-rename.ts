import { EntityAction, EntityType } from './action'
import ContentType from '../entities/content-type'

interface FieldRenameProps {
  newId: string
}

class FieldRenameAction extends EntityAction {
  private props: FieldRenameProps
  private contentTypeId: string
  private fieldId: string

  constructor(contentTypeId: string, fieldId: string, props: FieldRenameProps) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this.props = props
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType) {
    const fields = ct.fields
    const field = fields.getField(this.fieldId)

    const fieldAnnotations = ct.getContentTypeFieldAnnotations(this.fieldId)
    fields.deleteField(this.fieldId)
    field.id = this.props.newId
    delete field.newId

    fields.setField(this.props.newId, field)
    if (fieldAnnotations) {
      ct.setFieldAnnotations(this.props.newId, fieldAnnotations)
    }
  }
}

export { FieldRenameAction, FieldRenameProps }
