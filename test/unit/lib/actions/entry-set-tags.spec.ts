import { describe, it, expect } from 'vitest'

import { EntrySetTagsAction } from '../../../../src/lib/action/entry-set-tags'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'
import { Tag } from '../../../../src/lib/entities/tag'

import makeApiEntry from '../../../helpers/make-api-entry'
import SetTagsForEntry from '../../../../src/lib/interfaces/entry-set-tags'

describe('Entry Action', () => {
  it('collects errors', async () => {
    const ourError = new Error('BOOM')
    const transformation = () => {
      throw ourError
    }
    const action = new EntrySetTagsAction('dog', ['name'], transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'Putin'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'Trump'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    try {
      await action.applyTo(api)
      await api.stopRecordingRequests()
      const batches = await api.getRequestBatches()
      expect(batches[0].runtimeErrors).toEqual([ourError, ourError])
    } catch (err) {
      expect.fail()
    }
  })

  it('updates tags in transformed entry', async () => {
    const transformation: SetTagsForEntry = {
      contentType: 'dog',
      from: ['name'],
      setTagsForEntry: async (fields, entryTags, apiTags) => {
        return apiTags
      }
    }

    const sampleTag = new Tag({ sys: { id: 'example', version: 1 }, name: 'example name' })
    const tags = new Map<String, Tag>()
    tags.set('example', sampleTag)

    const action = new EntrySetTagsAction(
      transformation.contentType,
      transformation.from,
      transformation.setTagsForEntry
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
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
    const api = new OfflineApi({
      contentTypes: new Map(),
      entries,
      locales: ['en-US', 'hawaii'],
      tags
    })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(1)
    const targetData = batches[0].requests[0].data as APIEntry

    expect(targetData.metadata.tags).toEqual([
      { sys: { id: 'example', linkType: 'Tag', type: 'Link' } }
    ])

    expect(targetData.sys.id).toEqual('246')
    expect(targetData.sys.contentType.sys.id).toEqual('dog')
  })
})
