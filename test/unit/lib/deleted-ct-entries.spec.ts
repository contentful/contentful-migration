'use strict'
import { migration as migrationSteps } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import sinon from 'sinon'
import Fetcher from '../../../src/lib/fetcher'
import makeApiContentType from '../../helpers/make-api-content-type'
import { ContentType } from '../../../src/lib/entities/content-type'
import { expect } from 'chai'

const noOp = () => undefined

describe('Entries fetcher', function () {
  it('adds entries info to content types', async function () {
    const intents = await migrationSteps(
      function up (migration) {
        migration.deleteContentType('foo')
        migration.deleteContentType('bar')
      },
      noOp,
      {}
    )

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

    const fetcher = new Fetcher(request)
    const contentTypesWithEntryInfo = await fetcher.checkContentTypesForDeletedCts(
      intentList,
      contentTypes
    )

    const fooCT = contentTypesWithEntryInfo.find((ct) => ct.id === 'foo')
    expect(fooCT.hasEntries).to.eql(true)
    const barCT = contentTypesWithEntryInfo.find((ct) => ct.id === 'bar')
    expect(barCT.hasEntries).to.eql(undefined)
  })
})
