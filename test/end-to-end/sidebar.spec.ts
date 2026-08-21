import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import cli from './cli'
import {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevEditorInterface
} from '../helpers/client'
import { DEFAULT_SIDEBAR_LIST } from '../../built/lib/action/sidebarwidget'

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply sidebar migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('migrates the sidebar with 24-add-sidebar-widgets-to-new-content-type.js', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/24-add-sidebar-widgets-to-new-content-type.js`
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
      'customSidebar'
    )
    const sidebar = editorInterfaces.sidebar

    expect(sidebar).toEqual([
      ...DEFAULT_SIDEBAR_LIST,
      {
        disabled: false,
        settings: {
          tagField: 'tags',
          imageField: 'image'
        },
        widgetId: 'imageTaggingExtensionId',
        widgetNamespace: 'extension'
      }
    ])
  })

  it('migrates the sidebar with 27-add-sidebar-widgets-to-existing-content-type.js', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/27-add-sidebar-widgets-to-existing-content-type.js`
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
      'richTextTest'
    )
    const sidebar = editorInterfaces.sidebar
    expect(sidebar).toEqual([
      ...DEFAULT_SIDEBAR_LIST,
      {
        disabled: false,
        settings: {
          tagField: 'tags',
          imageField: 'image'
        },
        widgetId: 'imageTaggingExtensionId',
        widgetNamespace: 'extension'
      }
    ])
  })
})
