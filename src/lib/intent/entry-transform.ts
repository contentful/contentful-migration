import Intent from './base-intent'
import { EntryTransformAction } from '../action/entry-transform'

export default class EntryTransformIntent extends Intent {
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

  toActions () {
    return [
      new EntryTransformAction(
        this.getContentTypeId(),
        this.payload.transformation.from,
        this.payload.transformation.to,
        this.payload.transformation.transform
      )
    ]
  }
}
