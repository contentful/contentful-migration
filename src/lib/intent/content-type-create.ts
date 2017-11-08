import Intent from './base-intent'
import { ContentTypeCreateAction } from '../action/content-type-create'

export default class ContentTypeCreateIntent extends Intent {
  isContentTypeCreate () {
    return true
  }

  groupsWith (): boolean {
    return false
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
