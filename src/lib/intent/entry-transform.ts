import Intent from './base-intent'
import { EntryTransformAction } from '../action/entry-transform'

export default class EntryTransformIntent extends Intent {
  isContentTransform () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isContentTransform() && sameContentType
  }

  endsGroup (): boolean {
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
