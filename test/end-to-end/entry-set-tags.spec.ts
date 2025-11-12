import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import _ from 'lodash'
import assert from './assertions'
import cli from './cli'
import { createDevEnvironment, deleteDevEnvironment, makeRequest } from '../helpers/client'

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply set tags transformation', () => {
  let environmentId: string
  let request: any

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
    const organizationId = undefined
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, environmentId, organizationId)
    await request({
      method: 'PUT',
      url: '/content_types/article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'blog post',
        fields: [
          {
            name: 'title',
            id: 'title',
            type: 'Symbol'
          }
        ]
      }
    })

    await request({
      method: 'PUT',
      url: '/content_types/article/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    })

    await request({
      method: 'PUT',
      url: '/tags/new',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'new',
        sys: { id: 'new' }
      }
    })

    await request({
      method: 'PUT',
      url: '/tags/old',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'old',
        sys: { id: 'old' }
      }
    })

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'article'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } },
        metadata: {
          tags: [
            {
              sys: {
                id: 'old',
                type: 'Link',
                linkType: 'Tag'
              }
            }
          ]
        }
      }
    })
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 31-set-tags-for-entries', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/31-set-tags-for-entries.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('n\n')
        .expect(assert.plans.entriesSetTags('article'))
        .expect(assert.plans.actions.abort())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })

  it('applies 31-set-tags-for-entries', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/31-set-tags-for-entries.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('y\n')
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const blogEntries = await request({
      method: 'GET',
      url: '/entries?content_type=article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      }
    })

    expect(blogEntries.items[0].fields.title).toBeDefined()

    const blogEntriesWithoutSysAndFields = blogEntries.items.map((i) =>
      _.omit(i, ['sys', 'fields'])
    )
    expect(blogEntriesWithoutSysAndFields[0].metadata.tags.length).toEqual(2)
    expect(
      blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag: any) => tag.sys.id === 'new')
    ).toEqual(true)
    expect(
      blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag: any) => tag.sys.id === 'old')
    ).toEqual(true)
  })
})
