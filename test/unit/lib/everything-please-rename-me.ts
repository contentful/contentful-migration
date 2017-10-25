'use strict'
import { Packet } from '_debugger'

const Bluebird = require('bluebird')
const { expect } = require('chai')

import FakeAPI from '../../../src/lib/fake-api/index'
import { migration } from '../../../src/lib/migration-steps/index'
import IntentList from '../../../src/lib/intent-list/index'

import ApiContentType from '../../../src/lib/interfaces/content-type'
import ApiEntry from '../../../src/lib/interfaces/api-entry'
import { ContentType, Field } from '../../../src/lib/entities/content-type'
import { Entry } from '../../../src/lib/entities/entry'

const co = Bluebird.coroutine

describe('Apply stuff', function () {
  it('can get an entity', async function () {
    const existingCts: ApiContentType[] = [{
      name: 'Very dangerous dog',
      description: 'Woof woof',
      fields: [
        {
          id: 'kills',
          type: 'Number',
          name: 'kills',
          required: true
        },
        {
          id: 'favoriteFood',
          type: 'Symbol',
          name: 'food',
          required: true
        }
      ],
      sys: {
        version: 2,
        id: 'dog'
      }
    }]

    const apiEntries: ApiEntry[] = [{
      sys: {
        id: 'firstDog',
        version: 10,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'dog'
          }
        }
      },
      fields: {
        kills: {
          'en-US': 10
        },
        favoriteFood: {
          'en-US': 'bones,cats'
        }
      }
    }, {
      sys: {
        id: 'dani',
        version: 7,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'dog'
          }
        }
      },
      fields: {
        kills: {
          'en-US': 0
        },
        favoriteFood: {
          'en-US': 'leather jackets,homework'
        }
      }
    }]

    const intents = await migration(function (migration) {
      const dog = migration.editContentType('dog')

      dog.name('1 nicer dog')
        .description('vong dogginess her')

      dog.editField('kills').required(false)
      migration.createContentType('cat').name('catty').description('a cat')
      dog.name('super nicer dog')
      dog.createField('woof').name('maybe?')

      dog.createField('firstFood').name('First Food').type('Symbol')
      dog.createField('secondFood').name('First Food').type('Symbol')

      dog.transformContent({
        from: ['favoriteFood'],
        to: ['firstFood', 'secondFood'],
        transform: ([favoriteFood]) => {
          const [firstFood, secondFood] = favoriteFood['en-US'].split(',')
          return [{ 'en-US': firstFood }, { 'en-US': secondFood }]
        }
      })

      dog.transformContent({
        from: ['firstFood', 'secondFood'],
        to: ['firstFood', 'secondFood'],
        transform: ([firstFood, secondFood]) => {
          return [{ 'en-US': firstFood['en-US'].toUpperCase() }, { 'en-US': secondFood['en-US'].toUpperCase() }]
        }
      })
      // dog.deleteField('kills')
    })

    const list = new IntentList(intents)
    const packages = list.toPackages()

    const existingCTs: Map<String, ContentType> = new Map()

    for (const ct of existingCts) {
      const contentType = new ContentType({
        id: ct.sys.id,
        version: ct.sys.version,
        name: ct.name,
        description: ct.description,
        fields: ct.fields as Field[]
      })

      existingCTs.set(contentType.id, contentType)
    }

    const entries: Entry[] = apiEntries.map((apiEntry) => {
      return new Entry({
        id: apiEntry.sys.id,
        contentTypeId: apiEntry.sys.contentType.sys.id,
        fields: apiEntry.fields,
        version: apiEntry.sys.version
      })
    })

    const state = new FakeAPI(existingCTs, entries)

    for (const pkg of packages) {
      await pkg.applyTo(state)
    }

    const batches = await state.getRequestBatches()

    for (const batch of batches) {
      console.log(batch.id)
      console.log(JSON.stringify(batch.requests, null, 2))
      console.log('------------\n')
    }
  })
})
