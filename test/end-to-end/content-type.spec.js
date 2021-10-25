'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevContentType, getDevTag } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply content-type migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('aborts 01-angry-dog migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/01-angry-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 01-angry-dog migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/01-angry-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dog');
        expect(contentType.name).to.eql('angry dog');
        expect(contentType.description).to.eql('super angry');
        expect(contentType.fields.length).to.eql(1);
        done();
      }));
  });

  it('aborts 02-friendly-dog migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/02-friendly-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 02-friendly-dog migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/02-friendly-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.field.create('goodboys', { type: 'Number', name: 'number of times he has been called a good boy' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dog');
        expect(contentType.name).to.eql('Friendly dog');
        expect(contentType.description).to.eql('Who\'s a good boy? He is!');
        expect(contentType.fields.length).to.eql(2);
        done();
      }));
  });

  it('aborts 03-long-example migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/03-long-example.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('person', { name: 'Person' }))
      .expect(assert.plans.contentType.create('animal', { name: 'Animal' }))
      .expect(assert.plans.contentType.update('person'))
      .expect(assert.plans.contentType.update('animal'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 03-long-example migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/03-long-example.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.create('person', { name: 'Person' }))
      .expect(assert.plans.field.create('age', { type: 'Number', name: 'Age', required: true }))
      .expect(assert.plans.field.create('fullName', { type: 'Symbol', name: 'Full name', required: true, localized: true }))
      .expect(assert.plans.contentType.create('animal', { name: 'Animal' }))
      .expect(assert.plans.field.create('species', { type: 'Symbol', name: 'The species of the animal', required: true }))
      .expect(assert.plans.field.create('isFurry', { type: 'Boolean', name: 'Is this a furry animal', required: false }))
      .expect(assert.plans.contentType.update('person'))
      .expect(assert.plans.field.create('pet', { type: 'Link', name: 'Their pet', linkType: 'Entry', required: false }))
      .expect(assert.plans.contentType.update('animal'))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'The name of the animal', required: true, localized: true }))
      .expect(assert.plans.tag.create('longexampletag', { name: 'long example marketing' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentTypePerson = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'person');
        const contentTypeAnimal = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'animal');
        const tag = yield getDevTag(SOURCE_TEST_SPACE, environmentId, 'longexampletag');

        expect(contentTypePerson.name).to.eql('Person');
        expect(contentTypePerson.description).to.eql('A content type for a person');
        expect(contentTypePerson.fields.length).to.eql(3);
        expect(contentTypeAnimal.name).to.eql('Animal');
        expect(contentTypeAnimal.description).to.eql('An animal');
        expect(contentTypeAnimal.fields.length).to.eql(3);
        expect(tag.name).to.eql('long example marketing');
        done();
      }));
  });

  it('applies delete-content-type migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/delete-content-type.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.delete('dog'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        let result;
        try {
          result = yield getDevContentType(SOURCE_TEST_SPACE, environmentId, 'dog');
        } catch (err) {
          expect(err.name).to.eql('NotFound');
        }
        expect(result).to.be.undefined();
        done();
      }));
  });
});
