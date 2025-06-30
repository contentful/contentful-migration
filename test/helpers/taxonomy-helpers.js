const Bluebird = require('bluebird')
const co = Bluebird.coroutine

/**
 * Helper functions for taxonomy-related test operations
 */

const createConceptScheme = (request, organizationId) =>
  co(function* (conceptSchemeId, prefLabel, definition) {
    return yield request({
      method: 'PUT',
      url: `/organizations/${organizationId}/taxonomy/concept-schemes/${conceptSchemeId}`,
      data: {
        prefLabel: {
          'en-US': prefLabel
        },
        definition: {
          'en-US': definition
        }
      },
      raw: true
    })
  })

const createConcept = (request, organizationId) =>
  co(function* (conceptId, prefLabel, definition) {
    return yield request({
      method: 'PUT',
      url: `/organizations/${organizationId}/taxonomy/concepts/${conceptId}`,
      data: {
        prefLabel: {
          'en-US': prefLabel
        },
        definition: {
          'en-US': definition
        }
      },
      raw: true
    })
  })

const deleteConceptScheme = (request, organizationId) =>
  co(function* (conceptSchemeId, version) {
    yield request({
      method: 'DELETE',
      url: `/organizations/${organizationId}/taxonomy/concept-schemes/${conceptSchemeId}`,
      headers: {
        'X-Contentful-Version': version
      },
      raw: true
    })
  })

const deleteConcept = (request, organizationId) =>
  co(function* (conceptId, version) {
    yield request({
      method: 'DELETE',
      url: `/organizations/${organizationId}/taxonomy/concepts/${conceptId}`,
      headers: {
        'X-Contentful-Version': version
      },
      raw: true
    })
  })

module.exports = {
  createConceptScheme,
  createConcept,
  deleteConceptScheme,
  deleteConcept
}
