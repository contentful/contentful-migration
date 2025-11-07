import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'
import {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevEditorInterface
} from '../helpers/client'

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply editor-interface migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 16-change-field-control migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/16-change-field-control.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorInterface.change('blogPost', 'slug', 'slugEditor'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 16-change-editor-interface migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/16-change-field-control.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorInterface.change('blogPost', 'slug', 'slugEditor'))
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const editorInterfaces = await getDevEditorInterface(
          SOURCE_TEST_SPACE!,
          environmentId,
          'blogPost'
        )
        const editorInterface = editorInterfaces.controls[0]
        expect(editorInterface.fieldId).toEqual('slug')
        expect(editorInterface.widgetId).toEqual('slugEditor')
        done()
      })
  })
})
