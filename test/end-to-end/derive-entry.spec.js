'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevSpace, deleteDevSpace, getEntries, makeRequest } = require('../helpers/client');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('apply derive entry transformation', function () {
  this.timeout(30000);
  let devSpaceId;
  let request;

  before(async function () {
    this.timeout(30000);
    devSpaceId = await createDevSpace(SOURCE_TEST_SPACE, 'migration test dev space');
    request = makeRequest.bind(null, devSpaceId);
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
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Version': 1
      }
    });

    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'dog'
      },
      data: {
        fields: {
          'name': { 'en-US': 'Moses' },
          'breed': { 'en-US': 'Poodle' },
          'owner': { 'en-US': 'Contentful Office' }
        }
      }
    });
    await request({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Beta-Dev-Spaces': 1,
        'X-Contentful-Content-Type': 'dog'
      },
      data: {
        fields: {
          'name': { 'en-US': 'Luna' },
          'breed': { 'en-US': 'Something' },
          'owner': { 'en-US': 'Contentful Office' }
        }
      }
    });
  });

  after(async function () {
    await deleteDevSpace(devSpaceId);
  });

  it('aborts 15-derive-entry', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/15-derive-entry.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.entriesDerive('dog'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 15-derive-entry', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/15-derive-entry.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const sortFn = (entry) => entry.fields.name['en-US'];

        const dogs = await getEntries(devSpaceId, 'dog');
        const owners = await getEntries(devSpaceId, 'owner');
        const dogsEntriesWithoutSys = _.sortBy(dogs.items.map(i => _.omit(i, 'sys')), sortFn);
        const ownersEntriesWithoutSys = owners.items.map(i => _.omit(i, 'sys'));

        const expectedDogs = _.sortBy([
          {
            fields: {
              name: { 'en-US': 'Moses' },
              breed: { 'en-US': 'Poodle' },
              owner: { 'en-US': { 'sys': { 'id': 'contentful-office', 'linkType': 'Entry', 'type': 'Link' } } }
            }
          },
          {
            fields: {
              name: { 'en-US': 'Luna' },
              breed: { 'en-US': 'Something' },
              owner: { 'en-US': { 'sys': { 'id': 'contentful-office', 'linkType': 'Entry', 'type': 'Link' } } }
            }
          }
        ], sortFn);

        expect(dogsEntriesWithoutSys).to.eql(expectedDogs);

        const expectedOwners = [
          {
            fields: {
              firstName: { 'en-US': 'Contentful' },
              lastName: { 'en-US': 'Office' }
            }
          }
        ];
        expect(ownersEntriesWithoutSys.length).to.eql(1);
        expect(ownersEntriesWithoutSys).to.eql(expectedOwners);
        done();
      });
  });
});
