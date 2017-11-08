'use strict'
import { migration as migrationSteps } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import * as sinon from 'sinon'
import deletedCtEntries from '../../../src/lib/deleted-ct-entries'
import makeApiContentType from '../../helpers/make-api-content-type'
import { ContentType } from '../../../src/lib/entities/content-type'
import { expect } from 'chai'

describe('Entries fetcher', function () {
  it('adds entries info to content types', async function () {
    const intents = await migrationSteps(function up (migration) {
      migration.deleteContentType('foo')
      migration.deleteContentType('bar')
    })

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=foo'
      })
      .resolves({ items: ['item', 'item'] })

    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=bar'
      })
      .resolves({ items: [] })

    const intentList = new IntentList(intents)

    const contentTypes = [
      new ContentType(makeApiContentType({ id: 'foo', version: 1 })),
      new ContentType(makeApiContentType({ id: 'bar', version: 1 }))
    ]
    const contentTypesWithEntryInfo = await deletedCtEntries(intentList, contentTypes, request)

    const fooCT = contentTypesWithEntryInfo.find((ct) => ct.id === 'foo')
    expect(fooCT.hasEntries).to.eql(true)
    const barCT = contentTypesWithEntryInfo.find((ct) => ct.id === 'bar')
    expect(barCT.hasEntries).to.eql(undefined)
  })
})
