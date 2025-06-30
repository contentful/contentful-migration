const { expect } = require('chai')

const Fields = require('../../../../src/lib/entities/content-type').Fields
const ContentType = require('../../../../src/lib/entities/content-type').ContentType

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

  expect(myFields).to.eql([
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
  let contentType

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
      expect(result).to.deep.equal(taxonomyValidations)
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
      expect(result).to.deep.equal(newTaxonomyValidations)
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
      expect(apiOutput.metadata.taxonomy).to.deep.equal(taxonomyValidations)
    })
  })

  describe('addTaxonomyValidation', () => {
    it('adds a taxonomy concept validation', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      const result = contentType.getTaxonomyValidation()
      expect(result).to.deep.equal([
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
      expect(result).to.deep.equal([
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
      expect(result).to.have.length(2)
      expect(result[0].sys.id).to.equal('concept-1')
      expect(result[1].sys.id).to.equal('scheme-1')
    })

    it('updates existing taxonomy validation when ID already exists', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: false })

      const result = contentType.getTaxonomyValidation()
      expect(result).to.have.length(1)
      expect(result[0].required).to.equal(false)
    })

    it('works without required option', () => {
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept')

      const result = contentType.getTaxonomyValidation()
      expect(result[0]).to.not.have.property('required')
    })
  })

  describe('clearTaxonomyValidations', () => {
    it('clears all taxonomy validations', () => {
      // First add some validations
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })
      contentType.addTaxonomyValidation('scheme-1', 'TaxonomyConceptScheme', { required: false })

      // Verify they were added
      expect(contentType.getTaxonomyValidation()).to.have.length(2)

      // Clear them
      contentType.clearTaxonomyValidations()

      // Verify they were cleared
      expect(contentType.getTaxonomyValidation()).to.eql([])
    })

    it('works when there are no existing taxonomy validations', () => {
      contentType.clearTaxonomyValidations()
      expect(contentType.getTaxonomyValidation()).to.eql([])
    })

    it('includes empty taxonomy array in API payload when cleared', () => {
      // First add some validations
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      // Clear them
      contentType.clearTaxonomyValidations()

      // Verify the API payload includes the empty taxonomy array
      const apiPayload = contentType.toAPI()
      expect(apiPayload).to.have.property('metadata')
      expect(apiPayload.metadata).to.have.property('taxonomy')
      expect(apiPayload.metadata.taxonomy).to.eql([])
    })

    it('includes empty taxonomy array in API payload when cleared on content type with no existing validations', () => {
      // Clear on content type with no existing validations
      contentType.clearTaxonomyValidations()

      // Verify the API payload still includes the empty taxonomy array
      const apiPayload = contentType.toAPI()
      expect(apiPayload).to.have.property('metadata')
      expect(apiPayload.metadata).to.have.property('taxonomy')
      expect(apiPayload.metadata.taxonomy).to.eql([])
    })

    it('handles mixed metadata scenarios correctly', () => {
      // Test with both annotations and taxonomy
      contentType.setAnnotations([
        { sys: { id: 'test-annotation', type: 'Link', linkType: 'Annotation' } }
      ])
      contentType.addTaxonomyValidation('concept-1', 'TaxonomyConcept', { required: true })

      let apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).to.exist()
      expect(apiPayload.metadata.taxonomy).to.have.length(1)

      // Clear taxonomy but keep annotations
      contentType.clearTaxonomyValidations()

      apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).to.exist() // annotations preserved
      expect(apiPayload.metadata.taxonomy).to.eql([]) // taxonomy cleared but present

      // Clear annotations too
      contentType.clearAnnotations()

      apiPayload = contentType.toAPI()
      expect(apiPayload.metadata.annotations).to.be.undefined() // annotations pruned away
      expect(apiPayload.metadata.taxonomy).to.eql([]) // taxonomy still present as empty array
    })
  })
})
