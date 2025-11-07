import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'
import { createDevEnvironment, deleteDevEnvironment, getDevContentType } from '../helpers/client'

import { v4 as uuidv4 } from 'uuid'
const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply validations migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 09-validate-validations migration', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/09-validate-validations.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.create('dieatary-food'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 09-validate-validations migration', (done) => {
    const expectedFields = [
      {
        id: 'name',
        name: 'name of the food',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [
          {
            unique: true
          },
          {
            prohibitRegexp: {
              pattern: 'foo',
              flags: null
            },
            message: 'asdf'
          }
        ]
      },
      {
        id: 'calories',
        name: 'amount of calories the food contains',
        type: 'Link',
        linkType: 'Asset',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [
          {
            assetImageDimensions: {
              width: {
                min: 1199,
                max: null
              },
              height: {
                min: 1343
              }
            }
          }
        ]
      }
    ]

    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/09-validate-validations.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(
        assert.plans.contentType.create('dieatary-food', {
          name: 'Dieatary Food',
          description: 'Food with up to 500 calories'
        })
      )
      .expect(
        assert.plans.field.create('name', {
          type: 'Symbol',
          name: 'name of the food',
          validations: [
            {
              unique: true
            },
            {
              prohibitRegexp: {
                pattern: 'foo',
                flags: null
              },
              message: 'asdf'
            }
          ]
        })
      )
      .expect(
        assert.plans.field.create('calories', {
          type: 'Link',
          linkType: 'Asset',
          name: 'amount of calories the food contains',
          validations: [
            {
              assetImageDimensions: {
                width: {
                  min: 1199,
                  max: null
                },
                height: {
                  min: 1343
                }
              }
            }
          ]
        })
      )
      .expect(assert.plans.actions.apply())
      .end(async () => {
        const contentType = await getDevContentType(
          SOURCE_TEST_SPACE!,
          environmentId,
          'dieatary-food'
        )
        expect(contentType.fields).toEqual(expectedFields)
        done()
      })
  })

  it('successfully creates field with rich text and validations', (done) => {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/22-create-rich-text-field-with-validation.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .stdout(/.* Migration successful/)
      .end(done)
  })
})
