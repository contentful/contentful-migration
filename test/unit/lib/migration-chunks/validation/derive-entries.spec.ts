import { expect } from 'chai'
import { omit } from 'lodash'

const validateChunks = require('./validate-chunks').default

describe.only('Derive entries chunk validation', function () {
  describe('when deriving entries of a non existing Content Type', function () {
    it('returns an error', async function () {
      const step = {
        contentType: 'entry',
        derivedContentType: 'author',
        from: ['authorName', 'authorTwitterHandle'],
        toReferenceField: 'author',
        derivedFields: ['firstName', 'lastName', 'twitterHandle'],
        identityKey: async (fromFields: any) => fromFields.authorTwitterHandle['en-US'],
        shouldPublish: true,
        deriveEntryForLocale: async (inputFields: any, locale: string) => {
          if (locale === 'de-DE') {
            return
          }
          const [firstName, lastName] = inputFields.authorName[locale].split(' ')
          const twitterHandle = inputFields.authorTwitterHandle[locale]

          return {
            firstName,
            lastName,
            twitterHandle
          }
        }
      }

      const contentTypes = []
      const errors = await validateChunks(function up (migration) {
        migration.deriveLinkedEntries(step)
      }, contentTypes)

      expect(errors).to.eql([{
        details: {
          step: {
            meta: {
              contentTypeInstanceId: 'contentType/entry/0'
            },
            payload: {
              contentTypeId: step.contentType,
              derivation: omit(step, 'contentType')
            },
            type: 'contentType/deriveEntries'
          }
        },
        message: 'You cannot derive entries from content type "entry" because it does not exist.',
        type: 'InvalidAction'
      }, {
        details: {
          step: {
            meta: {
              contentTypeInstanceId: 'contentType/entry/0'
            },
            payload: {
              contentTypeId: step.contentType,
              derivation: omit(step, 'contentType')
            },
            type: 'contentType/deriveEntries'
          }
        },
        message: 'You cannot derive entries to content type "author" because it does not exist.',
        type: 'InvalidAction'
      }])
    })
  })

  describe('when transforming entries with invalid "from"', function () {
    it('returns an error', async function () {
      const step = {
        contentType: 'entry',
        derivedContentType: 'author',
        from: ['authorName', 'authorTwitterHandle'],
        toReferenceField: 'author',
        derivedFields: ['firstName', 'lastName', 'twitterHandle'],
        identityKey: async (fromFields: any) => fromFields.authorTwitterHandle['en-US'],
        shouldPublish: true,
        deriveEntryForLocale: async (inputFields: any, locale: string) => {
          if (locale === 'de-DE') {
            return
          }
          const [firstName, lastName] = inputFields.authorName[locale].split(' ')
          const twitterHandle = inputFields.authorTwitterHandle[locale]

          return {
            firstName,
            lastName,
            twitterHandle
          }
        }
      }

      const contentTypes = []
      const errors = await validateChunks(function up (migration) {
        const entry = migration.createContentType('entry')

        entry.createField('name')
          .type('Symbol')

        migration.deriveLinkedEntries(step)
      }, contentTypes)

      expect(errors).to.eql([{
        details: {
          step: {
            meta: {
              contentTypeInstanceId: 'contentType/entry/0'
            },
            payload: {
              contentTypeId: step.contentType,
              derivation: omit(step, 'contentType')
            },
            type: 'contentType/deriveEntries'
          }
        },
        message: 'You cannot derive entries for content type "entry" because "authorName", "authorTwitterHandle" can\'t be found on it.',
        type: 'InvalidEntriesTransformation'
      }])
    })
  })
})
