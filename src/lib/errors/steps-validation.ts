class StepsValidationError extends Error {
  public details: string[]

  constructor(details) {
    const message = `Steps validation failed:\n${JSON.stringify(details)}`
    super(message)
    this.details = details
  }
}

export default StepsValidationError
