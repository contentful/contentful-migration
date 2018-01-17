'use strict';

const assert = require('./assertions');
const cli = require('./cli');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('04-steps-errors.js', function () {
  it('outputs the correct errors', function (done) {
    this.timeout(10000);

    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/04-steps-errors.js`)
      .expect(assert.errors.contentType.invalidPropertyWithSuggestion('nmae', 'name'))
      .expect(assert.errors.field.invalidPropertyWithSuggestion('lodalised', 'localized'))
      .expect(assert.errors.field.invalidPropertyWithSuggestion('reqired', 'required'))
      .expect(assert.errors.field.invalidPropertyWithSuggestion('validashons', 'validations'))
      .expect(assert.errors.field.invalidTypeForProperty('validations', 'null', 'array'))
      .end(done);
  });
});

describe('05-plan-errors.js', function () {
  it('outputs the correct errors', function (done) {
    this.timeout(20000);

    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/05-plan-errors.js`)
      .expect(assert.errors.contentType.duplicateCreate(13, 'person'))
      .expect(assert.errors.contentType.duplicateCreate(17, 'person'))
      .expect(assert.errors.contentType.invalidProperty(9, 'somethingElse'))
      .end(done);
  });
});
