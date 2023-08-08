'use strict'

import { expect } from 'chai'

import { EntryTransformToTypeAction } from '../../../../src/lib/action/entry-transform-to-type'
import OfflineApi from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

import makeApiEntry from '../../../helpers/make-api-entry'
import TransformEntryToType from '../../../../src/lib/interfaces/entry-transform-to-type'
import APIEntry from '../../../../src/lib/interfaces/api-entry'

describe('Transform Entry to Type Action', function () {
  it('updates field values in transformed entry', async function () {
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

    expect(batches[0].requests.length).to.eq(1)
    const targetData = batches[0].requests[0].data as APIEntry

    expect(targetData.fields['name']['en-US']).to.eql('xbob')
    expect(targetData.sys.id).to.eql('bob')
    expect(targetData.sys.contentType.sys.id).to.eql('copycat')
  })

  it('updates references to a transformed entry', async function () {
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

    expect(batches[0].requests.length).to.eq(2)

    const updatedParent = batches[0].requests[1].data as APIEntry
    expect(updatedParent.fields['pet']['en-US'].sys.id).to.eql('bob')
  })

  it('removes source entry when configured', async function () {
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

    expect(batches[0].requests.length).to.eq(2)

    const deleteRequest = batches[0].requests[1]
    expect(deleteRequest.method).to.eql('DELETE')
    expect(deleteRequest.url).to.eql('/entries/246')
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

    expect(batches[0].requests.length).to.eq(4)

    expect(batches[0].requests[1].method).to.eql('PUT')
    expect(batches[0].requests[1].url).to.eql('/entries/345/published')

    expect(batches[0].requests[3].method).to.eql('PUT')
    expect(batches[0].requests[3].url).to.eql('/entries/123/published')
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

    expect(batches[0].requests.length).to.eq(3)

    expect(batches[0].requests[1].method).to.eql('PUT')
    expect(batches[0].requests[1].url).to.eql('/entries/345/published')
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

    expect(batches[0].requests.length).to.eq(3)

    expect(batches[0].requests[2].method).to.eql('PUT')
    expect(batches[0].requests[2].url).to.eql('/entries/123/published')
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

    expect(batches[0].requests.length).to.eq(2)
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

    expect(batches[0].requests.length).to.eq(0)
  })

  it('passes only specified fields from source entry', async function () {
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

    expect(passedObject).to.have.property('name')
    expect(passedObject).to.not.have.property('other')
  })

  it('passes all fields from source entry if no source field specified', async function () {
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

    expect(passedObject).to.have.property('name')
    expect(passedObject).to.have.property('other')
  })

  it('provides entry id', async function () {
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
    expect(ids).to.eql(['246'])
  })
})
