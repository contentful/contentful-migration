'use strict';

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevTag } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply tag migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(async function () {
    this.timeout(30000);
    environmentId = await createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  });

  after(async function () {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it('aborts 28-create-tag migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/28-create-tag.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.tag.create('sampletag', { name: 'marketing' }))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 28-create-tag migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/28-create-tag.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.tag.create('sampletag', { name: 'marketing' }))
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const tag = await getDevTag(SOURCE_TEST_SPACE, environmentId, 'sampletag');
        expect(tag.name).to.eql('marketing');
        done();
      });
  });

  it('aborts 29-modify-tag migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/29-modify-tag.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.tag.update('sampletag'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });

  it('applies 29-modify-tag migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/29-modify-tag.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.tag.update('sampletag', { name: 'better marketing' }))
      .expect(assert.plans.actions.apply())
      .end(async function () {
        const tag = await getDevTag(SOURCE_TEST_SPACE, environmentId, 'sampletag');
        expect(tag.name).to.eql('better marketing');
        done();
      });
  });

  it('applies delete-tag migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/30-delete-tag.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('Y\n')
      .expect(assert.plans.tag.delete('sampletag'))
      .expect(assert.plans.actions.apply())
      .end(async function () {
        let result;
        try {
          result = await getDevTag(SOURCE_TEST_SPACE, environmentId, 'sampletag');
        } catch (err) {
          expect(err.name).to.eql('NotFound');
        }
        expect(result).to.be.undefined();
        done();
      });
  });
});
