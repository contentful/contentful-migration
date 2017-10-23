import Intent from './base-intent'

export default class RenameFieldIntent extends Intent {
  isFieldRename () {
    return true
  }

  groupsWith (other: Intent): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }
}
