import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { ContentTypeAnnotateAction } from '../action/content-type-annotate'
import { AnnotationLink } from '../interfaces/annotation'

export default class ContentTypeAnnotateIntent extends Intent {
  isContentTypeAnnotate() {
    return true
  }

  groupsWith(other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      (other.isContentTypeUpdate() ||
        other.isContentTypeCreate() ||
        other.isContentTypeAnnotate() ||
        other.isContentTypeTaxonomyValidation() ||
        other.isFieldCreate() ||
        other.isFieldUpdate() ||
        other.isFieldMove()) &&
      sameContentType
    )
  }

  endsGroup(): boolean {
    return false
  }

  shouldSave(): boolean {
    return true
  }

  toActions() {
    const annotationLinks: AnnotationLink[] = this.payload.annotations?.map((id) => ({
      sys: {
        id,
        type: 'Link',
        linkType: 'Annotation'
      }
    }))
    return [new ContentTypeAnnotateAction(this.getContentTypeId(), annotationLinks)]
  }

  toPlanMessage(): PlanMessage {
    const count = this.payload.annotations?.length || 0
    const heading = count
      ? `Assign annotation${count > 1 ? 's' : ''} ${this.payload.annotations
          .map((aId) => chalk`{yellow ${aId}}`)
          .join(', ')}`
      : 'Clear annotations'
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading,
          details: []
        }
      ],
      details: []
    }
  }
}
