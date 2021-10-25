'use strict';

const { expect } = require('chai');
const cli = require('./cli');
const {
  createDevEnvironment,
  deleteDevEnvironment,
  getDevEditorInterface
} = require('../helpers/client');

const uuid = require('uuid');
const ENVIRONMENT_ID = uuid.v4();

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID;

describe('apply entry extension migration examples', function () {
  this.timeout(30000);
  let environmentId;

  before(async () => {
    this.timeout(30000);
    environmentId = await createDevEnvironment(
      SOURCE_TEST_SPACE,
      ENVIRONMENT_ID
    );
  });

  after(async () => {
    await deleteDevEnvironment(SOURCE_TEST_SPACE, environmentId);
  });

  it('migrates the editor with 25-configure-entry-editor.js', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/25-configure-entry-editor.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .end(async () => {
        const editorInterfaces = await getDevEditorInterface(
          SOURCE_TEST_SPACE,
          environmentId,
          'customEntryEditor_v5'
        );
        const editor = editorInterfaces.editor;


        expect(editor).to.eql({
          settings: {},
          widgetId: 'customEntryEditor_v5',
          widgetNamespace: 'extension'
        });
        done();
      });
  });

  it('migrates the editor with 26-reset-entry-editor.js', function (done) {
    cli()
      .run(
        `--space-id ${SOURCE_TEST_SPACE} --environment-id ${environmentId} ./examples/26-reset-entry-editor.js`
      )
      .on(/\? Do you want to apply the migration \(Y\/n\)/)
      .respond('y\n')
      .end(async () => {
        const editorInterfaces = await getDevEditorInterface(
          SOURCE_TEST_SPACE,
          environmentId,
          'resetEntryEditor_v5'
        );
        const editor = editorInterfaces.editor;
        expect(editor).to.eql(undefined);
        done();
      });
  });
});
