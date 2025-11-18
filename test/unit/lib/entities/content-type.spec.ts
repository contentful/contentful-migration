import { describe, it, beforeEach, expect } from 'vitest'
import { Fields, ContentType } from '../../../../src/lib/entities/content-type'

it('moves fields correctly', () => {
  const myFields = [
    { id: 'a' },
    { id: 'b' },
    { id: 'c' },
    { id: 'd' },
    { id: 'e' },
    { id: 'f' },
    { id: 'g' }
  ]

  const fields = new Fields(undefined, myFields)

  fields.moveField('c', 'toTheTop')
  fields.moveField('d', 'toTheBottom')
  fields.moveField('f', 'beforeField', 'e')
  fields.moveField('g', 'afterField', 'e')

  expect(myFields).toEqual([
    { id: 'c' },
    { id: 'a' },
    { id: 'b' },
    { id: 'f' },
    { id: 'e' },
    { id: 'g' },
    { id: 'd' }
  ])
})

describe('ContentType taxonomy validation', () => {
  let contentType: ContentType

  beforeEach(() => {
    const apiContentType = {
      sys: {
        id: 'test-content-type',
        version: 1
      },
      name: 'Test Content Type',
      fields: [
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol'
        }
      ]
    }
    contentType = new ContentType(apiContentType)
  })

  describe('setTaxonomyValidations', () => {
    it('sets taxonomy validation on content type', () => {
      const taxonomyValidations = [
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConcept',
            id: 'concept-1'
          },
          required: true
        },
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConceptScheme',
            id: 'scheme-1'
          },
          required: false
        }
      ]

      contentType.setTaxonomyValidations(taxonomyValidations)

      const result = contentType.getTaxonomyValidation()
      expect(result).toEqual(taxonomyValidations)
    })

    it('overwrites taxonomy validation', () => {
      const taxonomyValidations = [
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConcept',
            id: 'concept-1'
          },
          required: true
        }
      ]

      contentType.setTaxonomyValidations(taxonomyValidations)

      const newTaxonomyValidations = [
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConcept',
            id: 'concept-2'
          },
          required: false
        }
      ]

      contentType.setTaxonomyValidations(newTaxonomyValidations)

      const result = contentType.getTaxonomyValidation()
      expect(result).toEqual(newTaxonomyValidations)
    })

    it('includes taxonomy validation in toAPI output', () => {
      const taxonomyValidations = [
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConcept',
            id: 'concept-1'
          },
          required: true
        }
      ]

      contentType.setTaxonomyValidations(taxonomyValidations)

      const apiOutput = contentType.toAPI()
      expect(apiOutput.metadata.taxonomy).toEqual(taxonomyValidations)
    })
  })

  describe('addTaxonomyValidation', () => {
    it('adds a taxonomy concept validation', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      const result = contentType.getTaxonomyValidation()
      expect(result).toEqual([
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConcept',
            id: 'concept-1'
          },
          required: true
        }
      ])
    })

    it('adds a taxonomy concept scheme validation', () => {
      contentType.addTaxonomyValidation('scheme-1', 'TaxonomyConceptScheme', { required: false })

      const result = contentType.getTaxonomyValidation()
      expect(result).toEqual([
        {
          sys: {
            type: 'Link',
            linkType: 'TaxonomyConceptScheme',
            id: 'scheme-1'
          },
          required: false
        }
      ])
    })

    it('adds multiple taxonomy validations', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })
      contentType.addTaxonomyValidation('scheme-1', 'TaxonomyConceptScheme', { required: false })

      const result = contentType.getTaxonomyValidation()
      expect(result).toHaveLength(2)
      expect(result[0].sys.id).toBe('concept-1')
      expect(result[1].sys.id).toBe('scheme-1')
    })

    it('updates existing taxonomy validation when ID already exists', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: false })

      const result = contentType.getTaxonomyValidation()
      expect(result).toHaveLength(1)
      expect(result[0].required).toBe(false)
    })

    it('works without required option', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept')

      const result = contentType.getTaxonomyValidation()
      expect(result[0]).not.toHaveProperty('required')
    })
  })

  describe('clearTaxonomyValidations', () => {
    it('clears all taxonomy validations', () => {
      // First add some validations
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })
      contentType.addTaxonomyValidation('scheme-1', 'TaxonomyConceptScheme', { required: false })

      // Verify they were added
      expect(contentType.getTaxonomyValidation()).toHaveLength(2)

      // Clear them
      contentType.clearTaxonomyValidations()

      // Verify they were cleared
      expect(contentType.getTaxonomyValidation()).toEqual([])
    })

    it('works when there are no existing taxonomy validations', () => {
      contentType.clearTaxonomyValidations()
      expect(contentType.getTaxonomyValidation()).toEqual([])
    })

    it('includes empty taxonomy array in API payload when cleared', () => {
      // First add some validations
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      // Clear them
      contentType.clearTaxonomyValidations()

      // Verify the API payload includes the empty taxonomy array
      const apiPayload = contentType.toAPI()
      expect(apiPayload).toHaveProperty('metadata')
      expect(apiPayload.metadata).toHaveProperty('taxonomy')
      expect(apiPayload.metadata.taxonomy).toEqual([])
    })

    it('includes empty taxonomy array in API payload when cleared on content type with no existing validations', () => {
      // Clear on content type with no existing validations
      contentType.clearTaxonomyValidations()

      // Verify the API payload still includes the empty taxonomy array
      const apiPayload = contentType.toAPI()
      expect(apiPayload).toHaveProperty('metadata')
      expect(apiPayload.metadata).toHaveProperty('taxonomy')
      expect(apiPayload.metadata.taxonomy).toEqual([])
    })

    it('handles mixed metadata scenarios correctly', () => {
      // Test with both annotations and taxonomy
      contentType.setAnnotations([
        { sys: { id: 'test-annotation', type: 'Link', linkType: 'Annotation' } }
      ])
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      let apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).toBeDefined()
      expect(apiPayload.metadata.taxonomy).toHaveLength(1)

      // Clear taxonomy but keep annotations
      contentType.clearTaxonomyValidations()

      apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).toBeDefined() // annotations preserved
      expect(apiPayload.metadata.taxonomy).toEqual([]) // taxonomy cleared but present

      // Clear annotations too
      contentType.clearAnnotations()

      apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).toBeUndefined() // annotations pruned away
      expect(apiPayload.metadata.taxonomy).toEqual([]) // taxonomy still present as empty array
    })
  })
})
