import { APIAction } from './action'
import OfflineAPI from '../offline-api/index'

class ContentTypeUnpublishAction extends APIAction {
  private contentTypeId: string

  constructor (contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  async applyTo (api: OfflineAPI) {
    await api.unpublishContentType(this.contentTypeId)
  }
}

export { ContentTypeUnpublishAction }
