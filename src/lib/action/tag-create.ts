import { APIAction, EntityType } from './action'
import OfflineAPI from '../offline-api/index'

class TagCreateAction extends APIAction {
  private tagId: string

  constructor (tagId: string) {
    super()
    this.tagId = tagId
  }

  getEntityId (): string {
    return this.tagId
  }

  getEntityType (): EntityType {
    return EntityType.Tag
  }

  async applyTo (api: OfflineAPI) {
    await api.createTag(this.tagId)
  }
}

export { TagCreateAction }
