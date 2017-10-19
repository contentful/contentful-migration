import Intent from './base-intent'

export default class DeleteContentTypeIntent extends Intent {
  isContentTypeDelete () {
    return true
  }
}

