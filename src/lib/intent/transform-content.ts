import Intent from './base-intent'

export default class TransformContentIntent extends Intent {
  isContentTransform() {
    return true
  }
}

