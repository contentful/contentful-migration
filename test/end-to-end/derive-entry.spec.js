'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getEntries, makeRequest } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply derive entry transformation', function () {
  this.timeout(30000);
  let environmentId;
  let request;

  before(async function () {
    this.timeout(30000);
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
    request = makeRequest.bind(null, SOURCE_TEST_SPACE, environmentId);
    await request({
      method: 'PUT',
      url: '/content_types/dog',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1
      },
      data: {
        name: 'Angry dog',
        fields: [
          { name: 'Name', type: 'Symbol', id: 'name' },
          { name: 'Breed', type: 'Symbol', id: 'breed' },
          { name: 'Owner', type: 'Symbol', id: 'owner' }
        ]
      }
    });

    await request({
      method: 'PUT',
      url: '/content_types/dog/published',
      headers: {
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Content-Type': 'dog'
      },
      data: {
        fields: {
          name: { 'en-US': 'Moses' },
          breed: { 'en-US': 'Poodle' },
          owner: { 'en-US': 'Contentful Office' }
        }
      }
    });
    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Content-Type': 'dog'
      },
      data: {
        fields: {
          name: { 'en-US': 'Luna' },
          breed: { 'en-US': 'Something' },
          owner: { 'en-US': 'Contentful Office' }
        }
      }
    });
  });

  after(async function () {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it('aborts 15-derive-entry', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/15-derive-entry-n-to-1.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.entriesDerive('dog'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 15-derive-entry', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/15-derive-entry-n-to-1.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const sortFn = (entry) => entry.fields.name['en-US'];

        const dogs = await getEntries(SOURCE_TEST_SPACE, environmentId, 'dog');
        const owners = await getEntries(SOURCE_TEST_SPACE, environmentId, 'owner');
        const dogsEntriesWithoutSysAndMetadata = _.sortBy(
          dogs.items.map(i => _.omit(i, ['sys', 'metadata'])),
          sortFn
        );
        const ownersEntriesWithoutSysAndMetadata = owners.items
          .map(i => _.omit(i, ['sys', 'metadata']));

        const expectedDogs = _.sortBy([
          {
            fields: {
              name: { 'en-US': 'Moses' },
              breed: { 'en-US': 'Poodle' },
              owner: { 'en-US': { sys: { id: 'contentful-office', linkType: 'Entry', type: 'Link' } } }
            }
          },
          {
            fields: {
              name: { 'en-US': 'Luna' },
              breed: { 'en-US': 'Something' },
              owner: { 'en-US': { sys: { id: 'contentful-office', linkType: 'Entry', type: 'Link' } } }
            }
          }
        ], sortFn);

        expect(dogsEntriesWithoutSysAndMetadata).to.eql(expectedDogs);

        const expectedOwners = [
          {
            fields: {
              firstName: { 'en-US': 'Contentful' },
              lastName: { 'en-US': 'Office' }
            }
          }
        ];
        expect(ownersEntriesWithoutSysAndMetadata.length).to.eql(1);
        expect(ownersEntriesWithoutSysAndMetadata).to.eql(expectedOwners);
        done();
      });
  });
});
