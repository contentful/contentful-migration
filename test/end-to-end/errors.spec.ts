import { describe, it, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('04-steps-errors.js', () => {
  it('outputs the correct errors', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/04-steps-errors.js`)
        .expect(assert.errors.contentType.invalidPropertyWithSuggestion('nmae', 'name'))
        .expect(assert.errors.field.invalidPropertyWithSuggestion('lodalised', 'localized'))
        .expect(assert.errors.field.invalidPropertyWithSuggestion('reqired', 'required'))
        .expect(assert.errors.field.invalidPropertyWithSuggestion('validashons', 'validations'))
        .expect(assert.errors.field.invalidTypeForProperty('validations', 'null', 'array'))
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
})

describe('05-plan-errors.js', () => {
  it('outputs the correct errors', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/05-plan-errors.js`)
        .expect(assert.errors.contentType.duplicateCreate(13, 'person'))
        .expect(assert.errors.contentType.duplicateCreate(17, 'person'))
        .expect(assert.errors.contentType.invalidProperty(9, 'somethingElse'))
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
})
