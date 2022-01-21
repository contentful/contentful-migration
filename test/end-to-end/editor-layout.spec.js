'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

const { createDevEnvironment, deleteDevEnvironment, getDevEditorInterface } = require('../helpers/client');

const uuid = require('uuid');
const cli = require('./cli');
const assert = require('./assertions');
const { expect } = require('chai');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply editor layout migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(co(function * () {
    this.timeout(30000);
    environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID);
  }));

  after(co(function * () {
    yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  }));

  it('aborts xx-create-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-create-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('page', { name: 'Page' }))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'Internal name' }))
      .expect(assert.plans.field.create('title', { type: 'Symbol', name: 'Page title' }))
      .expect(assert.plans.editorLayout.create('page'))
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-create-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-create-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('page', { name: 'Page' }))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'Internal name' }))
      .expect(assert.plans.field.create('title', { type: 'Symbol', name: 'Page title' }))
      .expect(assert.plans.editorLayout.create('page'))
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'page');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            groupId: 'content',
            name: 'Content',
            items: [{ fieldId: 'name' }, { fieldId: 'title' }]
          },
          {
            groupId: 'settings',
            name: 'Settings',
            items: [{ groupId: 'seo', name: 'SEO', items: [] }]
          },
          {
            groupId: 'metadata',
            name: 'Metadata',
            items: []
          }
        ]);
        expect(editorInterfaces.groupControls).to.eql([
          {
            groupId: 'content',
            widgetId: 'topLevelTab',
            widgetNamespace: 'builtin',
            settings: {
              helpText: 'Main content'
            }
          },
          {
            groupId: 'settings',
            widgetId: 'topLevelTab',
            widgetNamespace: 'builtin'
          },
          {
            groupId: 'seo',
            widgetId: 'fieldset',
            widgetNamespace: 'builtin',
            settings: {
              helpText: 'Search related fields',
              collapsedByDefault: false
            }
          },
          {
            groupId: 'metadata',
            widgetId: 'topLevelTab',
            widgetNamespace: 'builtin'
          }
        ]);
        done();
      }));
  });

  it('aborts xx-delete-editor-layout-tab migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout-tab.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorLayout.deleteFieldGroup('page', 'settings'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-delete-editor-layout-tab migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout-tab.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorLayout.deleteFieldGroup('page', 'settings'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'page');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            groupId: 'content',
            name: 'Content',
            items: [
              { fieldId: 'name' },
              { fieldId: 'title' },
              { groupId: 'seo', name: 'SEO', items: [] }
            ]
          },
          {
            groupId: 'metadata',
            name: 'Metadata',
            items: []
          }
        ]);
        done();
      }));
  });

  it('aborts xx-delete-editor-layout-field-set migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout-field-set.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-delete-editor-layout-field-set migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout-field-set.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'page');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            groupId: 'content',
            name: 'Content',
            items: [{ fieldId: 'name' }, { fieldId: 'title' }]
          },
          {
            groupId: 'metadata',
            name: 'Metadata',
            items: []
          }
        ]);
        done();
      }));
  });

  it('aborts xx-change-field-group-id-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-change-field-group-id-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-change-field-group-id-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-change-field-group-id-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'page');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            groupId: 'content',
            name: 'Content',
            items: [{ fieldId: 'name' }, { fieldId: 'title' }]
          },
          {
            groupId: 'info',
            name: 'Metadata',
            items: []
          }
        ]);
        done();
      }));
  });

  it('aborts xx-delete-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorLayout.delete('page'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-delete-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-delete-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorLayout.delete('page'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'page');
        expect(editorInterfaces.editorLayout).to.be.undefined();
        expect(editorInterfaces.groupControls).to.be.undefined();
        done();
      }));
  });

  it('aborts xx-move-field-in-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-move-field-in-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.contentType.create('mytype', { name: 'My type' }))
      .expect(assert.plans.field.create('fieldA', { type: 'Symbol', name: 'Field A' }))
      .expect(assert.plans.field.create('fieldB', { type: 'Symbol', name: 'Field B' }))
      .expect(assert.plans.field.create('fieldC', { type: 'Symbol', name: 'Field C' }))
      .expect(assert.plans.field.create('fieldD', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.field.create('fieldE', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.editorLayout.create('mytype'))
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-move-field-in-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-move-field-in-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.contentType.create('mytype', { name: 'My type' }))
      .expect(assert.plans.field.create('fieldA', { type: 'Symbol', name: 'Field A' }))
      .expect(assert.plans.field.create('fieldB', { type: 'Symbol', name: 'Field B' }))
      .expect(assert.plans.field.create('fieldC', { type: 'Symbol', name: 'Field C' }))
      .expect(assert.plans.field.create('fieldD', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.field.create('fieldE', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.editorLayout.create('mytype'))
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'mytype');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            name: 'First Tab',
            items: [{ fieldId: 'fieldD' }],
            groupId: 'firsttab'
          },
          {
            name: 'Second Tab',
            items: [
              { fieldId: 'fieldB' },
              {
                name: 'Field Set',
                items: [{ fieldId: 'fieldA' }, { fieldId: 'fieldC' }, { fieldId: 'fieldE' }],
                groupId: 'fieldset'
              }
            ],
            groupId: 'secondtab'
          }
        ]);
        done();
      }));
  });

  it('aborts xx-move-field-in-existing-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-move-field-in-existing-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('n\n')
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.actions.abort())
      .end(done);
  });
  it('applies xx-move-field-in-existing-editor-layout migration', function (done) {
    cli()
      .run(`--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/xx-move-field-in-existing-editor-layout.js`)
      .on(/\? Do you want to apply the migration \(Y\/n\)/).respond('y\n')
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.actions.apply())
      .end(co(function * () {
        const editorInterfaces = yield getDevEditorInterface(SOURCE_TEST_SPACE, environmentId, 'mytype');
        expect(editorInterfaces.editorLayout).to.eql([
          {
            name: 'First Tab',
            items: [{ fieldId: 'fieldA' }, { fieldId: 'fieldD' }],
            groupId: 'firsttab'
          },
          {
            name: 'Second Tab',
            items: [
              {
                name: 'Field Set',
                items: [],
                groupId: 'fieldset'
              },
              { fieldId: 'fieldB' },
              { fieldId: 'fieldC' },
              { fieldId: 'fieldE' }
            ],
            groupId: 'secondtab'
          }
        ]);
        done();
      }));
  });
});
