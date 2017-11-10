class ChunksValidationError extends Error {
  public details: string[]

  constructor (details) {
    const message = `Chunks validation failed:\n${JSON.stringify(details)}`
    super(message)
    this.details = details
  }
}

export default ChunksValidationError
