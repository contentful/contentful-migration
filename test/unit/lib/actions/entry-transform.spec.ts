'use strict'

import { expect } from 'chai'

import { EntryTransformAction } from '../../../../src/lib/action/entry-transform'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

import makeApiEntry from '../../../helpers/make-api-entry'

describe('Entry Action', function () {
  it('collects errors when applying to the state', async function () {
    const ourError = new Error('BOOM')
    const transformation = () => {
      throw ourError
    }
    const action = new EntryTransformAction('dog', ['name'], transformation)
    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'Putin'
          }
        }
      })),
      new Entry(makeApiEntry({
        id: '123',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'Trump'
          }
        }
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US'])
    api.startRecordingRequests(null)

    try {
      await action.applyTo(api)
      api.stopRecordingRequests()
      const batches = await api.getRequestBatches()
      expect(batches[0].runtimeErrors).to.eql([ourError, ourError])
    } catch (err) {
      expect.fail()
    }
  })

  it('skips a locale when the transform returns undefined', async function () {
    const transformation = (fields, locale) => {
      if (locale === 'hawaii') {
        return
      }
      return {
        name:  fields.name[locale] + '!'
      }
    }

    const action = new EntryTransformAction('dog', ['name'], transformation)
    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'bob',
            'hawaii': 'haukea'
          }
        }
      })),
      new Entry(makeApiEntry({
        id: '123',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'jim',
            'hawaii': 'aloha'
          }
        }
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'hawaii'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()
    expect(batches[0].requests[0].data.fields).to.eql({
      name: {
        'en-US': 'bob!',
        'hawaii': 'haukea'
      }
    })
    expect(batches[0].requests[2].data.fields).to.eql({
      name: {
        'en-US': 'jim!',
        'hawaii': 'aloha'
      }
    })
  })

  it('skips an entry when the transform returns undefined for all its locales', async function () {
    const transformation = () => {
      return
    }

    const action = new EntryTransformAction('dog', ['name'], transformation)
    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'bob',
            'hawaii': 'haukea'
          }
        }
      })),
      new Entry(makeApiEntry({
        id: '123',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          name: {
            'en-US': 'jim',
            'hawaii': 'aloha'
          }
        }
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'hawaii'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()
    expect(batches[0].requests).to.eql([])
  })
})
