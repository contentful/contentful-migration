import { describe, it, expect } from 'vitest'
import validateBatches from './validate-batches'

describe('payload validation', () => {
  describe('when missing required properties', () => {
    it('returns the errors', async () => {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch')

        lunch.createField('menu')
      }, [])

      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "name" is required on a content type.'
          },
          {
            type: 'InvalidPayload',
            message: 'The property "name" is required on the field "menu".'
          },
          {
            type: 'InvalidPayload',
            message: 'The property "type" is required on the field "menu".'
          }
        ]
      ])
    })
  })

  describe('when adding more than 50 fields', () => {
    it('returns the errors', async () => {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch')
        lunch.name('A lunch')

        for (let i = 0; i < 101; i++) {
          lunch.createField(`menu${i}`).type('Symbol').name(`menu${i}`)
        }
      }, [])
      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: 'Content type "lunch" cannot have more than 100 fields.'
          }
        ]
      ])
    })
  })

  describe('when using a valid type', () => {
    it('returns no error', async () => {
      // Link and Array are excluded
      // since they need extra properties
      // and are tested explicitly in another test
      const types = [
        'Symbol',
        'Text',
        'Integer',
        'Number',
        'Date',
        'Boolean',
        'Object',
        'Location',
        'RichText'
      ]

      for (const type of types) {
        const errors = await validateBatches(function (migration) {
          const lunch = migration.createContentType('lunch')
          lunch.name('A lunch')

          lunch.createField(type).type(type).name(type)
        }, [])

        expect(errors).toEqual([[]])
      }
    })
  })

  describe('when using an invalid type', () => {
    it('returns the errors', async () => {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch')
        lunch.name('A lunch')

        lunch.createField('invalid').type('Invalid').name('invalid')
      }, [])

      const valid = `["Symbol", "Text", "Integer", "Number", "Date", "Boolean", "Object", "Link", "Array", "Location", "RichText", "ResourceLink"]`
      expect(errors).toEqual([
        [
          {
            type: 'InvalidPayload',
            message: `The property "type" on the field "invalid" must be one of ${valid}.`
          }
        ]
      ])
    })
  })

  describe('when setting a description', () => {
    it('returns no error', async () => {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch')
        lunch.name('A lunch')
        lunch.description('A description')
      }, [])

      expect(errors).toEqual([[]])
    })

    it('accepts empty string', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch')
        lunch.name('A lunch')
        lunch.description('')
      }, [])

      expect(errors).toEqual([[]])
    })
  })
})
