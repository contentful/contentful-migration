import { expect } from 'chai'
import lodash from 'lodash'
const { omit } = lodash
import makeApiTag from '../../../../helpers/make-api-tag'
import validateChunks from './validate-chunks'

describe('Set tags chunk validation', function () {
  describe('when setting tags on a non existing Content Type', function () {
    it('returns an error', async function () {
      const step = {
        contentType: 'entry',
        from: ['authorName'],
        setTagsForEntry: async (fields, entryTags, apiTags) => {
          return apiTags
        }
      }

      const tags = [makeApiTag('marketing')]
      const contentTypes = []

      const errors = await validateChunks(
        function up(migration) {
          migration.setTagsForEntries(step)
        },
        contentTypes,
        tags
      )

      expect(errors).toEqual([
        {
          details: {
            step: {
              meta: {
                contentTypeInstanceId: 'contentType/entry/0'
              },
              payload: {
                contentTypeId: step.contentType,
                entryTransformationForTags: omit(step, 'contentType')
              },
              type: 'contentType/setTagsForEntries'
            }
          },
          message:
            'You cannot update tags on entries for content type "entry" because it does not exist.',
          type: 'InvalidAction'
        }
      ])
    })
  })
})
