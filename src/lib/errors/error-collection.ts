import ValidationError from '../interfaces/errors'

export default class ErrorCollection extends Error {
  public errors: ValidationError[]

  constructor (errors: ValidationError[], opts: object = {}) {
    const message = `Validation failed:\n`
    super(message)
    this.errors = errors
    Object.assign(this, opts)
  }
}
