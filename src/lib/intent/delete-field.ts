import Intent from './base-intent'

export default class DeleteFieldIntent extends Intent {
  isFieldDelete () {
    return true
  }

  groupsWith (other: Intent): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }
}
