const nock = require('nock');
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

module.exports = function (name, options) {
  // options tell us where to store our fixtures
  options = options || {};
  const fixtureFolder = options.fixtureFoldr || 'fixtures';
  const fp = path.resolve(__dirname, path.join(fixtureFolder, name + '.json'));
  // `hasFixture` indicates whether the test has fixtures we should read,
  // or doesn't, so we should record and save them.
  // the environment variable `NOCK_RECORD` can be used to force a new recording.
  let hasFixture = !!process.env.NOCK_RECORD;
  return {
    // starts recording, or ensure the fixtures exist
    before: function () {
      if (!hasFixture) {
        try {
          nock.load(fp);
          nock.recorder.play()
          hasFixture = true;
        } catch (e) {
          nock.recorder.rec({
            output_objects: true
          });
        }
      } else {
        hasFixture = false;
        nock.recorder.rec({
          output_objects: true
        });
      }
    },
    // saves our recording if fixtures didn't already exist
    after: function (done) {
      if (!hasFixture) {
        let fixtures = nock.recorder.play();
        fixtures = fixtures.map(fixture => {
          const contentEncodingIndex = fixture.rawHeaders.indexOf(
            'Content-Encoding'
          );
          if (
            contentEncodingIndex !== -1 &&
            fixture.rawHeaders[contentEncodingIndex + 1] === 'gzip' &&
            fixture.response !== ''
          ) {
            const response = Buffer.from(fixture.response, 'hex');
            const contents = zlib.gunzipSync(response).toString('utf8');
            fixture.response = JSON.parse(contents);
            fixture.rawHeaders.splice(contentEncodingIndex, 2);
          }
          return fixture;
        });
        const text = JSON.stringify(fixtures);
        fs.writeFile(fp, text, done);
      } else {
        done();
      }
    }
  };
};
