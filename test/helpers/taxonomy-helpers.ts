/**
 * Helper functions for taxonomy-related test operations
 */

export const createConceptScheme =
  (request: any) => async (conceptSchemeId: string, prefLabel: string, definition: string) => {
    return await request({
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
  }

export const createConcept =
  (request: any) => async (conceptId: string, prefLabel: string, definition: string) => {
    return await request({
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
  }

export const deleteConceptScheme =
  (request: any) => async (conceptSchemeId: string, version: number) => {
    await request({
      method: 'DELETE',
      url: `taxonomy/concept-schemes/${conceptSchemeId}`,
      headers: {
        'X-Contentful-Version': version
      },
      baseType: 'org'
    })
  }

export const deleteConcept = (request: any) => async (conceptId: string, version: number) => {
  await request({
    method: 'DELETE',
    url: `taxonomy/concepts/${conceptId}`,
    headers: {
      'X-Contentful-Version': version
    },
    baseType: 'org'
  })
}
