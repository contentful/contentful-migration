const nock = require('nock');
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

module.exports = function (name, options) {
  // options tell us where to store our fixtures
  options = options || {};
  const fixtureFolder = options.fixtureFolder || 'fixtures';
  const fp = path.resolve(__dirname, path.join(fixtureFolder, name + '.js'));
  // `hasFixture` indicates whether the test has fixtures we should read,
  // or doesn't, so we should record and save them.
  // the environment variable `NOCK_RECORD` can be used to force a new recording.
  let hasFixture = parseInt(process.env.NOCK_RECORD) === 1;
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
        const decodedFixtures = fixtures.map(fixture => {
          if (fixture.indexOf('gzip') !== -1) {
            const matches = fixture.match(/reply\(\d{3},\s*"([a-f0-9]+)"/);
            if (matches) {
              const gzipped = matches[1];
              const response = Buffer.from(gzipped, 'hex');
              const decompressed = zlib.gunzipSync(response).toString('utf8');
              fixture = fixture.replace(`"${gzipped}"`, decompressed);
              fixture = fixture.replace(`'Content-Encoding',`, '');
              fixture = fixture.replace(`'gzip',`, '');
            }
            return fixture;
          } else {
            return fixture;
          }
        });
        const text =
          "const nock = require('nock');\n" + decodedFixtures.join('\n');
        fs.writeFile(fp, text, done);
      } else {
        done();
      }
    }
  };
};
