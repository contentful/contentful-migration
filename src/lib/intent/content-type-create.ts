import Intent from './base-intent'
import { ContentTypeCreateAction } from '../action/content-type-create'

export default class ContentTypeCreateIntent extends Intent {
  isContentTypeCreate () {
    return true
  }

  groupsWith (other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return other.isContentTypeUpdate() && sameContentType
  }

  endsGroup (): boolean {
    return false
  }

  toActions () {
    return [
      new ContentTypeCreateAction(this.getContentTypeId())
    ]
  }
}
