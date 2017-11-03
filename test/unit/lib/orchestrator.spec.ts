'use strict'
import orchestrator from '../../../src/lib/orchestrator'

import { expect } from 'chai'

describe('Orchestrator', function () {
  describe('With just one Content Type', function () {
    it('creates a Content Type', async function () {
      const requests = await orchestrator([], [], function up (migration) {
        const person = migration.createContentType('person', {
          name: 'bar',
          description: 'A content type for a person'
        })

        person.createField('age', {
          name: 'Age',
          type: 'Number',
          required: true
        })

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol',
          required: true,
          localized: true
        })
      })

      // Note: we are assuming that the 'request' has
      // been already configured with the space
      // ('foo' on this case)
      expect(requests).to.eql([{
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 0
        },
        data: {
          name: 'bar',
          description: 'A content type for a person',
          fields: [
            {
              id: 'age',
              name: 'Age',
              type: 'Number',
              required: true
            },
            {
              id: 'fullName',
              name: 'Full Name',
              type: 'Symbol',
              required: true,
              localized: true
            }
          ]
        }
      },
      {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 1
        }
      }])
    })
  })
})
