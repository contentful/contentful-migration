'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevContentType } = require('../helpers/client');

const ENVIRONMENT_ID = process.env.TEST_ENVIRONMENT;
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('apply validations migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('aborts 09-validate-validations migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/09-validate-validations.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('dieatary-food'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 09-validate-validations migration', function (done) {
    const expectedFields = [
      {
        id: 'name',
        name: 'name of the food',
        type: 'Symbol',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [{
          unique: true
        }]
      },
      {
        id: 'calories',
        name: 'amount of calories the food contains',
        type: 'Number',
        required: false,
        disabled: false,
        localized: false,
        omitted: false,
        validations: [{
          range: {
            max: 500
          }
        }]
      }
    ];

    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/09-validate-validations.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('dieatary-food', { name: 'Dieatary Food', description: 'Food with up to 500 calories' }))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'name of the food', validations: [{ unique: true }] }))
      .expect(assert.plans.field.create('calories', { type: 'Number', name: 'amount of calories the food contains', validations: [{ range: { 'max': 500 } }] }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dieatary-food');
        expect(contentType.fields).to.eql(expectedFields);
        done();
      }));
  });
});
