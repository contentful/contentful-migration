import { APIAction } from './action'
import OfflineAPI from '../offline-api/index'

class TagUpdateAction extends APIAction {
  private tagId: string

  constructor (tagId: string) {
    super()
    this.tagId = tagId
  }

  async applyTo (api: OfflineAPI) {
    await api.updateTag(this.tagId)
  }
}

export { TagUpdateAction }
