export default class ErrorCollector {
  private errors: Error[]

  constructor () {
    this.errors = []
  }

  collect (error: Error) {
    this.errors.push(error)

    return error
  }

  getAll () {
    return this.errors
  }
}
