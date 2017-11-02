import { APIAction } from './action'
import OfflineAPI from '../offline-api/index'

class ContentTypePublishAction extends APIAction {
  private contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: OfflineAPI) {
    await api.publishContentType(this.contentTypeId)
  }
}

export { ContentTypePublishAction }
