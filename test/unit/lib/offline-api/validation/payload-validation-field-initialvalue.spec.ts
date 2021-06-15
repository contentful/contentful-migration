'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'



describe.only('payload validation (initial value)', function () {

  describe('when setting initial value for non existing locales', function(){
    it('returns an error', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse')
        .name('mainCourse')
        .type('Symbol')
        .initialValue({
          'en-US': 'A Symbol',
          'de-DE': 'A Symbol',
          'fr-FR': 'A Symbol',
        })
      }, [], [], [], [ 'en-US'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value for locale "de-DE" on field "mainCourse". The locale does not exist.'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value for locale "fr-FR" on field "mainCourse". The locale does not exist.'
          }
        ],
      ])
    })
  })
  describe('when initial value does not match the field type', function () {
    it('returns an error for Symbol', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aSymbol')
        .name('aSymbol')
        .type('Symbol')
        .initialValue({
          'en-US': 1234,
          'de-DE': false,
          'fr-FR': 'A string',
        })
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "number" for locale "en-US" on field "aSymbol". The initial value must match the field type "Symbol".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set initial value of type "boolean" for locale "de-DE" on field "aSymbol". The initial value must match the field type "Symbol".'
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
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR'])

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
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR', 'it-IT'])

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
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR', 'it-IT'])

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
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR'])

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

    it('returns an error for Date', async function () {
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
      }, [], [], [], [ 'en-US', 'de-DE', 'fr-FR', 'it-IT', 'es-ES'])

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

  describe('when setting initial value a field where is not supported', function(){
    it('returns an error', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse')
        .name('mainCourse')
        .type('RichText')
        .initialValue({
          'en-US': 'A Text',
        })
      }, [], [], [], [ 'en-US'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set "initialValue" in field "mainCourse" because it is not supported by field type "RichText".'
          }
        ],
      ])
    })
  })
})
