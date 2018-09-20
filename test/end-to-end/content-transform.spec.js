'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getEntries, makeRequest } = require('../helpers/client');
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

const ENVIRONMENT_ID = 'content-transform-env';

describe('apply content transformation', function () {
  this.timeout(30000);
  let environmentId;
  let request;
  before(async function () {
    this.timeout(30000);
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, environmentId);
    await request({
      method: 'PUT',
      url: '/content_types/newsArticle',
      data: {
        name: 'news article',
        fields: [
          {
            name: 'author',
            id: 'author',
            type: 'Symbol'
          },
          {
            name: 'authorCity',
            id: 'authorCity',
            type: 'Symbol'
          },
          {
            name: 'byline',
            id: 'byline',
            type: 'Symbol'
          }
        ]
      }
    });
    await request({
      method: 'PUT',
      url: '/content_types/newsArticle/published',
      headers: {
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Content-Type': 'newsArticle'
      },
      data: {
        fields: {
          'author': { 'en-US': 'Jane Austen' },
          'authorCity': { 'en-US': 'Steventon' }
        }
      }
    });
  });
  after(async function () {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it.only('aborts 12-transform-content', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --proxy 'http://localhost:3333' -rp --environment-id ${environmentId} ./examples/12-transform-content.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.entriesTransform('newsArticle'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 12-transform-content', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --proxy http://localhost:3333 --raw-proxy true --environment-id ${environmentId} ./examples/12-transform-content.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const res = await getEntries(SOURCE_TEST_SPACE, environmentId, 'newsArticle');
        const entriesWithoutSys = res.items.map(i => _.omit(i, 'sys'));

        const expected = [
          {
            fields: {
              author: { 'en-US': 'Jane Austen' },
              authorCity: { 'en-US': 'Steventon' },
              byline: { 'en-US': 'Jane Austen Steventon' }
            }
          }
        ];
        expect(entriesWithoutSys).to.eql(expected);
        done();
      });
  });

  it('applies 14-transform-content-error', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --proxy http://localhost:3333 --raw-proxy true  --environment-id ${environmentId} ./examples/14-transform-content-error.js`)
      .expect(assert.errors.entriesTransform('newsArticle', '1 errors while transforming this content.'))
      .end(done);
  });
});
