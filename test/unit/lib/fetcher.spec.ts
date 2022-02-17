import { expect } from 'chai'
import sinon from 'sinon'

import { migration as buildIntents } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import Fetcher from '../../../src/lib/fetcher'
import { ContentType } from '../../../src/lib/entities/content-type'
import { APIEditorInterfaces } from '../../../src/lib/interfaces/content-type'
import Intent from '../../../src/lib/intent/base-intent'

const noOp = () => undefined

describe('Fetcher', function () {
  it('fetches all required Entries in the plan', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.transformEntries({
          contentType: 'newsArticle',
          from: ['author', 'authorCity'],
          to: ['byline'],
          transformEntryForLocale: function (fromFields, currentLocale) {
            if (currentLocale === 'de-DE') {
              return
            }
            const newByline = `${fromFields.author[currentLocale]} ${fromFields.authorCity[currentLocale]}`
            return { byline: newByline }
          }
        })
      },
      null,
      null
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=newsArticle&skip=0`
      })
      .resolves({
        skip: 0,
        limit: 4,
        total: 6,
        items: ['item1', 'item2', 'item3', 'item4']
      })
    request
      .withArgs({
        method: 'GET',
        url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=newsArticle&skip=4`
      })
      .resolves({
        skip: 4,
        limit: 4,
        total: 6,
        items: ['item5', 'item6']
      })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const entries = await fetcher.getEntriesInIntents(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=newsArticle&skip=0`
    })
    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=newsArticle&skip=4`
    })

    const result = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
    expect(entries).to.eql(result)
  })

  it('fetches all Entries of all CTs in the plan if an intent needs them all', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.transformEntriesToType({
          sourceContentType: 'sourceContentType',
          targetContentType: 'targetContentType',
          updateReferences: true,
          removeOldEntries: false,
          from: ['author', 'authorCity'],
          identityKey: () => 'ID',
          transformEntryForLocale: function () {
            return {}
          }
        })
      },
      null,
      null
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&skip=0`
      })
      .resolves({
        skip: 0,
        limit: 4,
        total: 6,
        items: ['item1', 'item2', 'item3', 'item4']
      })
    request
      .withArgs({
        method: 'GET',
        url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&skip=4`
      })
      .resolves({
        skip: 4,
        limit: 4,
        total: 6,
        items: ['item5', 'item6']
      })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const entries = await fetcher.getEntriesInIntents(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&skip=0`
    })
    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&skip=4`
    })

    const result = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
    expect(entries).to.eql(result)
  })

  it('adds entries info to content types', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.deleteContentType('foo')
        migration.deleteContentType('bar')
      },
      noOp,
      {}
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=foo'
      })
      .resolves({
        skip: 0,
        limit: 2,
        total: 2,
        items: ['item', 'item']
      })

    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=bar'
      })
      .resolves({
        skip: 0,
        limit: 2,
        total: 0,
        items: []
      })

    const intentList = new IntentList(intents)

    const contentTypes = [
      new ContentType({
        sys: {
          id: 'foo',
          version: 1
        },
        fields: [],
        name: 'foo'
      }),
      new ContentType({
        sys: {
          id: 'bar',
          version: 1
        },
        fields: [],
        name: 'bar'
      })
    ]
    const fetcher = new Fetcher(request)
    const contentTypesWithEntryInfo = await fetcher.checkContentTypesForDeletedCts(
      intentList,
      contentTypes
    )

    expect(contentTypesWithEntryInfo[0].id).to.eql('foo')
    expect(contentTypesWithEntryInfo[0].hasEntries).to.eql(true)
    expect(contentTypesWithEntryInfo[1].id).to.eql('bar')
  })

  it('fetches all the Content Types in the plan', async function () {
    const intents = await buildIntents(
      function up(migration) {
        const person = migration.createContentType('person', {
          name: 'bar',
          description: 'A content type for a person'
        })

        person.createField('name', {
          name: 'Name',
          type: 'Symbol'
        })

        migration.editContentType('dog', {
          name: 'Doggo',
          description: 'A shepard dog'
        })

        migration.editContentType('cat', {
          name: 'Cat',
          description: 'The trump of the animal world'
        })

        migration.deleteContentType('dog')
        migration.deleteContentType('plant')
      },
      noOp,
      {}
    )

    const request = sinon.stub()

    request.resolves({
      items: [
        {
          name: 'Person',
          description: 'Someone like you',
          fields: []
        },
        {
          name: 'A very goodboy',
          description: 'This is the best goodboy',
          fields: [
            {
              id: 'name',
              name: 'Name',
              type: 'Number'
            }
          ]
        },
        {
          name: 'Cat',
          description: 'The trump of the animal world',
          fields: []
        },
        {
          name: 'Plant',
          description: 'A plant!',
          fields: []
        }
      ],
      skip: 0,
      limit: 4,
      total: 4
    })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const contentTypes = await fetcher.getContentTypesInChunks(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/content_types?limit=100&order=sys.createdAt&sys.id[in]=person,dog,cat,plant&skip=0`
    })
    expect(contentTypes).to.eql([
      {
        name: 'Person',
        description: 'Someone like you',
        fields: []
      },
      {
        name: 'A very goodboy',
        description: 'This is the best goodboy',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Number'
          }
        ]
      },
      {
        name: 'Cat',
        description: 'The trump of the animal world',
        fields: []
      },
      {
        name: 'Plant',
        description: 'A plant!',
        fields: []
      }
    ])
  })

  it('fetches all the Content Types in the plan when it includes entry derive', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.deriveLinkedEntries({
          contentType: 'dog',
          derivedContentType: 'owner',
          from: ['owner'],
          toReferenceField: 'ownerRef',
          derivedFields: ['firstName', 'lastName'],
          identityKey: async (fromFields) => {
            return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
          },
          shouldPublish: true,
          deriveEntryForLocale: async (inputFields, locale) => {
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
      },
      noOp,
      {}
    )

    const request = sinon.stub()

    request.resolves({
      items: [
        {
          name: 'Dog',
          description: 'Someone like you',
          fields: [
            {
              id: 'ownerRef',
              name: 'ref',
              type: 'Link'
            }
          ]
        },
        {
          name: 'Owner',
          description: 'This is the best goodboy',
          fields: [
            {
              id: 'firstName',
              name: 'Name',
              type: 'Number'
            },
            {
              id: 'lastName',
              name: 'Name',
              type: 'Number'
            }
          ]
        }
      ],
      skip: 0,
      limit: 0,
      total: 2
    })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    await fetcher.getContentTypesInChunks(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/content_types?limit=100&order=sys.createdAt&sys.id[in]=dog,owner&skip=0`
    })
  })

  it('fetches all required Editor Interfaces in the plan', async function () {
    const intents = await buildIntents(
      function up(migration) {
        const foo = migration.editContentType('foo')
        foo.changeEditorInterface('title', 'singleLine')
        const bar = migration.editContentType('bar')
        bar.changeEditorInterface('desc', 'markdown')
      },
      noOp,
      {}
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: '/content_types/foo/editor_interface'
      })
      .resolves({
        sys: {
          version: 1
        },
        controls: [
          {
            fieldId: 'title',
            widgetId: 'multiline'
          }
        ]
      })
    request
      .withArgs({
        method: 'GET',
        url: '/content_types/bar/editor_interface'
      })
      .resolves({
        sys: {
          version: 2
        },
        controls: [
          {
            fieldId: 'desc',
            widgetId: 'singleLine'
          }
        ]
      })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const editorInterfaces = await fetcher.getEditorInterfacesInIntents(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: '/content_types/foo/editor_interface'
    })
    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: '/content_types/bar/editor_interface'
    })

    const result = new Map<String, APIEditorInterfaces>()
    result.set('foo', {
      sys: {
        version: 1
      },
      controls: [
        {
          fieldId: 'title',
          widgetId: 'multiline'
        }
      ]
    })
    result.set('bar', {
      sys: {
        version: 2
      },
      controls: [
        {
          fieldId: 'desc',
          widgetId: 'singleLine'
        }
      ]
    })
    expect(editorInterfaces).to.eql(result)
  })

  it('fetches all locales in the space', async function () {
    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/locales?limit=100&order=sys.createdAt&skip=0`
      })
      .resolves({
        skip: 0,
        limit: 2,
        total: 6,
        items: [{ code: 'a' }, { code: 'b' }]
      })
    request
      .withArgs({
        method: 'GET',
        url: `/locales?limit=100&order=sys.createdAt&skip=2`
      })
      .resolves({
        skip: 2,
        limit: 4,
        total: 6,
        items: [{ code: 'c' }, { code: 'd' }]
      })
    request
      .withArgs({
        method: 'GET',
        url: `/locales?limit=100&order=sys.createdAt&skip=4`
      })
      .resolves({
        skip: 4,
        limit: 6,
        total: 6,
        items: [{ code: 'e' }, { code: 'f' }]
      })

    const fetcher = new Fetcher(request)
    const localeCodes = await fetcher.getLocalesForSpace()

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/locales?limit=100&order=sys.createdAt&skip=0`
    })
    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/locales?limit=100&order=sys.createdAt&skip=2`
    })
    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/locales?limit=100&order=sys.createdAt&skip=4`
    })

    const result = ['a', 'b', 'c', 'd', 'e', 'f']
    expect(localeCodes).to.eql(result)
  })

  it('fetches all tags in the enviroment', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.createTag('person', {
          name: 'bar',
          description: 'A content type for a person'
        })
      },
      noOp,
      {}
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/tags?limit=100&order=sys.createdAt&skip=0`
      })
      .resolves({
        items: [
          {
            name: 'Person Tag',
            sys: { id: 'person', type: 'Tag', visbility: 'private' }
          },
          {
            name: 'A very goodboy',
            sys: { id: 'dog', type: 'Tag', visbility: 'public' }
          }
        ],
        total: 2,
        limit: 2
      })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const tags = await fetcher.getTagsForEnvironment(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/tags?limit=100&order=sys.createdAt&skip=0`
    })

    expect(tags).to.eql([
      {
        name: 'Person Tag',
        sys: { id: 'person', type: 'Tag', visbility: 'private' }
      },
      {
        name: 'A very goodboy',
        sys: { id: 'dog', type: 'Tag', visbility: 'public' }
      }
    ])
  })

  it("fetches intents with 'requiresAllTags'", async function () {
    class FakeIntent extends Intent {
      constructor() {
        super({ type: 'test', meta: { callsite: { line: 1, file: ' ' } }, payload: {} })
      }
      requiresAllTags() {
        return true
      }

      toActions() {
        return []
      }

      endsGroup() {
        return true
      }

      toPlanMessage() {
        return {
          heading: '',
          details: [],
          sections: []
        }
      }
    }

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/tags?limit=100&order=sys.createdAt&skip=0`
      })
      .resolves({
        items: [
          {
            name: 'Person Tag',
            sys: { id: 'person', type: 'Tag', visibility: 'private' }
          },
          {
            name: 'A very goodboy',
            sys: { id: 'dog', type: 'Tag', visibility: 'public' }
          }
        ],
        total: 2,
        limit: 2
      })

    const intentList = new IntentList([new FakeIntent()])
    const fetcher = new Fetcher(request)

    const tags = await fetcher.getTagsForEnvironment(intentList)

    expect(tags).to.eql([
      {
        name: 'Person Tag',
        sys: { id: 'person', type: 'Tag', visibility: 'private' }
      },
      {
        name: 'A very goodboy',
        sys: { id: 'dog', type: 'Tag', visibility: 'public' }
      }
    ])
  })

  it('fetches with a given limit', async function () {
    const intents = await buildIntents(
      function up(migration) {
        migration.createTag('person', {
          name: 'bar',
          description: 'A content type for a person'
        })
      },
      noOp,
      {}
    )

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: `/tags?limit=99&order=sys.createdAt&skip=0`
      })
      .resolves({
        items: [
          {
            name: 'Person Tag',
            sys: { id: 'person', type: 'Tag' }
          },
          {
            name: 'A very goodboy',
            sys: { id: 'dog', type: 'Tag' }
          }
        ],
        total: 2,
        limit: 2
      })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request, 99)
    await fetcher.getTagsForEnvironment(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: `/tags?limit=99&order=sys.createdAt&skip=0`
    })
  })
})
