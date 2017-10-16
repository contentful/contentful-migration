'use strict';

const assert = require('./assertions');
const cli = require('./cli');

describe('contentful-migration help info', function () {
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
});
