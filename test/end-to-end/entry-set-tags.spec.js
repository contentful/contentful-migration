'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, makeRequest } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply set tags transformation', function () {
  this.timeout(30000);
  let environmentId;
  let request;

  before(async function () {
    this.timeout(30000);
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, environmentId);
    await request({
      method: 'PUT',
      url: '/content_types/article',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'blog post',
        fields: [
          {
            name: 'title',
            id: 'title',
            type: 'Symbol'
          }
        ]
      }
    });

    await request({
      method: 'PUT',
      url: '/content_types/article/published',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'PUT',
      url: '/tags/new',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'new',
        sys: { id: 'new' }
      }
    });

    await request({
      method: 'PUT',
      url: '/tags/old',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'old',
        sys: { id: 'old' }
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'article'
      },
      data: {
        fields: { title: { 'en-US': 'hello!' } },
        metadata: {
          tags: [
            {
              sys: {
                id: 'old',
                type: 'Link',
                linkType: 'Tag'
              }
            }
          ]
        }
      }
    });
  });

  after(async function () {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it('aborts 31-set-tags-for-entries', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/31-set-tags-for-entries.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.entriesSetTags('article'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 31-set-tags-for-entries', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/31-set-tags-for-entries.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const blogEntries = await request({
          method: 'GET',
          url: '/entries?content_type=article',
          headers: {
            'X-Contentful-Beta-Dev-Spaces': 1
          }
        });

        expect(blogEntries.items[0].fields.title).to.exist();

        const blogEntriesWithoutSysAndFields = blogEntries.items.map(i => _.omit(i, ['sys', 'fields']));
        expect(blogEntriesWithoutSysAndFields[0].metadata.tags.length).to.eql(2);
        expect(blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'new')).to.eql(true);
        expect(blogEntriesWithoutSysAndFields[0].metadata.tags.some((tag) => tag.sys.id === 'old')).to.eql(true);


        done();
      });
  });
});
