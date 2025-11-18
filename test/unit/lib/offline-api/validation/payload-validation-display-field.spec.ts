import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation (display field)', () => {
  describe('when setting a display field that does not (yet) exist', () => {
    it('returns an error', async () => {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse').name('mainCourse').type('Symbol')

        lunch.deleteField('mainCourse')

        lunch.displayField('dessert')
        migration.createContentType('dinner').name('dinner')
        lunch.createField('dessert').name('dessert').type('Symbol')
      }, [])

      expect(errors).toEqual([
        [],
        [],
        [
          {
            type: 'InvalidAction',
            message:
              'Cannot set "dessert" as displayField on content type "lunch" because it does not exist'
          }
        ],
        [],
        []
      ])
    })
  })

  describe('when setting a display field that does exist', function () {
    it('does not return any errors', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('dessert').name('dessert').type('Symbol')
        lunch.createField('mainCourse').name('mainCourse').type('Symbol')
        lunch.displayField('dessert')
      }, [])

      expect(errors).toEqual([[]])
    })
  })

  describe('when deleting a field that is set as the display field', function () {
    it('returns an error', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse').name('mainCourse').type('Symbol')
        lunch.createField('dessert').name('dessert').type('Symbol')
        lunch.displayField('dessert')

        migration.createContentType('dinner').name('dinner')

        lunch.deleteField('dessert')
      }, [])

      expect(errors).toEqual([
        [],
        [],
        [
          {
            type: 'InvalidAction',
            message:
              'Cannot delete field "dessert" on content type "lunch" because it is set as the display field'
          }
        ]
      ])
    })
  })
})
