'use strict';

const assert = require('./assertions');
const cli = require('./cli');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('invalid payload errors', function () {
  it('outputs the validation errors', function (done) {
    this.timeout(20000);
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
      .expect(assert.validations.validations.invalidValidationParameter('pattern', 'string', 'number'))
      .end(done);
  });
});
