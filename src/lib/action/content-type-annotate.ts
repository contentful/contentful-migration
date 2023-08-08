import { EntityAction, EntityType } from './action'
import { AnnotationLink, ContentType } from '../entities/content-type'

class ContentTypeAnnotateAction extends EntityAction {
  private contentTypeId: string
  private annotations: AnnotationLink[]

  constructor(contentTypeId: string, annotations?: AnnotationLink[]) {
    super()
    this.contentTypeId = contentTypeId
    this.annotations = annotations
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType) {
    if (!this.annotations) {
      ct.clearAnnotations()
    } else {
      ct.setAnnotations(this.annotations)
    }
  }
}

export { ContentTypeAnnotateAction }
