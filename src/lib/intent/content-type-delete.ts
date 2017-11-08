import Intent from './base-intent'
import { ContentTypeUnpublishAction } from '../action/content-type-unpublish'
import { ContentTypeDeleteAction } from '../action/content-type-delete'

export default class ContentTypeDeleteIntent extends Intent {
  isContentTypeDelete () {
    return true
  }

  groupsWith (): boolean {
    return false
  }

  endsGroup (): boolean {
    return true
  }

  toActions () {
    return [
      new ContentTypeUnpublishAction(this.getContentTypeId()),
      new ContentTypeDeleteAction(this.getContentTypeId())
    ]
  }
}
