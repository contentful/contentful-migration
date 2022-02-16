'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'
import makeApiEntry from '../../../../helpers/make-api-entry'
import { Entry } from '../../../../../src/lib/entities/entry'

describe('payload validation attach tags to entry', function () {
  describe('when trying add a tag that does not exist', function () {
    it('returns an error', async function () {
      const step = {
        contentType: 'entry',
        from: ['name'],
        setTagsForEntry: async (fields, entryTags, apiTags) => {
          return [{ sys: { id: 'nonexisting', type: 'Link', linkType: 'Tag' } }]
        }
      }
      const contentTypes = [
        {
          sys: { id: 'entry' },
          fields: [{ id: 'name', name: 'field name', type: 'Symbol' }],
          name: 'Lunch'
        }
      ]

      const tags = [{ sys: { id: 'marketing' }, name: 'Buenos Aires' }]
      const entries = [
        new Entry(
          makeApiEntry({
            id: 'entryId',
            contentTypeId: 'entry',
            version: 1,
            fields: {
              name: {
                'en-US': 'bob',
                hawaii: 'haukea'
              }
            }
          })
        )
      ]
      const errors = await validateBatches(
        function (migration) {
          migration.setTagsForEntries(step)
        },
        contentTypes,
        tags,
        entries
      )
      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message:
              'You cannot update tags on entry "entryId" because some of the tags do not exist.'
          }
        ]
      ])
    })
  })
})
