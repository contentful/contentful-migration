// Note: Taxonomy concepts and concept schemes cannot yet be created via migrations.
// You must first create them via the Contentful web app or CMA API.
// This example shows how to add existing taxonomy concepts/schemes as validations to a content type.

module.exports = function (migration) {
  const contentType = migration.createContentType('taxonomy-example').name('Taxonomy Example')

  // Add taxonomy validations one by one
  contentType
    .addTaxonomyValidation('existing-concept', 'TaxonomyConcept', { required: true })
    .addTaxonomyValidation('existing-concept-scheme', 'TaxonomyConceptScheme')

  // Clear all taxonomy validations
  contentType.clearTaxonomyValidations()

  // Replace all taxonomy validations with a new set
  contentType.setTaxonomyValidations([
    {
      sys: {
        type: 'Link',
        id: 'existing-concept',
        linkType: 'TaxonomyConcept'
      },
      required: true
    },
    {
      sys: {
        type: 'Link',
        id: 'existing-concept-scheme',
        linkType: 'TaxonomyConceptScheme'
      },
      required: false
    }
  ])
}
