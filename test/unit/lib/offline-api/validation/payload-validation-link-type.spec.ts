import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation (dependencies)', () => {
  describe('when setting a field to Link but not specifying the linkType', () => {
    it('returns an error', async () => {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Link')
      }, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "linkType" is required on the field "mainCourse" because "type" is "Link".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Symbol but specifying the linkType', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Symbol').linkType('Entry')
      }, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "linkType" is forbidden on the field "mainCourse" because "type" is not "Link".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Link but specifying a wrong linkType', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Link').linkType('Hermann')
      }, existingCts)

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "linkType" on the field "mainCourse" must be one of ["Asset", "Entry"].'
          }
        ]
      ])
    })
  })
})
