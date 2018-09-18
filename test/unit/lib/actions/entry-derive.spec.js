'use strict'

import { expect } from 'chai'

import { EntryDeriveAction } from '../../../../src/lib/action/entry-derive'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'
import makeApiEntry from '../../../helpers/make-api-entry'
import ContentType from '../../../../src/lib/entities/content-type';

describe.only('Entry Derive', function () {
  it('derives an entry from n to 1', async function () {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields, locale) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ');

        return {
          firstName,
          lastName
        }
      }
    })

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      })),
      new Entry(makeApiEntry({
        id: '123',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'johnny depp'
          }
        }
      }))
    ]
    const api = new OfflineApi(new Map(), entries, ['en-US', 'de-DE'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    debugger
    const batches = await api.getRequestBatches()
    //expect we create entry (send firstName and lastName fields)
    //expect publish
      //expect we update dog to link to new entry
    expect(batches).to.eq(true)
  })

  it.only('derives an entry from n to n', async function () {
    const cts = new Map()
    cts.set('dog', new ContentType(
      {
        sys: {
          id: 'dog'
        },
      name: 'dog content type',
      fields: [{
        name: 'owners',
        id: 'owners',
        type: 'Array',
        items: {
          type: 'Link',
          linkType: 'Entry'
        }
      },
      {
        id: 'owner',
        name: 'owner',
        type: 'Symbol',
        localized: true
      },
      {
        name: 'age',
        type: 'Number'
      }
    ]
    }))
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'owners',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields, locale) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ');

        return {
          firstName,
          lastName
        }
      }
    })

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ]
    const api = new OfflineApi(cts, entries, ['en-US'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    debugger
    const batches = await api.getRequestBatches()
    //expect we create entry (send firstName and lastName fields)
    //expect publish
    //expect we update dog to link to new entry
    expect(batches).to.eq(true)
  })
})

//add example migration for n to n
