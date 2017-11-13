'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevSpace, deleteDevSpace, getEntries, makeRequest } = require('../helpers/client');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe.only('apply content transformation', function () {
  this.timeout(30000);
  let devSpaceId;
  let request;

  before(async function () {
    this.timeout(30000);
    devSpaceId = await createDevSpace(SOURCE_TEST_SPACE, 'migration test dev space');
    request = makeRequest.bind(null, devSpaceId);
    await request({
      method: 'PUT',
      url: '/content_types/newsArticle',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
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
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
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
    await deleteDevSpace(devSpaceId);
  });

  it('aborts 12-transform-content', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/12-transform-content.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.entriesTransform('newsArticle'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 12-transform-content', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/12-transform-content.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const res = await getEntries(devSpaceId, 'newsArticle');
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
      .run(`--space-id ${devSpaceId} ./examples/14-transform-content-error.js`)
      .expect(assert.errors.entriesTransform('newsArticle', 'Error: boom'));
    done();
  });
});
