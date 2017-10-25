'use strict'

const Bluebird = require('bluebird')
const { expect } = require('chai')

import FakeAPI from '../../../src/lib/fake-api/index'
import { migration } from '../../../src/lib/migration-steps/index'
import IntentList from '../../../src/lib/intent-list/index'

import ApiContentType from '../../../src/lib/interfaces/content-type'
import { ContentType, Field } from '../../../src/lib/entities/content-type'

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

    const intents = await migration(function (migration) {
      const dog = migration.editContentType('dog')

      dog.name('1 nicer dog')
        .description('vong dogginess her')

      dog.editField('kills').required(false)
      migration.createContentType('cat').name('catty').description('a cat')
      dog.name('super nicer dog')
      dog.createField('woof').name('maybe?')
      dog.deleteField('kills')
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

    const state = new FakeAPI(existingCTs)

    for (const pkg of packages) {
      await pkg.applyTo(state)
    }

    const batches = await state.getRequestBatches()

    for (const batch of batches) {
      console.log(batch.id)
      console.log(batch.requests)
      console.log('------------\n')
    }
  })
})
