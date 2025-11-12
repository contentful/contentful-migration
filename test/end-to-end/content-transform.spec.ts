import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import _ from 'lodash'
import assert from './assertions'
import cli from './cli'
import {
  createDevEnvironment,
  deleteDevEnvironment,
  getEntries,
  makeRequest
} from '../helpers/client'
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

describe('apply content transformation', () => {
  let environmentId: string
  let request: any

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
    const organizationId = undefined
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, environmentId, organizationId)
    await request({
      method: 'PUT',
      url: '/content_types/newsArticle',
      data: {
        name: 'news article',
        fields: [
          {
            name: 'author',
            id: 'author',
            type: 'Symbol'
          },
          {
            name: 'authorCity',
            id: 'authorCity',
            type: 'Symbol'
          },
          {
            name: 'byline',
            id: 'byline',
            type: 'Symbol'
          }
        ]
      }
    })

    await request({
      method: 'PUT',
      url: '/content_types/newsArticle/published',
      headers: {
        'X-Contentful-Version': 1
      }
    })

    await request({
      method: 'PUT',
      url: '/tags/test',
      data: {
        name: 'test',
        sys: { id: 'test' }
      }
    })

    await request({
      method: 'PUT',
      url: '/tags/old',
      data: {
        name: 'old',
        sys: { id: 'old' }
      }
    })

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Content-Type': 'newsArticle'
      },
      data: {
        fields: {
          author: { 'en-US': 'Jane Austen' },
          authorCity: { 'en-US': 'Steventon' }
        },
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

  it('aborts 12-transform-content', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/12-transform-content.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('n\n')
        .expect(assert.plans.entriesTransform('newsArticle'))
        .expect(assert.plans.actions.abort())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })

  it('applies 12-transform-content', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/12-transform-content.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('y\n')
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const res = (await getEntries(SOURCE_TEST_SPACE!, environmentId, 'newsArticle')) as any
    const entriesWithoutSysAndMetadata = res.items.map((i) => _.omit(i, ['sys', 'metadata']))
    const metadata = res.items[0].metadata
    const expected = [
      {
        fields: {
          author: { 'en-US': 'Jane Austen' },
          authorCity: { 'en-US': 'Steventon' },
          byline: { 'en-US': 'Jane Austen Steventon' }
        }
      }
    ]
    expect(entriesWithoutSysAndMetadata).toEqual(expected)
    expect(metadata.tags.length).toEqual(1)
  })

  it('applies 14-transform-content-error', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/14-transform-content-error.js`
        )
        .expect(
          assert.errors.entriesTransform('newsArticle', '1 errors while transforming this content.')
        )
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
})
