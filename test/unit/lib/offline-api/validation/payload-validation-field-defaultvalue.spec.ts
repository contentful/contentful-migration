'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

describe('payload validation (default value)', function () {

  describe('when setting default value for non existing locales', function () {
    it('returns an error', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('mainCourse')
          .name('mainCourse')
          .type('Symbol')
          .defaultValue({
            'en-US': 'A Symbol',
            'de-DE': 'A Symbol',
            'fr-FR': 'A Symbol'
          })
      }, [], [], [], ['en-US'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value for locale "de-DE" on field "mainCourse". The locale does not exist.'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value for locale "fr-FR" on field "mainCourse". The locale does not exist.'
          }
        ]
      ])
    })
  })
  describe('when default value does not match the field type', function () {
    it('returns an error for Symbol', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aSymbol')
          .name('aSymbol')
          .type('Symbol')
          .defaultValue({
            'en-US': 1234,
            'de-DE': false,
            'fr-FR': 'A string'
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "number" for locale "en-US" on field "aSymbol". The default value must match the field type "Symbol".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "boolean" for locale "de-DE" on field "aSymbol". The default value must match the field type "Symbol".'
          }
        ]
      ])
    })
    it('returns an error for Number', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aNumber')
          .name('aNumber')
          .type('Number')
          .defaultValue({
            'en-US': '1.234',
            'de-DE': 'A string',
            'fr-FR': 555
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" for locale "en-US" on field "aNumber". The default value must match the field type "Number".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" for locale "de-DE" on field "aNumber". The default value must match the field type "Number".'
          }
        ]
      ])
    })
    it('returns an error for Integer', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('anInteger')
          .name('anInteger')
          .type('Integer')
          .defaultValue({
            'en-US': 1.234,
            'de-DE': 'A string',
            'it-IT': '9999',
            'fr-FR': 555
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR', 'it-IT'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "number" for locale "en-US" on field "anInteger". The default value must match the field type "Integer".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" for locale "de-DE" on field "anInteger". The default value must match the field type "Integer".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" for locale "it-IT" on field "anInteger". The default value must match the field type "Integer".'
          }
        ]
      ])
    })

    it('returns an error for Boolean', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aBool')
          .name('aBool')
          .type('Boolean')
          .defaultValue({
            'en-US': 1,
            'de-DE': 'A string',
            'it-IT': true,
            'fr-FR': false
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR', 'it-IT'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "number" for locale "en-US" on field "aBool". The default value must match the field type "Boolean".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" for locale "de-DE" on field "aBool". The default value must match the field type "Boolean".'
          }
        ]
      ])
    })

    it('returns an error for Text', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aText')
          .name('aText')
          .type('Text')
          .defaultValue({
            'en-US': 1234,
            'de-DE': false,
            'fr-FR': 'A string'
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "number" for locale "en-US" on field "aText". The default value must match the field type "Text".'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "boolean" for locale "de-DE" on field "aText". The default value must match the field type "Text".'
          }
        ]
      ])
    })

    it('returns an error for Date', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aDate')
          .name('aDate')
          .type('Date')
          .defaultValue({
            'en-US': 'A string',
            'de-DE': false,
            'fr-FR': 1234,
            'es-ES': '1234',
            'it-IT': '2013-05-02T13:00:00Z'
          })
      }, [], [], [], ['en-US', 'de-DE', 'fr-FR', 'it-IT', 'es-ES'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "string" to "A string" for locale "en-US" on field "aDate". The default value must match the field type "Date" using a valid ISO date.'
          },
          {
            type: 'InvalidPayload',
            message: 'Cannot set default value of type "boolean" to "false" for locale "de-DE" on field "aDate". The default value must match the field type "Date" using a valid ISO date.'
          }
        ]
      ])
    })

    it('returns an error for Array when items are not Symbols', async function () {
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch')
        lunch.createField('aNumberArray')
          .name('aNumberArray')
          .type('Array')
          .items({
            type: 'Link',
            linkType: 'Entry'
          })
          .defaultValue({
            'en-US': [{}, {}]
          })
      }, [], [], [], ['en-US'])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Cannot set "defaultValue" in field "aNumberArray" because it is not supported by field type "Array" with items type "Link".'
          }
        ]
      ])
    })

    describe('when setting default value a field where is not supported', function () {
      it('returns an error', async function () {
        const errors = await validateBatches(function (migration) {
          const lunch = migration.createContentType('lunch').name('lunch')
          lunch.createField('mainCourse')
            .name('mainCourse')
            .type('RichText')
            .defaultValue({
              'en-US': 'A Text'
            })
        }, [], [], [], ['en-US'])

        expect(errors).to.eql([
          [
            {
              type: 'InvalidPayload',
              message: 'Cannot set "defaultValue" in field "mainCourse" because it is not supported by field type "RichText".'
            }
          ]
        ])
      })
    })
  })

  it('allows default value to be set for supported field types', async function () {
    const errors = await validateBatches(function (migration) {
      const lunch = migration.createContentType('lunch').name('lunch')
      lunch.createField('aSymbol')
        .name('aSymbol')
        .type('Symbol')
        .defaultValue({
          'en-US': 'Valid symbol'
        })
      lunch.createField('aNumber')
        .name('aNumber')
        .type('Number')
        .defaultValue({
          'en-US': 1234.213
        })
      lunch.createField('aBoolean')
        .name('aBoolean')
        .type('Boolean')
        .defaultValue({
          'en-US': true
        })
      lunch.createField('anInteger')
        .name('anInteger')
        .type('Integer')
        .defaultValue({
          'en-US': -20
        })
      lunch.createField('aText')
        .name('aText')
        .type('Text')
        .defaultValue({
          'en-US': 'A valid Text'
        })
      lunch.createField('aDate')
        .name('aDate')
        .type('Date')
        .defaultValue({
          'en-US': '2013-05-02T13:00:00Z'
        })
      lunch.createField('anArray')
        .name('anArray')
        .type('Array')
        .items({
          type: 'Symbol'
        })
        .defaultValue({
          'en-US': ['a', 'b', 'c']
        })
    }, [], [], [], ['en-US'])

    expect(errors).to.eql([
      []
    ])
  })

})
