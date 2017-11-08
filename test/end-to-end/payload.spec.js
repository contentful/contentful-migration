'use strict';

const assert = require('./assertions');
const cli = require('./cli');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('invalid payload', function () {
  it('outputs the undefined error', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/10-payload-undefined.js`)
      .expect(assert.payload.notDefined('buggybug'))
      .end(done);
  });

  it('outputs the missing argument error', function (done) {
    const script = '11-payload-corrupt.js';
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/${script}`)
      .expect(assert.payload.syntaxError(script, 4, 'missing ) after argument list'))
      .end(done);
  });

  it('outputs the invalid token error', function (done) {
    const script = '12-payload-invalid.js';
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} ./examples/${script}`)
      .expect(assert.payload.syntaxError(script, 2, 'Invalid or unexpected token'))
      .end(done);
  });
});
