import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { FieldAnnotateAction } from '../action/field-annotate'
import { AnnotationLink } from '../interfaces/annotation'

export default class FieldAnnotateIntent extends Intent {
  groupsWith(other: Intent): boolean {
    const sameContentType = other.getContentTypeId() === this.getContentTypeId()
    return (
      (other.isContentTypeUpdate() ||
        other.isContentTypeCreate() ||
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
      },
      ...this.payload.fieldAnnotationPayload
    }))
    return [new FieldAnnotateAction(this.getContentTypeId(), this.getFieldId(), annotationLinks)]
  }

  toPlanMessage(): PlanMessage {
    const count = this.payload.annotations?.length || 0
    const heading = count
      ? `Assign annotation${count > 1 ? 's' : ''} ${this.payload.annotations
          .map((aId) => chalk`{yellow ${aId}}`)
          .join(', ')} to field ${this.getFieldId()}`
      : chalk`Clear annotations on field {yellow ${this.getFieldId()}}`

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
