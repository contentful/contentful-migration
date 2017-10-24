'use strict'

const Bluebird = require('bluebird')
const { expect } = require('chai')

import ChangeRecorder from '../../../src/lib/state/change-recorder'
import { migration } from '../../../src/lib/migration-steps/index'
import IntentList from '../../../src/lib/intent-list/index'

import ApiContentType from '../../../src/lib/interfaces/content-type'
import { ContentType, Field } from '../../../src/lib/immutable-content-type/index'

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

    const immutableExistingCts: Map<String, ContentType> = new Map()

    for (const ct of existingCts) {
      const contentType = new ContentType({
        id: ct.sys.id,
        name: ct.name,
        description: ct.description,
        fields: ct.fields as Field[]
      })

      immutableExistingCts.set(contentType.id, contentType)
    }

    const state = new ChangeRecorder<ContentType>(immutableExistingCts)

    for (const pkg of packages) {
      await state.startBatch('foo')

      const intents = pkg.getIntents()
      for (const intent of intents) {
        const actions = intent.toActions()
        for (const action of actions) {
          await action.applyTo(state)
        }
      }

      await state.endBatch()
    }

    const batches = await state.getBatches()

    for (const batch of batches) {
      console.log(batch.id)
      const allEntities = await batch.state.getAll()
      for (const [id, entity] of allEntities.entries()) {
        console.log(id, entity.toRaw())
      }
    }
  })
})
