import { describe, it, expect } from 'vitest'

import { EntryDeriveAction } from '../../../../src/lib/action/entry-derive'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'
import makeApiEntry from '../../../helpers/make-api-entry'
import ContentType from '../../../../src/lib/entities/content-type'

describe('Entry Derive', () => {
  it('derives an entry from n to 1', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()
    expect(batches[0].requests.length).toBe(4)
    const createTargetEntryFields = batches[0].requests[0].data.fields
    const updateEntryWithLinkFields = batches[0].requests[2].data.fields
    expect(createTargetEntryFields.firstName['en-US']).toBe('john') // target entry has first and last name
    expect(createTargetEntryFields.lastName['en-US']).toBe('doe')
    expect(typeof updateEntryWithLinkFields.ownerRef['en-US'].sys).toBe('object') // request to update entry is n to 1 link
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.type).toBe('Link')
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.id).toBe(
      batches[0].requests[0].data.sys.id
    ) // id of linked object is same as id of target object
  })

  it('publishes all changed entries', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)

    expect(batches[0].requests[1].method).toBe('PUT')
    expect(batches[0].requests[1].url).toBe('/entries/john-doe/published')

    expect(batches[0].requests[3].method).toBe('PUT')
    expect(batches[0].requests[3].url).toBe('/entries/246/published')
  })

  it('disable publishing of any entry', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: false,
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(2)

    expect(batches[0].requests[0].data.sys.publishedVersion).toBeUndefined()
    expect(batches[0].requests[0].data.sys.version).toBe(0)
    expect(batches[0].requests[1].data.sys.publishedVersion).toBeUndefined()
    expect(batches[0].requests[1].data.sys.version).toBe(1)
  })

  /**
   * Assert that when the useLocaleBasedPublishing flag is true AND shouldPublish is "preserve",
   * then an entry with 3 locales, en-US (status: Changed), de-DE (status: draft) and
   * es-MX (status: Published), will maintain each of their respective statuses.
   */
  it('preserves each locale published status when using (localeBasedPublishing: true) with (shouldPublish: "preserve")', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      useLocaleBasedPublishing: true,
      shouldPublish: 'preserve',
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '789',
          contentTypeId: 'dog',
          version: 5,
          publishedVersion: 4,
          fields: {
            owner: {
              'en-US': 'john doe',
              'de-DE': 'Felix Rausch',
              'es-MX': 'Juan Perez'
            }
          },
          fieldStatus: {
            '*': {
              'en-US': 'changed',
              'de-DE': 'draft',
              'es-MX': 'published'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US', 'de-DE', 'es-MX'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)

    expect(batches[0].requests[2].data.sys.fieldStatus['*']['en-US']).toBe('changed')
    expect(batches[0].requests[2].data.sys.fieldStatus['*']['de-DE']).toBe('draft')
    expect(batches[0].requests[2].data.sys.fieldStatus['*']['es-MX']).toBe('published')
    expect(batches[0].requests[3].data.add.fields['*']).toEqual(['es-MX'])
  })

  it('preserves publish state of parent entry when is not published', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: 'preserve',
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(2)

    expect(batches[0].requests[0].data.sys.publishedVersion).toBeUndefined()
    expect(batches[0].requests[0].data.sys.version).toBe(0)
    expect(batches[0].requests[1].data.sys.publishedVersion).toBeUndefined()
    expect(batches[0].requests[1].data.sys.version).toBe(1)
  })

  it('preserves publish state of parent entry when is published', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: 'preserve',
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 2,
          publishedVersion: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)

    expect(batches[0].requests[1].method).toBe('PUT')
    expect(batches[0].requests[1].url).toBe('/entries/john-doe/published')

    expect(batches[0].requests[3].method).toBe('PUT')
    expect(batches[0].requests[3].url).toBe('/entries/246/published')
  })

  it('derives an entry from n to n', async () => {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'owners',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields: any, locale: string) => {
        if (locale !== 'en-US') {
          return
        }
        const [firstName, lastName] = inputFields.owner[locale].split(' ')

        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        name: 'dog content type',
        fields: [
          {
            name: 'owners',
            id: 'owners',
            type: 'Array',
            items: {
              type: 'Link',
              linkType: 'Entry'
            }
          },
          {
            id: 'owner',
            name: 'owner',
            type: 'Symbol',
            localized: true
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'johnny depp'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)
    const createTargetEntryFields = batches[0].requests[0].data.fields
    const updateEntryWithLinkFields = batches[0].requests[2].data.fields
    expect(createTargetEntryFields.firstName['en-US']).toBe('johnny') // target entry has first and last name
    expect(createTargetEntryFields.lastName['en-US']).toBe('depp')
    expect(typeof updateEntryWithLinkFields.owners['en-US'][0].sys).toBe('object') // request to update entry is n to n link
    expect(updateEntryWithLinkFields.owners['en-US'][0].sys.type).toBe('Link')
    expect(updateEntryWithLinkFields.owners['en-US'][0].sys.id).toBe(
      batches[0].requests[0].data.sys.id
    ) // id of linked object is same as id of target object
  })

  it('provides entry id', async () => {
    const ids: string[] = []
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields: any) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
      },
      shouldPublish: true,
      deriveEntryForLocale: async (inputFields: any, locale: string, { id }: any) => {
        ids.push(id)
        const [firstName, lastName] = inputFields.owner[locale].split(' ')
        return {
          firstName,
          lastName
        }
      }
    })

    const contentTypes = new Map()
    contentTypes.set(
      'dog',
      new ContentType({
        sys: {
          id: 'dog'
        },
        fields: [
          {
            name: 'ownerRef',
            id: 'ownerRef',
            type: 'Symbol'
          }
        ]
      })
    )

    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            owner: {
              'en-US': 'john doe'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] })
    api.startRecordingRequests(null)
    await action.applyTo(api)
    api.stopRecordingRequests()

    expect(ids).toEqual(['246'])
  })
})
