import { describe, it, expect } from 'vitest'

import { EntryTransformAction } from '../../../../src/lib/action/entry-transform'
import { EntryTransformToTypeAction } from '../../../../src/lib/action/entry-transform-to-type'
import TransformEntryToType from '../../../../src/lib/interfaces/entry-transform-to-type'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

import makeApiEntry from '../../../helpers/make-api-entry'

describe('Entry Action', () => {
  it('collects errors when applying to the state', async () => {
    const ourError = new Error('BOOM')
    const transformation = () => {
      throw ourError
    }
    const action = new EntryTransformAction('dog', ['name'], transformation)
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

  it('skips a locale when the transform returns undefined', async () => {
    const transformation = (fields, locale) => {
      if (locale === 'hawaii') {
        return
      }
      return {
        name: fields.name[locale] + '!'
      }
    }

    const action = new EntryTransformAction('dog', ['name'], transformation)
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
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'jim',
              hawaii: 'aloha'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()
    expect(batches[0].requests[0].data.fields).toEqual({
      name: {
        'en-US': 'bob!',
        hawaii: 'haukea'
      }
    })
    expect(batches[0].requests[1].data.fields).toEqual({
      name: {
        'en-US': 'jim!',
        hawaii: 'aloha'
      }
    })
  })

  it('skips an entry when the transform returns undefined for all its locales', async () => {
    const transformation = () => {
      return
    }

    const action = new EntryTransformAction('dog', ['name'], transformation)
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
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'jim',
              hawaii: 'aloha'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()
    expect(batches[0].requests).toEqual([])
  })

  async function shouldPublishTest(shouldPublish, version, publishedVersion, expectPublish) {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      shouldPublish,
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }
    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version,
          publishedVersion,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    const requestUrls = batches[0].requests.map((r) => r.url)

    expect(requestUrls).include('/entries/345')

    if (expectPublish) {
      expect(requestUrls).include('/entries/345/published')
    } else {
      expect(requestUrls).not.include('/entries/345/published')
    }
  }

  it('preservers CHANGED state with unpublished remote changes', async () => {
    await shouldPublishTest('preserve', 4, 1, false)
    await shouldPublishTest('preserve', 5, 1, false)
  })

  it('preservers PUBLISH state with no unpublished remote changes', async () => {
    return shouldPublishTest('preserve', 2, 1, true)
    return shouldPublishTest('preserve', 3, 1, true)
  })

  it('provides entry id', async () => {
    const ids = []

    const transformation = (fields, locale, { id }) => {
      ids.push(id)
      return {
        name: fields.name[locale] + '!'
      }
    }

    const action = new EntryTransformAction('dog', ['name'], transformation)
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

    await action.applyTo(api)
    await api.stopRecordingRequests()
    expect(ids).toEqual(['246', '123'])
  })
})
