import { describe, it, expect } from 'vitest'
import ComposedIntent from '../../../../src/lib/intent/composed-intent'
import IntentList from '../../../../src/lib/intent-list/index'
import { migration as parseIntoIntents } from '../../../../src/lib/migration-steps/index'

const noOp = () => undefined

describe('Intent List', () => {
  it('initializes correctly', async () => {
    const intents = await parseIntoIntents(
      function up(migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        const fullName = person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        })

        person.editField('lastName', {
          name: 'New Last Name'
        })

        person.editField('fullName').localized(true)
        fullName.required(true)

        person.name('bar')

        const address = migration.editContentType('address', {
          name: 'the new name'
        })
        person.name('a person')

        address.editField('houseNumber').omitted(true)
        address.createField('houseExtension', {
          type: 'Symbol'
        })

        const sampleTag = migration.createTag('sampleTagId', {
          name: 'tag name'
        })
      },
      noOp,
      {}
    )

    const intentList = new IntentList(intents)
    expect(intentList.getIntents().length).toBe(17)
  })

  it('compresses ct create with field creates & updates', async () => {
    const intents = await parseIntoIntents(
      function up(migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        })

        const fullName = person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        })

        person.editField('lastName', {
          name: 'New Last Name'
        })

        person.editField('fullName').localized(true)
        fullName.required(true)
      },
      noOp,
      {}
    )

    const intentList = new IntentList(intents)
    const compressedList = intentList.compressed()

    const compressedIntent = compressedList.getIntents()[0] as ComposedIntent

    expect(compressedList.getIntents().length).toBe(1)
    expect(compressedIntent.getIntents().length).toBe(9)
  })

  it('compresses tag create', async () => {
    const intents = await parseIntoIntents(
      function up(migration) {
        migration.createTag('bar', {
          name: 'foo'
        })
      },
      noOp,
      {}
    )

    const intentList = new IntentList(intents)
    const compressedList = intentList.compressed()

    const compressedIntent = compressedList.getIntents()[0] as ComposedIntent

    expect(compressedList.getIntents().length).toBe(1)
    expect(compressedIntent.getIntents().length).toBe(2)
  })
})
