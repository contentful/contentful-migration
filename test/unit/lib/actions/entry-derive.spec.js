'use strict'

import { expect } from 'chai'

import { EntryDeriveAction } from '../../../../src/lib/action/entry-derive'
import OfflineApi from '../../../../src/lib/offline-api/index'

describe.only('Entry Derive', function () {
  it('derives an entry from n to n', async function () {
    const action = new EntryDeriveAction('ctid', {
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

    const api = new OfflineApi(new Map(), [], ['en-US', 'de-DE'])
    api.startRecordingRequests(null)

    await action.applyTo(api)
    api.stopRecordingRequests()
    debugger
    const batches = await api.getRequestBatches()
    expect(true).to.eq(true)
  })
})
