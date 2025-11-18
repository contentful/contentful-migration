import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'
import {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevContentType,
  getDevTag
} from '../helpers/client'
import { v4 as uuidv4 } from 'uuid'

const ENVIRONMENT_ID = uuidv4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply content-type migration examples', () => {
  let environmentId: string

  beforeAll(async () => {
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE!, ENVIRONMENT_ID)
  })

  afterAll(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE!, environmentId)
  })

  it('aborts 01-angry-dog migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/01-angry-dog.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('n\n')
        .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
        .expect(assert.plans.actions.abort())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('applies 01-angry-dog migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/01-angry-dog.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('y\n')
        .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'dog')
    expect(contentType.name).toEqual('angry dog')
    expect(contentType.description).toEqual('super angry')
    expect(contentType.fields.length).toEqual(1)
  })

  it('aborts 02-friendly-dog migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/02-friendly-dog.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('n\n')
        .expect(assert.plans.contentType.update('dog'))
        .expect(assert.plans.actions.abort())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('applies 02-friendly-dog migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/02-friendly-dog.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('Y\n')
        .expect(assert.plans.contentType.update('dog'))
        .expect(
          assert.plans.field.create('goodboys', {
            type: 'Number',
            name: 'number of times he has been called a good boy'
          })
        )
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'dog')
    expect(contentType.name).toEqual('Friendly dog')
    expect(contentType.description).toEqual("Who's a good boy? He is!")
    expect(contentType.fields.length).toEqual(2)
  })

  it('aborts 03-long-example migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/03-long-example.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('n\n')
        .expect(assert.plans.contentType.create('person', { name: 'Person' }))
        .expect(assert.plans.contentType.create('animal', { name: 'Animal' }))
        .expect(assert.plans.contentType.update('person'))
        .expect(assert.plans.contentType.update('animal'))
        .expect(assert.plans.actions.abort())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('applies 03-long-example migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/03-long-example.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('Y\n')
        .expect(assert.plans.contentType.create('person', { name: 'Person' }))
        .expect(assert.plans.field.create('age', { type: 'Number', name: 'Age', required: true }))
        .expect(
          assert.plans.field.create('fullName', {
            type: 'Symbol',
            name: 'Full name',
            required: true,
            localized: true
          })
        )
        .expect(assert.plans.contentType.create('animal', { name: 'Animal' }))
        .expect(
          assert.plans.field.create('species', {
            type: 'Symbol',
            name: 'The species of the animal',
            required: true
          })
        )
        .expect(
          assert.plans.field.create('isFurry', {
            type: 'Boolean',
            name: 'Is this a furry animal',
            required: false
          })
        )
        .expect(assert.plans.contentType.update('person'))
        .expect(
          assert.plans.field.create('pet', {
            type: 'Link',
            name: 'Their pet',
            linkType: 'Entry',
            required: false
          })
        )
        .expect(assert.plans.contentType.update('animal'))
        .expect(
          assert.plans.field.create('name', {
            type: 'Symbol',
            name: 'The name of the animal',
            required: true,
            localized: true
          })
        )
        .expect(assert.plans.tag.create('longexampletag', { name: 'long example marketing' }))
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const contentTypePerson = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'person')
    const contentTypeAnimal = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'animal')
    const tag = await getDevTag(SOURCE_TEST_SPACE!, environmentId, 'longexampletag')

    expect(contentTypePerson.name).toEqual('Person')
    expect(contentTypePerson.description).toEqual('A content type for a person')
    expect(contentTypePerson.fields.length).toEqual(3)
    expect(contentTypeAnimal.name).toEqual('Animal')
    expect(contentTypeAnimal.description).toEqual('An animal')
    expect(contentTypeAnimal.fields.length).toEqual(3)
    expect(tag.name).toEqual('long example marketing')
  })

  it('applies delete-content-type migration', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/delete-content-type.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('Y\n')
        .expect(assert.plans.contentType.delete('dog'))
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    let result
    try {
      result = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'dog')
    } catch (err: any) {
      expect(err.name).toEqual('NotFound')
    }
    expect(result).toBeUndefined()
  })

  it('applies 47-create-resource-link-fields', async () => {
    const allowedResources = [
      {
        type: 'Contentful:Entry',
        source: 'crn:contentful:::content:spaces/another-space',
        contentTypes: ['contentType1', 'contentType2', 'contentType3']
      }
    ]

    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/47-create-resource-link-fields.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('Y\n')
        .expect(assert.plans.contentType.create('contentTypeWithResourceLinks'))
        .expect(
          assert.plans.field.create('resourceLink', {
            name: 'resourceLink',
            type: 'ResourceLink',
            allowedResources
          })
        )
        .expect(
          assert.plans.field.create('resourceLinkArray', {
            name: 'resourceLinkArray',
            type: 'Array',
            items: { type: 'ResourceLink' },
            allowedResources
          })
        )
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const contentType = await getDevContentType(
      SOURCE_TEST_SPACE!,
      environmentId,
      'contentTypeWithResourceLinks'
    )
    expect(contentType.fields.length).toEqual(2)
    expect(contentType.fields[0].type).toEqual('ResourceLink')
    expect(contentType.fields[0].allowedResources).toEqual(allowedResources)
    expect(contentType.fields[1].items.type).toEqual('ResourceLink')
    expect(contentType.fields[1].allowedResources).toEqual(allowedResources)
  })

  it('applies 54-create-experience-type', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/54-create-experience-type.js`
        )
        .on(/\? Do you want to apply the migration \(Y\/n\)/)
        .respond('Y\n')
        .expect(assert.plans.contentType.create('experienceType'))
        .expect(assert.plans.annotation.assign('Contentful:ExperienceType'))
        .expect(assert.plans.actions.apply())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })

    const contentType = await getDevContentType(SOURCE_TEST_SPACE!, environmentId, 'experienceType')
    expect(contentType.metadata).toEqual({
      annotations: {
        ContentType: [
          {
            sys: {
              id: 'Contentful:ExperienceType',
              type: 'Link',
              linkType: 'Annotation'
            }
          }
        ]
      }
    })
  })
})
