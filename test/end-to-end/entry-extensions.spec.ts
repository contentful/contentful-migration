import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import cli from './cli'
import {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevEditorInterface
} from '../helpers/client'

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply entry extension migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('migrates the editor with 25-configure-entry-editor.js', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/25-configure-entry-editor.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('y\n')
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const editorInterfaces = await getDevEditorInterface(
      SOURCE_TEST_SPACE!,
      environmentId,
      'customEntryEditor_v5'
    )
    const editor = editorInterfaces.editor

    expect(editor).toEqual({
      settings: {},
      widgetId: 'customEntryEditor_v5',
      widgetNamespace: 'extension'
    })
  })

  it('migrates the editor with 26-reset-entry-editor.js', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/26-reset-entry-editor.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('y\n')
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const editorInterfaces = await getDevEditorInterface(
      SOURCE_TEST_SPACE!,
      environmentId,
      'resetEntryEditor_v5'
    )
    const editor = editorInterfaces.editor
    expect(editor).toBeUndefined()
  })
})
