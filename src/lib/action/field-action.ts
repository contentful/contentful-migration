abstract class FieldAction {
  protected contentTypeId: string
  protected fieldId: string

  constructor (contentTypeId: string, fieldId: string) {
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
  }

  getContentTypeId (): string {
    return this.contentTypeId
  }
  getFieldId (): string {
    return this.fieldId
  }
}

export {
  FieldAction as default,
  FieldAction
}
