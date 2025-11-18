import { describe, it, expect } from 'vitest'
import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import FieldDeleteIntent from '../../../../src/lib/intent/field-delete'
import runIntent from './run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiEntry from '../../../helpers/make-api-entry'

describe('FieldDeleteIntent', () => {
  describe('when deleting a field of a content type', () => {
    it('removes the field from all entries', async () => {
      const intent: FieldDeleteIntent = actionCreators.field.delete(
        'dog',
        0,
        'bites',
        0,
        fakeCallsite()
      )

      const contentTypes = [
        {
          name: 'Doggy',
          sys: {
            id: 'dog',
            version: 1
          },
          fields: [
            {
              id: 'bites',
              type: 'Symbol'
            },
            {
              id: 'goodboys',
              type: 'Number'
            }
          ]
        }
      ]

      const entries = [
        makeApiEntry({
          id: 'bello',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            bites: {
              'en-US': 'a lot',
              'de-DE': 'ganz schön viele'
            },
            goodboys: { 'en-US': 0 }
          }
        }),
        makeApiEntry({
          id: 'waldo',
          contentTypeId: 'dog',
          version: 2,
          fields: {
            bites: {
              'en-US': 'just a few',
              'de-DE': 'nur n paar'
            },
            goodboys: { 'en-US': 9001 }
          }
        })
      ]

      const api = await runIntent(intent, contentTypes, entries)

      const allEntries = await api.getEntriesForContentType('dog')
      const rawEntries = allEntries.map((entry) => entry.toApiEntry())

      expect(rawEntries).toEqual([
        makeApiEntry({
          id: 'bello',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            goodboys: { 'en-US': 0 }
          }
        }),
        makeApiEntry({
          id: 'waldo',
          contentTypeId: 'dog',
          version: 2,
          fields: {
            goodboys: { 'en-US': 9001 }
          }
        })
      ])
    })
  })
})
