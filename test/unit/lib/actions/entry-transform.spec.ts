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
      expect(batches[0].contentTransformErrors).to.eql([ourError, ourError])
    } catch (err) {
      expect.fail()
    }
  })
})
