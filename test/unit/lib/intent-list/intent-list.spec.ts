import ComposedIntent from '../../../../src/lib/intent/composed-intent'
import { expect } from 'chai'
import IntentList from '../../../../src/lib/intent-list/index'
import { migration as parseIntoIntents } from '../../../../src/lib/migration-steps/index'

const noOp = () => undefined

describe('Intent List', function () {
  it('initializes correctly', async function () {
    const intents = await parseIntoIntents(function up (migration) {
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
    }, noOp, {})

    const intentList = new IntentList(intents)
    // TODO: I updated this from 15 to 17, because the createTag
    // method entails one createIntent and one updateIntent (the
    // latter for setting the name) Is this an acceptable approach?
    expect(intentList.getIntents().length).to.equal(17)
  })

  it('compresses ct create with field creates & updates', async function () {
    const intents = await parseIntoIntents(function up (migration) {
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
    }, noOp, {})

    const intentList = new IntentList(intents)
    const compressedList = intentList.compressed()

    const compressedIntent = compressedList.getIntents()[0] as ComposedIntent

    expect(compressedList.getIntents().length).to.equal(1)
    expect(compressedIntent.getIntents().length).to.equal(9)
  })

  it('compresses tag create', async function () {
    const intents = await parseIntoIntents(function up (migration) {
      migration.createTag('bar', {
        name: 'foo'
      })
    }, noOp, {})

    const intentList = new IntentList(intents)
    const compressedList = intentList.compressed()

    const compressedIntent = compressedList.getIntents()[0] as ComposedIntent

    expect(compressedList.getIntents().length).to.equal(1)
    expect(compressedIntent.getIntents().length).to.equal(2)
  })

})
