import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation (type change)', () => {
  describe('when changing the type of a field', () => {
    it('returns an error', async () => {
      const existingCts = [
        {
          sys: { id: 'lunch' },
          name: 'Lunch',
          fields: [{ id: 'mainCourse', name: 'Main Course', type: 'Symbol' }]
        }
      ]

      const errors = await validateBatches(function (migration) {
        const lunch = migration.editContentType('lunch')

        lunch.editField('mainCourse').type('Date')
      }, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidAction',
            message:
              'Cannot change the type of field "mainCourse" on content type "lunch" from "Symbol" to "Date". Field types cannot be changed.'
          }
        ]
      ])
    })
  })
})
