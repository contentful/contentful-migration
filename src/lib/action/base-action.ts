abstract class Action {
  private payload

  getContentTypeId (): string {
    return this.payload.contentTypeId
  }
  getFieldId (): string {
    return this.payload.fieldId
  }
  getProps (): object {
    return this.payload.props
  }

  constructor (payload: any) {
    this.payload = payload
  }
}

export { Action }
