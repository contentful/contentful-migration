'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');
const sinon = require('sinon');

const migrationSteps = require('../../../src/lib/migration-steps').migration;
const IntentList = require('../../../src/lib/intent-list').default;
const contentTypesInPlan = require('../../../src/lib/content-types-in-plan').fetcher;

const co = Bluebird.coroutine;

describe('Content Type fetcher', function () {
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
    const sliced = intentList.slice();
    const raw = sliced.map((list) => list.toRaw());

    const contentTypes = yield contentTypesInPlan(raw, request);

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
