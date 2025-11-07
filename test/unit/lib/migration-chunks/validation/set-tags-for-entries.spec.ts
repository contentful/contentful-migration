import { describe, it, expect } from 'vitest'
import { omit } from 'lodash'
import makeApiTag from '../../../../helpers/make-api-tag'
import validateChunks from './validate-chunks'

describe('Set tags chunk validation', () => {
  describe('when setting tags on a non existing Content Type', () => {
    it('returns an error', async () => {
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
