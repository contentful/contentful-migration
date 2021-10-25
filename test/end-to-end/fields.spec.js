'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevContentType } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply field migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('aborts 06-delete-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/06-delete-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('dog', { name: 'Angry dog' }))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 06-delete-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/06-delete-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('dog', { name: 'Angry dog' }))
      .expect(assert.plans.field.delete('postmenBites'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dog');
        expect(contentType.name).to.eql('Angry dog');
        expect(contentType.description).to.eql('Who\'s got mad? He is!');
        expect(contentType.fields.length).to.eql(1);
        done();
      }));
  });

  it('aborts change-field-id migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/change-field-id.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies change-field-id migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/change-field-id.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.field.rename('goodboys', 'aDifferentId'))
      .expect(assert.plans.field.update('aDifferentId', { name: 'ID switching is fun!' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dog');
        expect(contentType.fields[0].id).to.eql('aDifferentId');
        done();
      }));
  });

  it('aborts 07-display-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/07-display-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 07-display-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/07-display-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('food', { name: 'foooood', displayField: 'taste' }))
      .expect(assert.plans.field.create('taste', { type: 'Symbol', name: 'what it tastes like' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'food');
        expect(contentType.name).to.eql('foooood');
        expect(contentType.displayField).to.eql('taste');
        done();
      }));
  });

  it('aborts 08-move-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/08-move-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.update('food'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 08-move-field migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/08-move-field.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.update('food'))
      .expect(assert.plans.field.create('calories', { type: 'Number', name: 'How many calories does it have?' }))
      .expect(assert.plans.field.move('top', 'calories'))
      .expect(assert.plans.field.create('sugar', { type: 'Number', name: 'Amount of sugar' }))
      .expect(assert.plans.field.move('bottom', 'sugar'))
      .expect(assert.plans.field.create('vegan', { type: 'Boolean', name: 'Vegan friendly' }))
      .expect(assert.plans.field.create('producer', { type: 'Symbol', name: 'Food producer' }))
      .expect(assert.plans.field.move('before', 'producer', 'vegan'))
      .expect(assert.plans.field.create('gmo', { type: 'Boolean', name: 'Genetically modified food' }))
      .expect(assert.plans.field.move('after', 'gmo', 'vegan'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'food');
        expect(contentType.fields[0].id).to.eql('calories');
        expect(contentType.fields[1].id).to.eql('taste');
        expect(contentType.fields[2].id).to.eql('producer');
        expect(contentType.fields[3].id).to.eql('vegan');
        expect(contentType.fields[4].id).to.eql('gmo');
        expect(contentType.fields[5].id).to.eql('sugar');
        done();
      }));
  });
});
