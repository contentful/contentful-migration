'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

  // locales are invalid
  // type of values is correct > string, number, integer, boolean
  // field type allowes initial values > [ShortText, "Text ..."]

describe('payload validation (initial value)', function () {
  describe.only('when initial value does not match the field type', function () {
    it('returns an error for Symbol', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse')
        .name('mainCourse')
        .type('Symbol')
        .initialValue({
          'en-US': 1234,
          'de-DE': false,
          'fr-FR': 'A string',
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "number" for locale "en-US" on field "mainCourse". The initial value must match the field type "Symbol".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "boolean" for locale "de-DE" on field "mainCourse". The initial value must match the field type "Symbol".'
          }
        ],
      ])
    })
    it('returns an error for Number', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aNumber')
        .name('aNumber')
        .type('Number')
        .initialValue({
          'en-US': '1.234',
          'de-DE': 'A string',
          'fr-FR': 555,
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" for locale "en-US" on field "aNumber". The initial value must match the field type "Number".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" for locale "de-DE" on field "aNumber". The initial value must match the field type "Number".'
          }
        ],
      ])
    })
    it('returns an error for Integer', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('anInteger')
        .name('anInteger')
        .type('Integer')
        .initialValue({
          'en-US': 1.234,
          'de-DE': 'A string',
          'it-IT': '9999',
          'fr-FR': 555,
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "number" for locale "en-US" on field "anInteger". The initial value must match the field type "Integer".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" for locale "de-DE" on field "anInteger". The initial value must match the field type "Integer".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" for locale "it-IT" on field "anInteger". The initial value must match the field type "Integer".'
          }
        ],
      ])
    })

    it('returns an error for Boolean', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aBool')
        .name('aBool')
        .type('Boolean')
        .initialValue({
          'en-US': 1,
          'de-DE': 'A string',
          'it-IT': true,
          'fr-FR': false,
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "number" for locale "en-US" on field "aBool". The initial value must match the field type "Boolean".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" for locale "de-DE" on field "aBool". The initial value must match the field type "Boolean".'
          },
        ],
      ])
    })

    it('returns an error for Text', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aText')
        .name('aText')
        .type('Text')
        .initialValue({
          'en-US': 1234,
          'de-DE': false,
          'fr-FR': 'A string',
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "number" for locale "en-US" on field "aText". The initial value must match the field type "Text".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "boolean" for locale "de-DE" on field "aText". The initial value must match the field type "Text".'
          }
        ],
      ])
    })

    it.only('returns an error for Date', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aDate')
        .name('aDate')
        .type('Date')
        .initialValue({
          'en-US': 'A string',
          'de-DE': false,
          'fr-FR': 1234,
          'es-ES': '1234',
          'it-IT': '2013-05-02T13:00:00Z',
        })
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "string" to "A string" for locale "en-US" on field "aDate". The initial value must match the field type "Date" using a valid ISO date.'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "boolean" to "false" for locale "de-DE" on field "aDate". The initial value must match the field type "Date" using a valid ISO date.'
          }
        ],
      ])
    })
  })
})
