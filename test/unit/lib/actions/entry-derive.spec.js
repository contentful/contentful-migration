'use strict'

import { expect } from 'chai'

import { EntryDeriveAction } from '../../../../src/lib/action/entry-derive'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'
import makeApiEntry from '../../../helpers/make-api-entry'
import ContentType from '../../../../src/lib/entities/content-type';

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

describe.only('Entry Derive', function () {
  it.only('derives an entry from n to 1', async function () {
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

    const contentTypes = new Map()
    contentTypes.set('dog', new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [{
          name: 'ownerRef',
          id: 'ownerRef',
          type: 'Symbol'
        }]
      })
    )

    const api = new OfflineApi(contentTypes, entries, ['en-US'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    debugger
    const batches = await api.getRequestBatches()
    expect(batches[0].requests.length).to.eq(4)
    const createTargetEntryFields = batches[0].requests[0].data.fields
    const updateEntryWithLinkFields = batches[0].requests[2].data.fields
    expect(createTargetEntryFields.firstName['en-US']).to.eq('john') //target entry has first and last name
    expect(createTargetEntryFields.lastName['en-US']).to.eq('doe')
    expect(typeof updateEntryWithLinkFields.ownerRef['en-US'].sys).to.eq('object') //request to update entry is n to 1 link
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.type).to.eq('Link')
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.id).to.eq(batches[0].requests[0].data.sys.id) //id of linked object is same as id of target object
  })

  it('derives an entry from n to n', async function () {
    const contentTypes = new Map()
    contentTypes.set('dog', new ContentType(
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

    const api = new OfflineApi(contentTypes, entries, ['en-US'])
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
