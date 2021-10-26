'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { expect } = require('chai');
const assert = require('./assertions');
const cli = require('./cli');
const { createDevEnvironment, deleteDevEnvironment, getDevEditorInterface } = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply editor-interface migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('aborts 16-change-field-control migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/16-change-field-control.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorInterface.change('blogPost', 'slug', 'slugEditor'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies 16-change-editor-interface migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/16-change-field-control.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorInterface.change('blogPost', 'slug', 'slugEditor'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'blogPost');
        const editorInterface = editorInterfaces.controls[0];
        expect(editorInterface.fieldId).to.eql('slug');
        expect(editorInterface.widgetId).to.eql('slugEditor');
        done();
      }));
  });
});
