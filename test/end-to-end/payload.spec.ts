import { describe, it, expect } from 'vitest'
import assert from './assertions'
import cli from './cli'

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('invalid payload errors', () => {
  it('outputs the validation errors', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/13-payload-validations.js`)
        .expect(assert.validations.contentType.requiredProperty('name'))
        .expect(assert.validations.contentType.nonExistentDisplayField('area', 'barcelona'))
        .expect(assert.validations.contentType.deleteDisplayField('baguette', 'paris'))
        .expect(assert.validations.field.requiredProperty('name', 'population'))
        .expect(assert.validations.field.requiredProperty('type', 'population'))
        .expect(assert.validations.field.propertyOneOf('type', 'frog'))
        .expect(assert.validations.field.noDeleteWithoutOmit('baguette', 'paris'))
        .expect(assert.validations.field.idMustMatchSchema('1uno', 'paella'))
        .expect(assert.validations.validations.duplicatedValidation({ in: ['smaczny'] }))
        .expect(assert.validations.validations.invalidValidationProperty('elegancki'))
        .expect(
          assert.validations.validations.invalidValidationParameter('pattern', 'string', 'number')
        )
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
})
