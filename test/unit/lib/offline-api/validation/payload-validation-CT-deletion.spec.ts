import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation (content type deletion)', () => {
  it('skips ct delete payloads', async () => {
    const existingCts = [
      {
        sys: { id: 'breakfast' },
        name: 'breakfast',
        fields: []
      }
    ]

    const errors = await validateBatches(function (migration) {
      const lunch = migration.createContentType('lunch').name('lunch')
      lunch.createField('mainCourse').name('mainCourse').type('Symbol')
      migration.deleteContentType('breakfast')
    }, existingCts)

    expect(errors).toEqual([[], []])
  })
})
