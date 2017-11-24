import { expect } from 'chai'
import * as sinon from 'sinon'

import { migration as buildIntents } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import Fetcher from '../../../src/lib/fetcher'
import { ContentType } from '../../../src/lib/entities/content-type'

describe('Fetcher', function () {
  it('adds entries info to content types', async function () {
    const intents = await buildIntents(function up (migration) {
      migration.deleteContentType('foo')
      migration.deleteContentType('bar')
    })

    const request = sinon.stub()
    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=foo'
      })
      .resolves({ items: ['item', 'item'] })

    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=bar'
      })
      .resolves({ items: [] })

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
    const contentTypesWithEntryInfo = await fetcher.checkContentTypesForDeletedCts(intentList, contentTypes)

    expect(contentTypesWithEntryInfo[0].id).to.eql('foo')
    expect(contentTypesWithEntryInfo[0].hasEntries).to.eql(true)
    expect(contentTypesWithEntryInfo[1].id).to.eql('bar')
  })

  it('fetches all the Content Types in the plan', async function () {
    const intents = await buildIntents(function up (migration) {
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
    })

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
      ]
    })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const contentTypes = await fetcher.getContentTypesInChunks(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: '/content_types?sys.id[in]=person,dog,cat,plant'
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
    const intents = await buildIntents(function up (migration) {
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
    })

    const request = sinon.stub()

    request.resolves({
      items: [
        {
          name: 'Dog',
          description: 'Someone like you',
          fields: [{
            id: 'ownerRef',
            name: 'ref',
            type: 'Link'
          }]
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
      ]
    })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    await fetcher.getContentTypesInChunks(intentList)

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: '/content_types?sys.id[in]=dog,owner'
    })
  })
})
