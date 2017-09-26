'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');
const sinon = require('sinon');

const migrationPlan = require('../../../lib/migration-chunks');
const migrationSteps = require('../../../lib/migration-steps');
const contentTypesInPlan = require('../../../lib/content-types-in-plan');

const co = Bluebird.coroutine;

describe('Content Type fetcher', function () {
  it('fetches all the Content Types in the plan', co(function * () {
    const steps = yield migrationSteps(function up (migration) {
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

    const plan = migrationPlan(steps);
    const contentTypes = yield contentTypesInPlan(plan, request);

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
