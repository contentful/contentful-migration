'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevContentType, getEntries, createEntry } = require('../helpers/client');
const uuid = require('uuid');

const ENVIRONMENT_ID = uuid.v4();
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('run batch examples', function () {
  this.timeout(30000);
  let environmentId;
  let tmpDir;

  if (!fs.copyFileSync) {
    fs.copyFileSync = (srcFile, destFile, encoding) => {
      const content = fs.readFileSync(srcFile, encoding);
      fs.writeFileSync(destFile, content, encoding);
    };
  }

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);

    tmpDir = fs.mkdtempSync('directory.spec.js');
    fs.copyFileSync('./examples/01-angry-dog.js', path.join(tmpDir, '01-angry-dog.js'));
    fs.copyFileSync('./examples/02-friendly-dog.js', path.join(tmpDir, '02-friendly-dog.js'));
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
    fs.readdirSync(tmpDir).forEach(f => {
      fs.unlinkSync(path.join(tmpDir, f));
    });
    fs.rmdirSync(tmpDir);
  }));

  it('applies all migrations when given a directory', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} -y -p batch ${tmpDir}`)
      .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
      .expect(assert.plans.field.create('goodboys', { type: 'Number', name: 'number of times he has been called a good boy' }))
      .end(co(function * () {
        const contentTypeMigrationHistory = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'migrationHistory');
        expect(contentTypeMigrationHistory.name).to.equal('Migration History');

        const migrationHistoryEntries = yield getEntries(SOURCE_TEST_SPACE, environmentId, 'migrationHistory');
        expect(migrationHistoryEntries.total).to.equal(2);

        const items = migrationHistoryEntries.items.map(i => i.fields);
        expect(items[0].completed).to.not.be.undefined();
        expect(items[1].completed).to.not.be.undefined();

        const names = items.map(i => i.migrationName['en-US']);
        expect(names).to.include('01-angry-dog.js');
        expect(names).to.include('02-friendly-dog.js');

        done();
      }));
  });

  it('applies only migrations which have not already been run', function (done) {
    fs.copyFileSync('./examples/03-long-example.js', path.join(tmpDir, '03-long-example.js'));

    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} -y -p batch ${tmpDir}`)
      .expect(assert.history.previouslyCompleted())
      .expect(assert.plans.contentType.create('person', { name: 'Person' }))
      .end(co(function * () {
        const migrationHistoryEntries = yield getEntries(SOURCE_TEST_SPACE, environmentId, 'migrationHistory');
        expect(migrationHistoryEntries.total).to.equal(3);

        const items = migrationHistoryEntries.items.map(i => i.fields);
        expect(items[0].completed).to.not.be.undefined();
        expect(items[1].completed).to.not.be.undefined();
        expect(items[2].completed).to.not.be.undefined();

        const names = items.map(i => i.migrationName['en-US']);
        expect(names).to.include('01-angry-dog.js');
        expect(names).to.include('02-friendly-dog.js');
        expect(names).to.include('03-long-example.js');

        done();
      }));
  });

  it('bails when a migration was partially applied', function (done) {
    fs.copyFileSync('./examples/07-display-field.js', path.join(tmpDir, '07-display-field.js'));

    const failedDate = new Date(Date.now());
    createEntry(SOURCE_TEST_SPACE, environmentId, 'migrationHistory', {
      fields: {
        migrationName: { 'en-US': '07-display-field.js' },
        started: { 'en-US': failedDate.toISOString() }
      }
    }).then(() => {
      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} -y -p batch ${tmpDir}`)
        .expect(assert.history.failedBeforeCompletion(failedDate))
        .end(co(function * () {
          const migrationHistoryEntries = yield getEntries(SOURCE_TEST_SPACE, environmentId, 'migrationHistory');
          expect(migrationHistoryEntries.total).to.equal(4);

          const item = migrationHistoryEntries.items.map(i => i.fields)
            .find(i => i.migrationName['en-US'] === '07-display-field.js');
          expect(item.completed).to.be.undefined();

          try {
            yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'food');
            expect.fail(0, 1, 'Expect content type "food" to not exist');
          } catch (e) {
            // OK
          }

          done();
        }));
    });
  });
});
