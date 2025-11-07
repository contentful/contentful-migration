import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'
import { createDevEnvironment, deleteDevEnvironment, getDevTag } from '../helpers/client'
import { v4 as uuidv4 } from 'uuid'

const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply tag migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 28-create-tag migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/28-create-tag.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.tag.create('sampletag', { name: 'marketing' }))
      .expect(assert.plans.actions.abort())
      .end(done)
  })

  it('applies 28-create-tag migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/28-create-tag.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.tag.create('sampletag', { name: 'marketing' }))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const tag = await getDevTag(SOURCE_TEST_SPACE!, environmentId, 'sampletag')
        expect(tag.name).toEqual('marketing')
        done()
      })
  })

  it('aborts 29-modify-tag migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/29-modify-tag.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.tag.update('sampletag'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })

  it('applies 29-modify-tag migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/29-modify-tag.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('Y\n')
      .expect(assert.plans.tag.update('sampletag', { name: 'better marketing' }))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const tag = await getDevTag(SOURCE_TEST_SPACE!, environmentId, 'sampletag')
        expect(tag.name).toEqual('better marketing')
        done()
      })
  })

  it('applies delete-tag migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/30-delete-tag.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('Y\n')
      .expect(assert.plans.tag.delete('sampletag'))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        let result
        try {
          result = await getDevTag(SOURCE_TEST_SPACE!, environmentId, 'sampletag')
        } catch (err: any) {
          expect(err.name).toEqual('NotFound')
        }
        expect(result).toBeUndefined()
        done()
      })
  })
})
