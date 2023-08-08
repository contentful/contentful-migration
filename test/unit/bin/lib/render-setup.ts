import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import EntryDerive from '../../../../src/lib/interfaces/entry-derive'
import EntryDeriveIntent from '../../../../src/lib/intent/entry-derive'
import runIntent from '../../lib/intent/run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiEntry from '../../../helpers/make-api-entry'

export default async function renderSetup() {
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
  const locales = ['de-DE', 'en-US']
  const entries = [
    makeApiEntry({
      id: 'doge',
      contentTypeId: 'entry',
      version: 1,
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
  return api.getRequestBatches()
}
