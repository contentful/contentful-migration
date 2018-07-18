const nock = require('nock');
const path = require('path');
const fs = require('fs');

module.exports = function (name, options) {
  // options tell us where to store our fixtures
  options = options || {};
  const fixtureFolder = options.fixtureFoldr || 'fixtures';
  const fp = path.resolve(__dirname, path.join(fixtureFolder, name + '.js'));
  // `hasFixture` indicates whether the test has fixtures we should read,
  // or doesn't, so we should record and save them.
  // the environment variable `NOCK_RECORD` can be used to force a new recording.
  let hasFixture = !!process.env.NOCK_RECORD;
  return {
    // starts recording, or ensure the fixtures exist
    before: function () {
      if (!hasFixture) {
        try {
          require(fp);
          hasFixture = true;
        } catch (e) {
          nock.recorder.rec({
            dont_print: true
          });
        }
      } else {
        hasFixture = false;
        nock.recorder.rec({
          dont_print: true
        });
      }
    },
    // saves our recording if fixtures didn't already exist
    after: function (done) {
      if (!hasFixture) {
        const fixtures = nock.recorder.play();
        const text = "var nock = require('nock');\n" + fixtures.join('\n');
        console.log(fp)
        fs.writeFile(fp, text, done);
      } else {
        done();
      }
    }
  };
};
