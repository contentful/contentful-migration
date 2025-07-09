import Intent from './base-intent'
import { PlanMessage } from '../interfaces/plan-message'
import chalk from 'chalk'
import {
  ContentTypeSetTaxonomyValidationsAction,
  ContentTypeAddTaxonomyValidationAction,
  ContentTypeClearTaxonomyValidationsAction
} from '../action/content-type-taxonomy-validation'

export default class ContentTypeSetTaxonomyValidationsIntent extends Intent {
  isContentTypeTaxonomyValidation() {
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
    return [
      new ContentTypeSetTaxonomyValidationsAction(
        this.getContentTypeId(),
        this.payload.taxonomyValidations
      )
    ]
  }

  toPlanMessage(): PlanMessage {
    const count = this.payload.taxonomyValidations?.length || 0
    const heading = count
      ? `Assign taxonomy validation${count > 1 ? 's' : ''} ${this.payload.taxonomyValidations
          .map((validation) => chalk`{yellow ${validation.sys.id}}`)
          .join(', ')}`
      : 'Clear taxonomy validations'
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

export class ContentTypeAddTaxonomyValidationIntent extends Intent {
  isContentTypeTaxonomyValidation() {
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
    return [
      new ContentTypeAddTaxonomyValidationAction(
        this.getContentTypeId(),
        this.payload.taxonomyValidation.sys.id,
        this.payload.taxonomyValidation.sys.linkType,
        { required: this.payload.taxonomyValidation.required }
      )
    ]
  }

  toPlanMessage(): PlanMessage {
    const linkTypeLabel =
      this.payload.taxonomyValidation.sys.linkType === 'TaxonomyConcept'
        ? 'concept'
        : 'concept scheme'
    const requiredLabel = this.payload.taxonomyValidation.required ? ' (required)' : ''
    const heading = `Add taxonomy ${linkTypeLabel} ${chalk`{yellow ${this.payload.taxonomyValidation.sys.id}}`}${requiredLabel}`

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

export class ContentTypeClearTaxonomyValidationsIntent extends Intent {
  isContentTypeTaxonomyValidation() {
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
    return [new ContentTypeClearTaxonomyValidationsAction(this.getContentTypeId())]
  }

  toPlanMessage(): PlanMessage {
    return {
      heading: chalk`Update Content Type {bold.yellow ${this.getContentTypeId()}}`,
      sections: [
        {
          heading: 'Clear all taxonomy validations',
          details: []
        }
      ],
      details: []
    }
  }
}
