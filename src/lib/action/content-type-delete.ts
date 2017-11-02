import { APIAction } from './action'
import FakeAPI from '../fake-api/index'

class ContentTypeDeleteAction extends APIAction {
  private contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: FakeAPI) {
    await api.deleteContentType(this.contentTypeId)
  }
}

export { ContentTypeDeleteAction }
