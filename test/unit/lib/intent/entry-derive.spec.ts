import EntryDerive from '../../../../src/lib/interfaces/entry-derive'
import EntryDeriveIntent from '../../../../src/lib/intent/entry-derive'
import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import { expect } from 'chai'
import runIntent from './run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiEntry from '../../../helpers/make-api-entry'

describe('EntryDeriveIntent', function () {
  describe('when deriving entries from a content type', function () {
    it('creates the new entries', async function () {
      const locales = ['de-DE', 'en-US']

      const step: EntryDerive = {
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

      const intent: EntryDeriveIntent = actionCreators.contentType.deriveLinkedEntries(
        'entry',
        0,
        step,
        fakeCallsite()
      )

      const contentTypes = [
        {
          name: 'Entry',
          sys: {
            id: 'entry',
            version: 1
          },
          fields: [
            {
              id: 'text',
              type: 'Text'
            },
            {
              id: 'authorName',
              type: 'Symbol'
            },
            {
              id: 'authorTwitterHandle',
              type: 'Symbol'
            },
            {
              id: 'author',
              type: 'Link',
              linkType: 'Entry'
            }
          ]
        },
        {
          name: 'Author',
          sys: {
            id: 'author',
            version: 1
          },
          fields: [
            {
              id: 'firstName',
              type: 'Text'
            },
            {
              id: 'lastName',
              type: 'Symbol'
            },
            {
              id: 'twitterHandle',
              type: 'Symbol'
            }
          ]
        }
      ]

      const entries = [
        makeApiEntry({
          id: 'doge',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US': 'Such text, wow',
              'de-DE': 'Solch Text, wow'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        }),
        makeApiEntry({
          id: 'clickbait',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US': "You won't believe what happened next",
              'de-DE': 'Du wirst nicht glauben was als nächstes passierte'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        }),
        makeApiEntry({
          id: 'categorical-imperative',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US':
                'Act only according to that maxim whereby you can, at the same time, will that it should become a universal law',
              'de-DE':
                'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'
            },
            authorName: {
              'en-US': 'Immanuel Kant'
            },
            authorTwitterHandle: {
              'en-US': 'ikant'
            }
          }
        })
      ]

      const api = await runIntent(intent, contentTypes, entries, locales)

      const allEntries = await api.getEntriesForContentType('entry')
      const sourceEntries = allEntries.map((entry) => entry.toApiEntry())

      const allAuthors = await api.getEntriesForContentType('author')
      const authorEntries = allAuthors.map((entry) => entry.toApiEntry())
      expect(sourceEntries).to.eql([
        makeApiEntry({
          id: 'doge',
          contentTypeId: 'entry',
          version: 3,
          publishedVersion: 2,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            text: {
              'en-US': 'Such text, wow',
              'de-DE': 'Solch Text, wow'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            },
            author: {
              'en-US': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } },
              'de-DE': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } }
            }
          }
        }),
        makeApiEntry({
          id: 'clickbait',
          contentTypeId: 'entry',
          version: 3,
          publishedVersion: 2,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            text: {
              'en-US': "You won't believe what happened next",
              'de-DE': 'Du wirst nicht glauben was als nächstes passierte'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            },
            author: {
              'en-US': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } },
              'de-DE': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } }
            }
          }
        }),
        makeApiEntry({
          id: 'categorical-imperative',
          contentTypeId: 'entry',
          version: 3,
          publishedVersion: 2,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            text: {
              'en-US':
                'Act only according to that maxim whereby you can, at the same time, will that it should become a universal law',
              'de-DE':
                'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'
            },
            authorName: {
              'en-US': 'Immanuel Kant'
            },
            authorTwitterHandle: {
              'en-US': 'ikant'
            },
            author: {
              'en-US': { sys: { type: 'Link', linkType: 'Entry', id: 'ikant' } },
              'de-DE': { sys: { type: 'Link', linkType: 'Entry', id: 'ikant' } }
            }
          }
        })
      ])

      expect(authorEntries).to.eql([
        makeApiEntry({
          id: 'mcauthorface',
          contentTypeId: 'author',
          version: 2,
          publishedVersion: 1,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            firstName: {
              'en-US': 'Author'
            },
            lastName: {
              'en-US': 'McAuthorface'
            },
            twitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        }),
        makeApiEntry({
          id: 'ikant',
          contentTypeId: 'author',
          version: 2,
          publishedVersion: 1,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            firstName: {
              'en-US': 'Immanuel'
            },
            lastName: {
              'en-US': 'Kant'
            },
            twitterHandle: {
              'en-US': 'ikant'
            }
          }
        })
      ])
    })

    it('does not create a new entry and leaves the source entry untouched if it returns undefined for all locales', async function () {
      const locales = ['de-DE', 'en-US']

      const step: EntryDerive = {
        derivedContentType: 'author',
        from: ['authorName', 'authorTwitterHandle'],
        toReferenceField: 'author',
        derivedFields: ['firstName', 'lastName', 'twitterHandle'],
        identityKey: async (fromFields: any) => fromFields.authorTwitterHandle['en-US'],
        shouldPublish: true,
        deriveEntryForLocale: async (inputFields: any, locale: string) => {
          // for this entry, return undefined for all locales, thus skip it
          if (inputFields.authorName['en-US'] === 'Immanuel Kant') {
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

      const intent: EntryDeriveIntent = actionCreators.contentType.deriveLinkedEntries(
        'entry',
        0,
        step,
        fakeCallsite()
      )

      const contentTypes = [
        {
          name: 'Entry',
          sys: {
            id: 'entry',
            version: 1
          },
          fields: [
            {
              id: 'text',
              type: 'Text'
            },
            {
              id: 'authorName',
              type: 'Symbol'
            },
            {
              id: 'authorTwitterHandle',
              type: 'Symbol'
            },
            {
              id: 'author',
              type: 'Link',
              linkType: 'Entry'
            }
          ]
        },
        {
          name: 'Author',
          sys: {
            id: 'author',
            version: 1
          },
          fields: [
            {
              id: 'firstName',
              type: 'Text'
            },
            {
              id: 'lastName',
              type: 'Symbol'
            },
            {
              id: 'twitterHandle',
              type: 'Symbol'
            }
          ]
        }
      ]

      const entries = [
        makeApiEntry({
          id: 'doge',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US': 'Such text, wow',
              'de-DE': 'Solch Text, wow'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        }),
        makeApiEntry({
          id: 'clickbait',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US': "You won't believe what happened next",
              'de-DE': 'Du wirst nicht glauben was als nächstes passierte'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        }),
        makeApiEntry({
          id: 'categorical-imperative',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US':
                'Act only according to that maxim whereby you can, at the same time, will that it should become a universal law',
              'de-DE':
                'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'
            },
            authorName: {
              'en-US': 'Immanuel Kant'
            },
            authorTwitterHandle: {
              'en-US': 'ikant'
            }
          }
        })
      ]

      const api = await runIntent(intent, contentTypes, entries, locales)

      const allEntries = await api.getEntriesForContentType('entry')
      const sourceEntries = allEntries.map((entry) => entry.toApiEntry())

      const allAuthors = await api.getEntriesForContentType('author')
      const authorEntries = allAuthors.map((entry) => entry.toApiEntry())

      expect(sourceEntries).to.eql([
        makeApiEntry({
          id: 'doge',
          contentTypeId: 'entry',
          version: 3,
          publishedVersion: 2,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            text: {
              'en-US': 'Such text, wow',
              'de-DE': 'Solch Text, wow'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            },
            author: {
              'en-US': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } },
              'de-DE': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } }
            }
          }
        }),
        makeApiEntry({
          id: 'clickbait',
          contentTypeId: 'entry',
          version: 3,
          publishedVersion: 2,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            text: {
              'en-US': "You won't believe what happened next",
              'de-DE': 'Du wirst nicht glauben was als nächstes passierte'
            },
            authorName: {
              'en-US': 'Author McAuthorface'
            },
            authorTwitterHandle: {
              'en-US': 'mcauthorface'
            },
            author: {
              'en-US': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } },
              'de-DE': { sys: { type: 'Link', linkType: 'Entry', id: 'mcauthorface' } }
            }
          }
        }),
        // we expect the Kant entry to have been left untouched at its original version and no link field
        makeApiEntry({
          id: 'categorical-imperative',
          contentTypeId: 'entry',
          version: 1,
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              'de-DE': 'draft'
            }
          },
          fields: {
            text: {
              'en-US':
                'Act only according to that maxim whereby you can, at the same time, will that it should become a universal law',
              'de-DE':
                'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'
            },
            authorName: {
              'en-US': 'Immanuel Kant'
            },
            authorTwitterHandle: {
              'en-US': 'ikant'
            }
          }
        })
      ])

      // we expect that no author entry for Kant was created
      expect(authorEntries).to.eql([
        makeApiEntry({
          id: 'mcauthorface',
          contentTypeId: 'author',
          version: 2,
          publishedVersion: 1,
          fieldStatus: {
            '*': {
              'en-US': 'published',
              'de-DE': 'published'
            }
          },
          fields: {
            firstName: {
              'en-US': 'Author'
            },
            lastName: {
              'en-US': 'McAuthorface'
            },
            twitterHandle: {
              'en-US': 'mcauthorface'
            }
          }
        })
      ])
    })
  })
})
