'use strict'
import orchestrator from '../../../src/lib/orchestrator'
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

    const migrationScript = function (migration) {
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
    }

    const batches = await orchestrator(existingCts, apiEntries, migrationScript)

    for (const batch of batches) {
      console.log(batch.id)
      console.log(JSON.stringify(batch.requests, null, 2))
      console.log('------------\n')
    }
  })
})
