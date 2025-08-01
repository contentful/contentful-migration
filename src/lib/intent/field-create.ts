import Intent from './base-intent'
import { FieldCreateAction } from '../action/field-create'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import { EditorLayoutCreateFieldAction } from '../action/editor-layout/editor-layout-create-field'

export default class FieldCreateIntent extends Intent {
  isFieldCreate() {
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

  toActions() {
    return [
      new FieldCreateAction(this.getContentTypeId(), this.getFieldId()),
      new EditorLayoutCreateFieldAction(this.getContentTypeId(), this.getFieldId())
    ]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: chalk`Create field {yellow ${this.getFieldId()}}`,
          details: []
        }
      ],
      details: []
    }
  }
}
