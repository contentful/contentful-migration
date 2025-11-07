import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'
import { createDevEnvironment, deleteDevEnvironment, getDevContentType } from '../helpers/client'
import { v4 as uuidv4 } from 'uuid'

const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply field migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 06-delete-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/06-delete-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.create('dog', { name: 'Angry dog' }))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 06-delete-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/06-delete-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.contentType.create('dog', { name: 'Angry dog' }))
      .expect(assert.plans.field.delete('postmenBites'))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'dog')
        expect(contentType.name).toEqual('Angry dog')
        expect(contentType.description).toEqual("Who's got mad? He is!")
        expect(contentType.fields.length).toEqual(1)
        done()
      })
  })

  it('aborts change-field-id migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/change-field-id.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies change-field-id migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/change-field-id.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.field.rename('goodboys', 'aDifferentId'))
      .expect(assert.plans.field.update('aDifferentId', { name: 'ID switching is fun!' }))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'dog')
        expect(contentType.fields[0].id).toEqual('aDifferentId')
        done()
      })
  })

  it('aborts 07-display-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/07-display-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 07-display-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/07-display-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.contentType.create('food', { name: 'foooood', displayField: 'taste' }))
      .expect(assert.plans.field.create('taste', { type: 'Symbol', name: 'what it tastes like' }))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'food')
        expect(contentType.name).toEqual('foooood')
        expect(contentType.displayField).toEqual('taste')
        done()
      })
  })

  it('aborts 08-move-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/08-move-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.update('food'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 08-move-field migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/08-move-field.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.contentType.update('food'))
      .expect(
        assert.plans.field.create('calories', {
          type: 'Number',
          name: 'How many calories does it have?'
        })
      )
      .expect(assert.plans.field.move('top', 'calories'))
      .expect(assert.plans.field.create('sugar', { type: 'Number', name: 'Amount of sugar' }))
      .expect(assert.plans.field.move('bottom', 'sugar'))
      .expect(assert.plans.field.create('vegan', { type: 'Boolean', name: 'Vegan friendly' }))
      .expect(assert.plans.field.create('producer', { type: 'Symbol', name: 'Food producer' }))
      .expect(assert.plans.field.move('before', 'producer', 'vegan'))
      .expect(
        assert.plans.field.create('gmo', { type: 'Boolean', name: 'Genetically modified food' })
      )
      .expect(assert.plans.field.move('after', 'gmo', 'vegan'))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'food')
        expect(contentType.fields[0].id).toEqual('calories')
        expect(contentType.fields[1].id).toEqual('taste')
        expect(contentType.fields[2].id).toEqual('producer')
        expect(contentType.fields[3].id).toEqual('vegan')
        expect(contentType.fields[4].id).toEqual('gmo')
        expect(contentType.fields[5].id).toEqual('sugar')
        done()
      })
  })
})
