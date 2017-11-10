class PayloadValidationError extends Error {
  public details: string[]

  constructor (details) {
    const message = `Payload validation failed:\n${JSON.stringify(details)}`
    super(message)
    this.details = details
  }
}

export default PayloadValidationError
