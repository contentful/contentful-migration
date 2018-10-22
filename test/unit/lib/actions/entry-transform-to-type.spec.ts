'use strict'

import { expect } from 'chai'

import { EntryTransformToTypeAction } from '../../../../src/lib/action/entry-transform-to-type'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

import makeApiEntry from '../../../helpers/make-api-entry'
import TransformEntryToType from '../../../../src/lib/interfaces/entry-transform-to-type'
import APIEntry from '../../../../src/lib/interfaces/api-entry'

describe('Transform Entry to Type Action', function () {
  it('updates field values in transformed entry', async function () {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      to: ['name'],
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => { return { name: 'x' + fields['name'][locale] } }
    }

    const action = new EntryTransformToTypeAction(transformation)
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
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'hawaii'])
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).to.eq(1)
    const targetData = batches[0].requests[0].data as APIEntry

    expect(targetData.fields['name']['en-US']).to.eql('xbob')
    expect(targetData.sys.id).to.eql('bob')
    expect(targetData.sys.contentType.sys.id).to.eql('copycat')
  })

  it('updates references to a transformed entry', async function () {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      to: ['name'],
      updateReferences: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => { return { name: fields['name'][locale] } }
    }

    const action = new EntryTransformToTypeAction(transformation)
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
        contentTypeId: 'person',
        version: 1,
        fields: {
          pet: {
            'en-US': {
              sys: {
                type: 'Link',
                id: '246'
              }
            }
          }
        }
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'hawaii'])
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).to.eq(2)

    const updatedParent = batches[0].requests[1].data as APIEntry
    expect(updatedParent.fields['pet']['en-US'].sys.id).to.eql('bob')
  })

  it('removes source entry when configured', async function () {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      to: ['name'],
      removeOldEntries: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => { return { name: fields['name'][locale] } }
    }

    const action = new EntryTransformToTypeAction(transformation)
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
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'hawaii'])
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).to.eq(2)

    const deleteRequest = batches[0].requests[1]
    expect(deleteRequest.method).to.eql('DELETE')
    expect(deleteRequest.url).to.eql('/entries/246')
  })
})
