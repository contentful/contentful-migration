import Intent from './base-intent'

export default class RenameFieldIntent extends Intent {
  isFieldRename () {
    return true
  }
}

