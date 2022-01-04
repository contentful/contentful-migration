const cm = require('./src');

const options = {
  migrationFunction: function (migration) {
    const create = false;
    const ct = migration.editContentType(`created_by_migration_98`);

    const editorLayout = create ? ct.createEditorLayout() : ct.editEditorLayout();

    if (create) {
      editorLayout.createFieldGroup('content', {
        name: 'Content'
      });

      editorLayout.createFieldGroup('second', {
        name: '2nd'
      });
    }

    // // move a field within it's fieldset
    // editorLayout.moveField(":fieldId:").toTheTopOfFieldGroup()
    // editorLayout.moveField(":fieldId:").toTheBottomOfFieldGroup()

    // // move a field arbitrarily among other items
    // editorLayout.moveField(":fieldId:").toTheTopOfFieldGroup(':destFieldGroupId:')
    // editorLayout.moveField(":fieldId:").toTheBottomOfFieldGroup(':destFieldGroupId:')

    // editorLayout.moveField(":fieldId:").afterField(':pivotFieldId:')
    // editorLayout.moveField(":fieldId:").beforeField(':pivotFieldId:')
    // editorLayout.moveField(":fieldId:").afterFieldGroup(':pivotGroupId:')
    // editorLayout.moveField(":fieldId:").beforeFieldGroup(':pivotGroupId:')
    editorLayout.moveField('title').beforeField('fieldset1');
    // editorLayout.moveField("desc").afterFieldGroup('fieldset1');
  },
  spaceId: 'miz4416392qb',
  accessToken: 'CFPAT-edLhNxb31hODa2gzocnfxuJ77d0CkVEEeUIFQ9zVDpM'
};

cm.runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
