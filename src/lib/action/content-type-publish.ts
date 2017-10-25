import { APIAction } from './action'
import FakeAPI from '../fake-api/index'

class ContentTypePublishAction extends APIAction {
  private contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: FakeAPI) {
    await api.publishContentType(this.contentTypeId)
  }
}

export { ContentTypePublishAction }
