import { EntityAction, EntityType } from './action'
import { AnnotationLink, ContentType } from '../entities/content-type'

class FieldAnnotateAction extends EntityAction {
  private contentTypeId: string
  private fieldId: string
  private annotations: AnnotationLink[]

  constructor(contentTypeId: string, fieldId: string, annotations?: AnnotationLink[]) {
    super()
    this.contentTypeId = contentTypeId
    this.fieldId = fieldId
    this.annotations = annotations
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType) {
    if (!this.annotations || !this.annotations.length) {
      ct.clearFieldAnnotations(this.fieldId)
    } else {
      ct.setFieldAnnotations(this.fieldId, this.annotations)
    }
  }
}

export { FieldAnnotateAction }
