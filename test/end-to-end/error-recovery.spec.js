'use strict';

const assert = require('./assertions');
const cliAsLib = require('./cli-as-lib');

describe('cli-as-lib', () => {
  describe('04-steps-errors.js', function () {
    it('should throw and allow for cleanup code to execute', function (done) {
      this.timeout(10000);

      cliAsLib()
        .run(require.resolve(`../../examples/04-steps-errors.js`))
        .expect(assert.errors.recovery)
        .end(done);
    });
  });
});
