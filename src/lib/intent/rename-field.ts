import Intent from './base-intent'

export default class RenameFieldIntent extends Intent {
  isFieldRename () {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }
}
