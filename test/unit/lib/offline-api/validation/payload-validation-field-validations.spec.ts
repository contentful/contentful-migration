'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

describe('payload validation', function () {
  describe('fieldValidations', function () {
    it('errors on duplicate validation', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { unique: true }])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have duplicates in the validations array. Duplicate: "{"unique":true}"`
          }
        ]
      ])
    })

    it('errors on unknown validations key', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { size: { min: 5, max: 10 } }, { foo: true }])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have "foo" as a validation.`
          }
        ]
      ])
    })

    it('errors with correct invalid key on unknown validations key', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { size: { min: 5, max: 10 }, somethingUnknown: 'foo', msg: 'error' }])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have the combination "size", "somethingUnknown" and "msg" as a validation.`
          }
        ]
      ])
    })

    it('errors on wrong validation parameter (object)', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ size: 2 }])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `"size" validation expected to be "object", but got "number"`
          }
        ]
      ])
    })

    it('errors on wrong validation parameter (primitive)', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: 'nope' }])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `"unique" validation expected to be "boolean", but got "string"`
          }
        ]
      ])
    })

    it('handles mixed validation errors', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person
          .createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([
            { unique: 'nope' },
            { size: 2 },
            { foo: true },
            {
              size: { min: 5, max: 10 },
              somethingUnknown: 'foo',
              msg: 'error'
            }
          ])
      }, [])

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `"unique" validation expected to be "boolean", but got "string"`
          },
          {
            type: 'InvalidPayload',
            message: `"size" validation expected to be "object", but got "number"`
          },
          {
            type: 'InvalidPayload',
            message: `A field can't have "foo" as a validation.`
          },
          {
            type: 'InvalidPayload',
            message: `A field can't have the combination "size", "somethingUnknown" and "msg" as a validation.`
          }
        ]
      ])
    })

    it('allows custom error message key', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true, message: 'must be uniq' }, { size: { min: 5, max: 10 }, message: 'must fit' }])
      }, [])

      expect(errors).to.eql([
        []
      ])
    })

    it('allows null values for optional validation properties', async function () {
      const errors = await validateBatches(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person')

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ regexp: { pattern: '^[A-Za-z\s]+$', flags: null } }])
      }, [])

      expect(errors).to.eql([
        []
      ])
    })

    it('can validate all blocks and inlines for RichText', async function () {
      const errors = await validateBatches(function up (migration) {
        const novel = migration.createContentType('novel')
          .name('Novel')
          .description('A Lovely Novel')

        novel.createField('chapter')
          .name('Chapter')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['table'] },
            { nodes: {
              'embedded-entry-block': [{ size: { max: 4 } }],
              'embedded-entry-inline': [{ size: { max: 4 } }],
              'embedded-asset-block': [{ size: { max: 4 } }],
              'entry-hyperlink': [{ size: { max: 4 } }],
              'asset-hyperlink': [{ size: { max: 4 } }],
              'hyperlink': [{ size: { max: 4 } }]
            } }
          ])
      }, [])

      expect(errors).to.eql([
        []
      ])
    })
  })
})
