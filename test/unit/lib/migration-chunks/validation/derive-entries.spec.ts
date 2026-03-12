import { describe, it } from 'vitest'
import { expect } from 'chai'
import lodash from 'lodash'
const { omit } = lodash
import validateChunks from './validate-chunks'

describe('Derive entries chunk validation', function () {
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
      const errors = await validateChunks(function up(migration) {
        migration.deriveLinkedEntries(step)
      }, contentTypes)

      expect(errors).to.deep.equal([
        {
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
          message: 'You cannot derive entries for content type "entry" because it does not exist.',
          type: 'InvalidAction'
        },
        {
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
          message: 'You cannot derive entries for content type "author" because it does not exist.',
          type: 'InvalidAction'
        }
      ])
    })
  })

  describe('when transforming entries with invalid "from"', () => {
    it('returns an error', async () => {
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

      const contentTypes = [{ sys: { id: 'entry' }, fields: [{ id: 'name', type: 'Symbol' }] }]
      const errors = await validateChunks(function up(migration) {
        const entry = migration.createContentType('author')

        entry.createField('firstName').type('Symbol')

        migration.deriveLinkedEntries(step)
      }, contentTypes)

      expect(errors).to.deep.equal([
        {
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
          message:
            'You cannot derive entries from content type "entry" because source fields "authorName", "authorTwitterHandle" can\'t be found on it.',
          type: 'InvalidEntriesDerivation'
        },
        {
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
          message:
            'You cannot derive entries from content type "entry" because reference field "author" can\'t be found on it.',
          type: 'InvalidEntriesDerivation'
        },
        {
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
          message:
            'You cannot derive entries to content type "author" because destination fields "lastName", "twitterHandle" can\'t be found on it.',
          type: 'InvalidEntriesDerivation'
        }
      ])
    })
  })
})

// add test for different source and target CTs
