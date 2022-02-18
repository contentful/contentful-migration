class SpaceAccessError extends Error {
  constructor() {
    const message = `The provided space does not exist or you do not have access.`
    super(message)
  }
}

export default SpaceAccessError
