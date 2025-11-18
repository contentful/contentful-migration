import { describe, it, expect, vi } from 'vitest'
import { migration as migrationSteps } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import Fetcher from '../../../src/lib/fetcher'
import makeApiContentType from '../../helpers/make-api-content-type'
import { ContentType } from '../../../src/lib/entities/content-type'

const noOp = () => undefined

describe('Entries fetcher', () => {
  it('adds entries info to content types', async () => {
    const intents = await migrationSteps(
      function up(migration) {
        migration.deleteContentType('foo')
        migration.deleteContentType('bar')
      },
      noOp,
      {}
    )

    const request = vi.fn()
    request.mockResolvedValueOnce({ items: ['item', 'item'] }).mockResolvedValueOnce({ items: [] })

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
    expect(fooCT.hasEntries).toEqual(true)
    const barCT = contentTypesWithEntryInfo.find((ct) => ct.id === 'bar')
    expect(barCT.hasEntries).toBeUndefined()
  })
})
