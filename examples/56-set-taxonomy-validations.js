module.exports = function (migration) {
  const contentType = migration.createContentType('taxonomy-example').name('Taxonomy Example')

  // Add taxonomy validations one by one
  contentType
    .addTaxonomyValidation('specific-concept', 'TaxonomyConcept', { required: true })
    .addTaxonomyValidation('categories-scheme', 'TaxonomyConceptScheme')

  // Clear all taxonomy validations
  contentType.clearTaxonomyValidations()

  // Replace all taxonomy validations with a new set
  contentType.setTaxonomyValidation([
    {
      sys: {
        type: 'Link',
        id: 'bulk-concept-1',
        linkType: 'TaxonomyConcept'
      },
      required: true
    },
    {
      sys: {
        type: 'Link',
        id: 'bulk-scheme-1',
        linkType: 'TaxonomyConceptScheme'
      },
      required: false
    }
  ])
}
