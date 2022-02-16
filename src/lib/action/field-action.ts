import { EntityAction, EntityType } from './action'

abstract class FieldAction extends EntityAction {
  protected contentTypeId: string
  protected fieldId: string

  constructor (contentTypeId: string, fieldId: string) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  getEntityType (): EntityType {
    return EntityType.ContentType
  }

  getEntityId (): string {
    return this.contentTypeId
  }

  getFieldId (): string {
    return this.fieldId
  }
}

export { FieldAction as default, FieldAction }
