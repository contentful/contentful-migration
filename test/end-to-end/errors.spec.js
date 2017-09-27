'use strict';

const nixt = require('nixt');
const assert = require('./assertions');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;
const ACCESS_TOKEN = process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN;

describe('04-steps-errors.js', function () {
  it('outputs the correct errors', function (done) {
    nixt()
      .env('CONTENTFUL_MANAGEMENT_ACCESS_TOKEN', ACCESS_TOKEN)
      .run(`./bin/contentful-migration --space-id ${SOURCE_TEST_SPACE} ./examples/04-steps-errors.js`)
      .expect(assert.errors.contentType.invalidPropertyWithSuggestion('nmae', 'name'))
      .expect(assert.errors.field.invalidPropertyWithSuggestion('lodalised', 'localized'))
      .end(done);
  });
});
