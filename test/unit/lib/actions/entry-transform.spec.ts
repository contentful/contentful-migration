'use strict'

import { expect } from 'chai'

import { EntryTransformAction } from '../../../../src/lib/action/entry-transform'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'
import ErrorCollector from '../../../../src/lib/errors/error-collector'

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
    const collector = new ErrorCollector()
    api.startRecordingRequests(null)

    try {
      await action.applyTo(api, collector)

      expect(collector.getAll()).to.eql([ourError, ourError])
    } catch (err) {
      console.log(err)
      expect.fail()
    }
  })
})
