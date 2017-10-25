import Intent from './base-intent'
import { ContentTypeUpdateAction } from '../action/content-type-update'

export default class UpdateContentTypeIntent extends Intent {
  isContentTypeUpdate () {
    return true
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
