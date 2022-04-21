'use strict'

const Bluebird = require('bluebird')
const co = Bluebird.coroutine

const {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevEditorInterface
} = require('../helpers/client')

const uuid = require('uuid')
const cli = require('./cli')
const assert = require('./assertions')
const { expect } = require('chai')
const ENVIRONMENT_ID = uuid.v4()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('apply editor layout migration examples', function () {
  this.timeout(30000)
  let environmentId

  before(
    co(function* () {
      this.timeout(30000)
      environmentId = yield createDevEnvironment(SOURCE_TEST_SPACE, ENVIRONMENT_ID)
    })
  )

  after(
    co(function* () {
      yield deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId)
    })
  )

  it('aborts 35-create-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/35-create-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.create('page', { name: 'Page' }))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'Internal name' }))
      .expect(assert.plans.field.create('title', { type: 'Symbol', name: 'Page title' }))
      .expect(assert.plans.editorLayout.create('page'))
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.createFieldGroup('content'))
      .expect(assert.plans.editorLayout.updateFieldGroup('content', { name: 'Content' }))
      .expect(
        assert.plans.editorLayout.updateGroupControls('content', 'builtin', 'topLevelTab', {
          helpText: 'Main content'
        })
      )
      .expect(assert.plans.editorLayout.createFieldGroup('settings'))
      .expect(assert.plans.editorLayout.updateFieldGroup('settings', { name: 'Settings' }))
      .expect(assert.plans.editorLayout.createFieldGroupInParent('seo', 'settings'))
      .expect(assert.plans.editorLayout.updateFieldGroup('seo', { name: 'SEO' }))
      .expect(
        assert.plans.editorLayout.updateGroupControls('seo', 'builtin', 'fieldset', {
          helpText: 'Search related fields',
          collapsedByDefault: false
        })
      )
      .expect(assert.plans.editorLayout.createFieldGroup('metadata'))
      .expect(assert.plans.editorLayout.updateFieldGroup('metadata', { name: 'Metadata' }))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 35-create-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/35-create-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.contentType.create('page', { name: 'Page' }))
      .expect(assert.plans.field.create('name', { type: 'Symbol', name: 'Internal name' }))
      .expect(assert.plans.field.create('title', { type: 'Symbol', name: 'Page title' }))
      .expect(assert.plans.editorLayout.create('page'))
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.createFieldGroup('content'))
      .expect(assert.plans.editorLayout.updateFieldGroup('content', { name: 'Content' }))
      .expect(
        assert.plans.editorLayout.updateGroupControls('content', 'builtin', 'topLevelTab', {
          helpText: 'Main content'
        })
      )
      .expect(assert.plans.editorLayout.createFieldGroup('settings'))
      .expect(assert.plans.editorLayout.updateFieldGroup('settings', { name: 'Settings' }))
      .expect(assert.plans.editorLayout.createFieldGroupInParent('seo', 'settings'))
      .expect(assert.plans.editorLayout.updateFieldGroup('seo', { name: 'SEO' }))
      .expect(
        assert.plans.editorLayout.updateGroupControls('seo', 'builtin', 'fieldset', {
          helpText: 'Search related fields',
          collapsedByDefault: false
        })
      )
      .expect(assert.plans.editorLayout.createFieldGroup('metadata'))
      .expect(assert.plans.editorLayout.updateFieldGroup('metadata', { name: 'Metadata' }))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'page'
          )
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
          ])
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
          ])
          done()
        })
      )
  })

  it('aborts 36-delete-editor-layout-tab migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/36-delete-editor-layout-tab.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.deleteFieldGroup('settings'))
      .expect(assert.plans.editorLayout.createFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.updateFieldGroup('toBeDeleted', { name: 'To be deleted' }))
      .expect(assert.plans.editorLayout.deleteFieldGroup('toBeDeleted'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 36-delete-editor-layout-tab migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/36-delete-editor-layout-tab.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.deleteFieldGroup('settings'))
      .expect(assert.plans.editorLayout.createFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.updateFieldGroup('toBeDeleted', { name: 'To be deleted' }))
      .expect(assert.plans.editorLayout.deleteFieldGroup('toBeDeleted'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'page'
          )
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
          ])
          done()
        })
      )
  })

  it('aborts 37-delete-editor-layout-field-set migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/37-delete-editor-layout-field-set.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.createFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.updateFieldGroup('toBeDeleted', { name: 'To be deleted' }))
      .expect(assert.plans.editorLayout.deleteFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.deleteFieldGroup('seo'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 37-delete-editor-layout-field-set migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/37-delete-editor-layout-field-set.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.createFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.updateFieldGroup('toBeDeleted', { name: 'To be deleted' }))
      .expect(assert.plans.editorLayout.deleteFieldGroup('toBeDeleted'))
      .expect(assert.plans.editorLayout.deleteFieldGroup('seo'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'page'
          )
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
          ])
          done()
        })
      )
  })

  it('aborts 38-change-field-group-id-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/38-change-field-group-id-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.changeFieldGroupId('metadata', 'info'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 38-change-field-group-id-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/38-change-field-group-id-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorLayout.update('page'))
      .expect(assert.plans.editorLayout.changeFieldGroupId('metadata', 'info'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'page'
          )
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
          ])
          done()
        })
      )
  })

  it('aborts 39-delete-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/39-delete-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorLayout.delete('page'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 39-delete-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/39-delete-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorLayout.delete('page'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'page'
          )
          expect(editorInterfaces.editorLayout).to.be.undefined()
          expect(editorInterfaces.groupControls).to.be.undefined()
          done()
        })
      )
  })

  it('aborts 40-move-field-in-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/40-move-field-in-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.contentType.create('mytype', { name: 'My type' }))
      .expect(assert.plans.field.create('fieldA', { type: 'Symbol', name: 'Field A' }))
      .expect(assert.plans.field.create('fieldB', { type: 'Symbol', name: 'Field B' }))
      .expect(assert.plans.field.create('fieldC', { type: 'Symbol', name: 'Field C' }))
      .expect(assert.plans.field.create('fieldD', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.field.create('fieldE', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.editorLayout.create('mytype'))
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.editorLayout.createFieldGroup('firsttab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('firsttab', { name: 'First Tab' }))
      .expect(assert.plans.editorLayout.createFieldGroup('secondtab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('secondtab', { name: 'Second Tab' }))
      .expect(assert.plans.editorLayout.createFieldGroupInParent('fieldset', 'secondtab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('fieldset', { name: 'Field Set' }))
      .expect(
        assert.plans.editorLayout.moveFieldToTheFirstPositionInFieldGroup('fieldA', 'fieldset')
      )
      .expect(assert.plans.editorLayout.moveFieldBeforeFieldGroup('fieldB', 'fieldset'))
      .expect(assert.plans.editorLayout.moveFieldAfterField('fieldC', 'fieldA'))
      .expect(assert.plans.editorLayout.moveFieldBeforeField('fieldE', 'fieldC'))
      .expect(assert.plans.editorLayout.moveFieldToTheLastPositionInFieldGroup('fieldE'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 40-move-field-in-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/40-move-field-in-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.contentType.create('mytype', { name: 'My type' }))
      .expect(assert.plans.field.create('fieldA', { type: 'Symbol', name: 'Field A' }))
      .expect(assert.plans.field.create('fieldB', { type: 'Symbol', name: 'Field B' }))
      .expect(assert.plans.field.create('fieldC', { type: 'Symbol', name: 'Field C' }))
      .expect(assert.plans.field.create('fieldD', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.field.create('fieldE', { type: 'Symbol', name: 'Field D' }))
      .expect(assert.plans.editorLayout.create('mytype'))
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(assert.plans.editorLayout.createFieldGroup('firsttab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('firsttab', { name: 'First Tab' }))
      .expect(assert.plans.editorLayout.createFieldGroup('secondtab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('secondtab', { name: 'Second Tab' }))
      .expect(assert.plans.editorLayout.createFieldGroupInParent('fieldset', 'secondtab'))
      .expect(assert.plans.editorLayout.updateFieldGroup('fieldset', { name: 'Field Set' }))
      .expect(
        assert.plans.editorLayout.moveFieldToTheFirstPositionInFieldGroup('fieldA', 'fieldset')
      )
      .expect(assert.plans.editorLayout.moveFieldBeforeFieldGroup('fieldB', 'fieldset'))
      .expect(assert.plans.editorLayout.moveFieldAfterField('fieldC', 'fieldA'))
      .expect(assert.plans.editorLayout.moveFieldBeforeField('fieldE', 'fieldC'))
      .expect(assert.plans.editorLayout.moveFieldToTheLastPositionInFieldGroup('fieldE'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'mytype'
          )
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
          ])
          done()
        })
      )
  })

  it('aborts 41-move-field-in-existing-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/41-move-field-in-existing-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('n\n')
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(
        assert.plans.editorLayout.moveFieldToTheFirstPositionInFieldGroup('fieldA', 'firsttab')
      )
      .expect(assert.plans.editorLayout.moveFieldAfterFieldGroup('fieldB', 'fieldset'))
      .expect(assert.plans.editorLayout.moveFieldAfterField('fieldC', 'fieldB'))
      .expect(assert.plans.editorLayout.moveFieldBeforeField('fieldE', 'fieldC'))
      .expect(assert.plans.editorLayout.moveFieldToTheLastPositionInFieldGroup('fieldE'))
      .expect(assert.plans.actions.abort())
      .end(done)
  })
  it('applies 41-move-field-in-existing-editor-layout migration', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/41-move-field-in-existing-editor-layout.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .expect(assert.plans.editorLayout.update('mytype'))
      .expect(
        assert.plans.editorLayout.moveFieldToTheFirstPositionInFieldGroup('fieldA', 'firsttab')
      )
      .expect(assert.plans.editorLayout.moveFieldAfterFieldGroup('fieldB', 'fieldset'))
      .expect(assert.plans.editorLayout.moveFieldAfterField('fieldC', 'fieldB'))
      .expect(assert.plans.editorLayout.moveFieldBeforeField('fieldE', 'fieldC'))
      .expect(assert.plans.editorLayout.moveFieldToTheLastPositionInFieldGroup('fieldE'))
      .expect(assert.plans.actions.apply())
      .end(
        co(function* () {
          const editorInterfaces = yield getDevEditorInterface(
            SOURCE_TEST_SPACE,
            environmentId,
            'mytype'
          )
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
          ])
          done()
        })
      )
  })
})
