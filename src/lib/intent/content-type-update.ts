import Intent from './base-intent'
import { ContentTypeUpdateAction } from '../action/content-type-update'

export default class ContentTypeUpdateIntent extends Intent {
  isContentTypeUpdate () {
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
      new ContentTypeUpdateAction(
        this.getContentTypeId(),
        this.payload.props
      )
    ]
  }
}
