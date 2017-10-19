import Intent from './base-intent'

export default class UpdateContentTypeIntent extends Intent {
  isContentTypeUpdate () {
    return true
  }
}

