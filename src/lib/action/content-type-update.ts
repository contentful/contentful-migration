import { EntityAction, EntityType } from './action'
import ContentType from '../entities/content-type'

class ContentTypeUpdateAction extends EntityAction {
  private props: object
  private contentTypeId: string

  constructor(contentTypeId: string, props: object) {
    super()
    this.props = props
    this.contentTypeId = contentTypeId
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }
  async applyTo(ct: ContentType) {
    Object.assign(ct, this.props)
  }
}

export { ContentTypeUpdateAction }
