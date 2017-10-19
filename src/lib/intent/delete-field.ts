import Intent from './base-intent'

export default class DeleteFieldIntent extends Intent {
  isFieldDelete() {
    return true
  }
}

