import { EntityAction, EntityType } from './action'
import {
  ContentType,
  TaxonomyConceptValidationLink,
  TaxonomyConceptSchemeValidationLink
} from '../entities/content-type'

export class ContentTypeSetTaxonomyValidationsAction extends EntityAction {
  private contentTypeId: string
  private taxonomyValidations: Array<
    TaxonomyConceptValidationLink | TaxonomyConceptSchemeValidationLink
  >

  constructor(
    contentTypeId: string,
    taxonomyValidations?: Array<TaxonomyConceptValidationLink | TaxonomyConceptSchemeValidationLink>
  ) {
    super()
    this.contentTypeId = contentTypeId
    this.taxonomyValidations = taxonomyValidations
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType): Promise<void> {
    ct.setTaxonomyValidations(this.taxonomyValidations)
  }
}

export class ContentTypeAddTaxonomyValidationAction extends EntityAction {
  private contentTypeId: string
  private taxonomyId: string
  private linkType: 'TaxonomyConcept' | 'TaxonomyConceptScheme'
  private options: { required?: boolean }

  constructor(
    contentTypeId: string,
    taxonomyId: string,
    linkType: 'TaxonomyConcept' | 'TaxonomyConceptScheme',
    options: { required?: boolean } = {}
  ) {
    super()
    this.contentTypeId = contentTypeId
    this.taxonomyId = taxonomyId
    this.linkType = linkType
    this.options = options
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType): Promise<void> {
    ct.addTaxonomyValidation(this.taxonomyId, this.linkType, this.options)
  }
}

export class ContentTypeClearTaxonomyValidationsAction extends EntityAction {
  private contentTypeId: string

  constructor(contentTypeId: string) {
    super()
    this.contentTypeId = contentTypeId
  }

  getEntityId(): string {
    return this.contentTypeId
  }

  getEntityType(): EntityType {
    return EntityType.ContentType
  }

  async applyTo(ct: ContentType): Promise<void> {
    ct.clearTaxonomyValidations()
  }
}
