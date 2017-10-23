import Intent from './base-intent'

export default class TransformContentIntent extends Intent {
  isContentTransform () {
    return true
  }

  groupsWith (other: Intent): boolean {
    if (other.isContentTransform()) {
      if (other.getContentTypeId() === this.getContentTypeId()) {
        return true
      }
    }
    return false
  }
}
