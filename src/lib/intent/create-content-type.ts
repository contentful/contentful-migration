import Intent from './base-intent'

export default class CreateContentTypeIntent extends Intent {
  isContentTypeCreate() {
    return true
  }
}

