import { describe, it, expect } from 'vitest'

import { EntryTransformToTypeAction } from '../../../../src/lib/action/entry-transform-to-type'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

import makeApiEntry from '../../../helpers/make-api-entry'
import TransformEntryToType from '../../../../src/lib/interfaces/entry-transform-to-type'
import APIEntry from '../../../../src/lib/interfaces/api-entry'

describe('Transform Entry to Type Action', () => {
  it('updates field values in transformed entry', async () => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        return { name: 'x' + fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(1)
    const targetData = batches[0].requests[0].data as APIEntry

    expect(targetData.fields['name']['en-US']).toEqual('xbob')
    expect(targetData.sys.id).toEqual('bob')
    expect(targetData.sys.contentType.sys.id).toEqual('copycat')
  })

  it('updates references to a transformed entry', async () => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(2)

    const updatedParent = batches[0].requests[1].data as APIEntry
    expect(updatedParent.fields['pet']['en-US'].sys.id).toEqual('bob')
  })

  it('removes source entry when configured', async () => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      removeOldEntries: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(2)

    const deleteRequest = batches[0].requests[1]
    expect(deleteRequest.method).toEqual('DELETE')
    expect(deleteRequest.url).toEqual('/entries/246')
  })

  it('publishes all changed entries', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: true,
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)

    expect(batches[0].requests[1].method).toEqual('PUT')
    expect(batches[0].requests[1].url).toEqual('/entries/345/published')

    expect(batches[0].requests[3].method).toEqual('PUT')
    expect(batches[0].requests[3].url).toEqual('/entries/123/published')
  })

  it('preserves locale-based published state of target entry and referenced entries', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: 'preserve',
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      },
      useLocaleBasedPublishing: true
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 2,
          publishedVersion: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          },
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              hawaii: 'published'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 2,
          publishedVersion: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          },
          fieldStatus: {
            '*': {
              'en-US': 'draft',
              hawaii: 'published'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(4)

    expect(batches[0].requests[1].method).toEqual('PUT')
    expect(batches[0].requests[1].url).toEqual('/entries/345/published')
    expect(
      (
        batches[0].requests[1].data as {
          add?: { fields?: { '*': string[] } | undefined } | undefined
        }
      )?.add?.fields?.['*']
    ).toEqual(['hawaii'])

    expect(batches[0].requests[3].method).toEqual('PUT')
    expect(batches[0].requests[3].url).toEqual('/entries/123/published')
    expect(
      (
        batches[0].requests[3].data as {
          add?: { fields?: { '*': string[] } | undefined } | undefined
        }
      )?.add?.fields?.['*']
    ).toEqual(['hawaii'])
  })

  it('preserves publish state of child entry', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: 'preserve',
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 2,
          publishedVersion: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(3)

    expect(batches[0].requests[1].method).toEqual('PUT')
    expect(batches[0].requests[1].url).toEqual('/entries/345/published')
  })

  it('preserves publish state of parent entry', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: 'preserve',
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      // has never been published
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      ),
      // published, but with pending changes
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 2,
          publishedVersion: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(3)

    expect(batches[0].requests[2].method).toEqual('PUT')
    expect(batches[0].requests[2].url).toEqual('/entries/123/published')
  })

  it('disable publishing of any entry', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: false,
      identityKey: async () => '345',
      transformEntryForLocale: async (fields, locale) => {
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '123',
          contentTypeId: 'person',
          version: 2,
          publishedVersion: 1,
          fields: {
            pet: {
              'en-US': {
                sys: {
                  type: 'Link',
                  id: '246'
                }
              }
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(2)
  })

  it('skip entry when undefined', async (): Promise<void> => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      shouldPublish: false,
      identityKey: async () => '345',
      transformEntryForLocale: async () => {
        return undefined
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob',
              hawaii: 'haukea'
            }
          }
        })
      )
    ]

    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US', 'hawaii'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(0)
  })

  it('passes only specified fields from source entry', async () => {
    let passedObject: any = {}

    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      updateReferences: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        passedObject = fields
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob'
            },

            other: {
              'en-US': 'x'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()

    expect(passedObject).toHaveProperty('name')
    expect(passedObject).not.toHaveProperty('other')
  })

  it('passes all fields from source entry if no source field specified', async () => {
    let passedObject: any = {}

    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      updateReferences: true,
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        passedObject = fields
        return { name: fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob'
            },

            other: {
              'en-US': 'x'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()

    expect(passedObject).toHaveProperty('name')
    expect(passedObject).toHaveProperty('other')
  })

  it('provides entry id', async () => {
    const ids = []

    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale, { id }) => {
        ids.push(id)
        return { name: 'x' + fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    expect(ids).toEqual(['246'])
  })

  it('transforms only specified entries when entryIds is provided', async () => {
    const transformation: TransformEntryToType = {
      sourceContentType: 'dog',
      targetContentType: 'copycat',
      from: ['name'],
      entryIds: ['246'],
      identityKey: async (fields) => fields.name['en-US'].toString(),
      transformEntryForLocale: async (fields, locale) => {
        return { name: 'x' + fields['name'][locale] }
      }
    }

    const action = new EntryTransformToTypeAction(transformation)
    const entries = [
      new Entry(
        makeApiEntry({
          id: '246',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'bob'
            }
          }
        })
      ),
      new Entry(
        makeApiEntry({
          id: '247',
          contentTypeId: 'dog',
          version: 1,
          fields: {
            name: {
              'en-US': 'alice'
            }
          }
        })
      )
    ]
    const api = new OfflineApi({ contentTypes: new Map(), entries, locales: ['en-US'] })
    await api.startRecordingRequests(null)

    await action.applyTo(api)
    await api.stopRecordingRequests()
    const batches = await api.getRequestBatches()

    expect(batches[0].requests.length).toBe(1)
    const targetData = batches[0].requests[0].data as APIEntry
    expect(targetData.fields['name']['en-US']).toEqual('xbob')
    expect(targetData.sys.id).toEqual('bob')
  })
})
