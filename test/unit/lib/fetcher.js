'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');
const sinon = require('sinon');

const migrationSteps = require('../../../src/lib/migration-steps').migration;
const IntentList = require('../../../src/lib/intent-list').default;
const Fetcher = require('../../../src/lib/fetcher').default;

const co = Bluebird.coroutine;

describe('Fetcher', function () {
  it('adds entries info to content types', co(function * () {
    const intents = yield migrationSteps(function up (migration) {
      migration.deleteContentType('foo');
      migration.deleteContentType('bar');
    });


    const request = sinon.stub();
    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=foo'
      })
      .resolves({ items: ['item', 'item'] });

    request
      .withArgs({
        method: 'GET',
        url: '/entries?sys.contentType.sys.id=bar'
      })
      .resolves({ items: [] });

    const intentList = new IntentList(intents);
    const packages = intentList.toPackages();

    const raw = packages.map((pack) => pack.toRawSteps());

    const contentTypes = [
      { id: 'foo' },
      { id: 'bar' }
    ];
    const fetcher = new Fetcher(request);
    const contentTypesWithEntryInfo = yield fetcher.checkContentTypesForDeletedCts(raw, contentTypes);

    expect(contentTypesWithEntryInfo).to.eql([
      {
        id: 'foo',
        hasEntries: true
      },
      {
        id: 'bar'
      }
    ]);
  }));
  it('fetches all the Content Types in the plan', co(function * () {
    const intents = yield migrationSteps(function up (migration) {
      const person = migration.createContentType('person', {
        name: 'bar',
        description: 'A content type for a person'
      });

      person.createField('name', {
        name: 'Name',
        type: 'Symbol'
      });

      migration.editContentType('dog', {
        name: 'Doggo',
        description: 'A shepard dog'
      });

      migration.editContentType('cat', {
        name: 'Cat',
        description: 'The trump of the animal world'
      });

      migration.deleteContentType('dog');
      migration.deleteContentType('plant');
    });

    const request = sinon.stub();

    request.resolves({
      items: [
        {
          name: 'Person',
          description: 'Someone like you',
          fields: []
        },
        {
          name: 'A very goodboy',
          description: 'This is the best goodboy',
          fields: [
            {
              id: 'name',
              name: 'Name',
              type: 'Number'
            }
          ]
        },
        {
          name: 'Cat',
          description: 'The trump of the animal world',
          fields: []
        },
        {
          name: 'Plant',
          description: 'A plant!',
          fields: []
        }
      ]
    });

    const intentList = new IntentList(intents);
    const packages = intentList.toPackages();

    const raw = packages.map((pack) => pack.toRawSteps());

    const fetcher = new Fetcher(request);
    const contentTypes = yield fetcher.getContentTypesInChunks(raw);

    expect(request).to.have.been.calledWith({
      method: 'GET',
      url: '/content_types?sys.id[in]=person,dog,cat,plant'
    });
    expect(contentTypes).to.eql([
      {
        name: 'Person',
        description: 'Someone like you',
        fields: []
      },
      {
        name: 'A very goodboy',
        description: 'This is the best goodboy',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Number'
          }
        ]
      },
      {
        name: 'Cat',
        description: 'The trump of the animal world',
        fields: []
      },
      {
        name: 'Plant',
        description: 'A plant!',
        fields: []
      }
    ]);
  }));
});
