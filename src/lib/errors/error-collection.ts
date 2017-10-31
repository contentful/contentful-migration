import ValidationError from '../interfaces/errors'

export default class ErrorCollection extends Error {
  public errors: ValidationError[]

  constructor (errors: ValidationError[]) {
    const message = `Validation failed:\n${JSON.stringify(errors)}`
    super(message)
    this.errors = errors
  }
}
