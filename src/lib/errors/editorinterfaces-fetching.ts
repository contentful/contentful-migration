class EditorInterfacesFetchingError extends Error {
  constructor () {
    const message = `Unable to fetch editor interfaces listed in intents.`
    super(message)
  }
}

export default EditorInterfacesFetchingError
