import { it, expect } from 'vitest'
import { Entry } from '../../../../src/lib/entities/entry'
import makeApiEntry from '../../../helpers/make-api-entry'

it('does not add metadata to default entry or pass it down to its clone', () => {
  const sampleEntry = new Entry(
    makeApiEntry({
      id: '246',
      contentTypeId: 'dog',
      version: 1,
      fields: {
        name: {
          'en-US': 'bob',
          hawaii: 'haukea'
        }
      }
    })
  )

  const cloneEntry = sampleEntry.clone()

  expect(sampleEntry.tags).toBeUndefined()
  expect(sampleEntry.toApiEntry()).not.toHaveProperty('metadata')

  expect(cloneEntry.tags).toBeUndefined()
  expect(cloneEntry.toApiEntry()).not.toHaveProperty('metadata')
})
