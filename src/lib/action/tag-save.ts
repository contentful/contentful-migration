import { APIAction, EntityType } from './action'
import OfflineAPI from '../offline-api/index'

class TagSaveAction extends APIAction {
  private tagId: string

  constructor(tagId: string) {
    super()
    this.tagId = tagId
  }

  getEntityId(): string {
    return this.tagId
  }

  getEntityType(): EntityType {
    return EntityType.Tag
  }

  async applyTo(api: OfflineAPI) {
    await api.saveTag(this.tagId)
  }
}

export { TagSaveAction }
