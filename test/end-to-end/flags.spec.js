'use strict';

const assert = require('./assertions');
const cli = require('./cli');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('contentful-migration CLI flags', function () {
  it('"--help" outputs the help message', function (done) {
    cli()
      .run('--help')
      .expect(assert.help.message())
      .end(done);
  });
  it('"no args" outputs the help message', function (done) {
    cli()
      .run('')
      .expect(assert.help.message())
      .expect(assert.help.noArgsWithSuggestion())
      .end(done);
  });
  it('"wrong arg" outputs the help message', function (done) {
    cli()
      .run('foo')
      .expect(assert.help.message())
      .expect(assert.help.wrongArgsWithSuggestion())
      .end(done);
  });
  it('"--yes" skips the validation', function (done) {
    cli()
      .run(`--yes --space-id ${SOURCE_TEST_SPACE} ./test/end-to-end/migration-scripts/empty-migration.js`)
      .expect(assert.confirmation.noConfirmationMessage())
      .end(done);
  });
});
