import { describe, it, expect } from 'vitest'
import FieldRenameIntent from '../../../../src/lib/intent/field-rename'
import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import runIntent from './run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiEntry from '../../../helpers/make-api-entry'

import { EditorInterfaces } from '../../../../src/lib/entities/content-type'

describe('FieldRenameIntent', () => {
  describe('when renaming a field of a content type', () => {
    it('renames the field on all entries', async () => {
      const intent: FieldRenameIntent = actionCreators.field.rename(
        'dog',
        0,
        'bits',
        0,
        fakeCallsite(),
        'bites'
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
              id: 'bits',
              type: 'Symbol'
            },
            {
              id: 'goodboys',
              type: 'Number'
            }
          ]
        }
      ]

      const editorInterfacesByContentType: Map<String, EditorInterfaces> = new Map()
      const ei = new EditorInterfaces({
        sys: {
          version: 1
        },
        controls: [{ widgetId: 'dropdown', fieldId: 'bits' }]
      })
      editorInterfacesByContentType.set('dog', ei)
      const entries = [
        makeApiEntry({
          id: 'bello',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            bits: {
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
            bits: {
              'en-US': 'just a few',
              'de-DE': 'nur n paar'
            },
            goodboys: { 'en-US': 9001 }
          }
        })
      ]

      const api = await runIntent(intent, contentTypes, entries, [], editorInterfacesByContentType)

      const allEntries = await api.getEntriesForContentType('dog')
      const rawEntries = allEntries.map((entry) => entry.toApiEntry())

      expect(rawEntries).toEqual([
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
      ])
    })
  })

  describe('rename Fields with editor interfaces', () => {
    it('keeps the editor interface when renaming a field', async () => {
      const editorInterfacesByContentType: Map<String, EditorInterfaces> = new Map()
      const ei = new EditorInterfaces({
        sys: {
          version: 1
        },
        controls: [
          {
            widgetId: 'dropdown',
            fieldId: 'bits',
            widgetNamespace: 'extension',
            settings: { setting: 'value' }
          }
        ]
      })
      editorInterfacesByContentType.set('dog', ei)
      const entries = [
        makeApiEntry({
          id: 'bello',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            bits: {
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
            bits: {
              'en-US': 'just a few',
              'de-DE': 'nur n paar'
            },
            goodboys: { 'en-US': 9001 }
          }
        })
      ]
      const intent: FieldRenameIntent = actionCreators.field.rename(
        'dog',
        0,
        'bits',
        0,
        fakeCallsite(),
        'bites'
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
              id: 'bits',
              type: 'Symbol'
            },
            {
              id: 'goodboys',
              type: 'Number'
            }
          ]
        }
      ]

      const api = await runIntent(intent, contentTypes, entries, [], editorInterfacesByContentType)
      const requestBatches = await api.getRequestBatches()
      expect(requestBatches[0].requests.length).toBe(3)
      expect(requestBatches[0].requests[2].data).toMatchObject({
        controls: [
          {
            fieldId: 'bites',
            widgetId: 'dropdown',
            settings: { setting: 'value' },
            widgetNamespace: 'extension'
          }
        ]
      })
    })
  })
})
