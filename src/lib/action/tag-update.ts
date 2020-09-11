import { EntityAction, EntityType } from './action'
import Tag from '../entities/tag'

class TagUpdateAction extends EntityAction {
  private props: object
  private tagId: string

  constructor (tagId: string, props: object) {
    super()
    this.props = props
    this.tagId = tagId
  }

  getEntityId (): string {
    return this.tagId
  }

  getEntityType (): EntityType {
    return EntityType.Tag
  }

  async applyTo (tag: Tag) {
    Object.assign(tag, this.props)
  }

}

export { TagUpdateAction }
