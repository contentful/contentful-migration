const Bluebird = require('bluebird')
const co = Bluebird.coroutine

/**
 * Helper functions for taxonomy-related test operations
 */

const createConceptScheme = (request) =>
  co(function* (conceptSchemeId, prefLabel, definition) {
    return yield request({
      method: 'PUT',
      url: `taxonomy/concept-schemes/${conceptSchemeId}`,
      data: {
        prefLabel: {
          'en-US': prefLabel
        },
        definition: {
          'en-US': definition
        }
      },
      baseType: 'org'
    })
  })

const createConcept = (request) =>
  co(function* (conceptId, prefLabel, definition) {
    return yield request({
      method: 'PUT',
      url: `taxonomy/concepts/${conceptId}`,
      data: {
        prefLabel: {
          'en-US': prefLabel
        },
        definition: {
          'en-US': definition
        }
      },
      baseType: 'org'
    })
  })

const deleteConceptScheme = (request) =>
  co(function* (conceptSchemeId, version) {
    yield request({
      method: 'DELETE',
      url: `taxonomy/concept-schemes/${conceptSchemeId}`,
      headers: {
        'X-Contentful-Version': version
      },
      baseType: 'org'
    })
  })

const deleteConcept = (request) =>
  co(function* (conceptId, version) {
    yield request({
      method: 'DELETE',
      url: `taxonomy/concepts/${conceptId}`,
      headers: {
        'X-Contentful-Version': version
      },
      baseType: 'org'
    })
  })

module.exports = {
  createConceptScheme,
  createConcept,
  deleteConceptScheme,
  deleteConcept
}
