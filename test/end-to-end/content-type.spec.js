'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevSpace, deleteDevSpace, getDevContentType } = require('./client');

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE;

describe('apply content-type migration examples', function () {
  this.timeout(30000);
  let devSpaceId;

  before(co(function * () {
    this.timeout(30000);
    devSpaceId = yield createDevSpace(SOURCE_TEST_SPACE, 'migration test dev space');
  }));

  after(co(function * () {
    yield deleteDevSpace(devSpaceId);
  }));

  it('aborts 01-angry-dog migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/01-angry-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 01-angry-dog migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/01-angry-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('dog', { name: 'angry dog' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(devSpaceId, 'dog');
        expect(contentType.name).to.eql('angry dog');
        expect(contentType.description).to.eql('super angry');
        expect(contentType.fields.length).to.eql(1);
        done();
      }));
  });

  it('aborts 02-friendly-dog migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/02-friendly-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 02-friendly-dog migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/02-friendly-dog.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.update('dog'))
      .expect(assert.plans.field.create('goodboys', { type: '"Number"', name: '"number of times he has been called a good boy"' }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentType = yield getDevContentType(devSpaceId, 'dog');
        expect(contentType.name).to.eql('Friendly dog');
        expect(contentType.description).to.eql('Who\'s a good boy? He is!');
        expect(contentType.fields.length).to.eql(2);
        done();
      }));
  });

  it('aborts 03-long-example migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/03-long-example.js`)
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
      .run(`--space-id ${devSpaceId} ./examples/03-long-example.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.create('person', { name: 'Person' }))
      .expect(assert.plans.field.create('age', { type: '"Number"', name: '"Age"', required: true }))
      .expect(assert.plans.field.create('fullName', { type: '"Symbol"', name: '"Full name"', required: true, localized: true }))
      .expect(assert.plans.contentType.create('animal', { name: 'Animal' }))
      .expect(assert.plans.field.create('species', { type: '"Symbol"', name: '"The species of the animal"', required: true }))
      .expect(assert.plans.field.create('isFurry', { type: '"Boolean"', name: '"Is this a furry animal"', required: false }))
      .expect(assert.plans.contentType.update('person'))
      .expect(assert.plans.field.create('pet', { type: '"Link"', name: '"Their pet"', linkType: '"Entry"', required: false }))
      .expect(assert.plans.contentType.update('animal'))
      .expect(assert.plans.field.create('name', { type: '"Symbol"', name: '"The name of the animal"', required: true, localized: true }))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const contentTypePerson = yield getDevContentType(devSpaceId, 'person');
        const contentTypeAnimal = yield getDevContentType(devSpaceId, 'animal');

        expect(contentTypePerson.name).to.eql('Person');
        expect(contentTypePerson.description).to.eql('A content type for a person');
        expect(contentTypePerson.fields.length).to.eql(3);
        expect(contentTypeAnimal.name).to.eql('Animal');
        expect(contentTypeAnimal.description).to.eql('An animal');
        expect(contentTypeAnimal.fields.length).to.eql(3);
        done();
      }));
  });

  it('applies delete-content-type migration', function (done) {
    cli()
      .run(`--space-id ${devSpaceId} ./examples/delete-content-type.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.contentType.delete('dog'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        let result;
        try {
          result = yield getDevContentType(devSpaceId, 'dog');
        } catch (err) {
          expect(err.name).to.eql('NotFound');
        }
        expect(result).to.be.undefined();
        done();
      }));
  });
});
