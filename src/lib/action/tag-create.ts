import { TagVisibility } from '../interfaces/api-tag'
import { APIAction, EntityType } from './action'
import OfflineAPI from '../offline-api/index'

class TagCreateAction extends APIAction {
  private tagId: string
  private tagVisibility: TagVisibility

  constructor (tagId: string, tagVisibility: TagVisibility = 'private') {
    super()
    this.tagId = tagId
    this.tagVisibility = tagVisibility
  }

  getEntityId (): string {
    return this.tagId
  }

  getEntityType (): EntityType {
    return EntityType.Tag
  }

  async applyTo (api: OfflineAPI) {
    await api.createTag(this.tagId, this.tagVisibility)
  }
}

export { TagCreateAction }
