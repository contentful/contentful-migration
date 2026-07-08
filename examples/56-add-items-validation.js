module.exports = function (migration) {
  migration.createContentType('contentModelA', {
    name: 'Content Model A',
    description: 'A content model for addItemsValidation'
  })

  migration.createContentType('contentModelB', {
    name: 'Content Model B',
    description: 'B content model for addItemsValidation'
  })

  migration.createContentType('contentModelC', {
    name: 'Content Model C',
    description: 'C content model for addItemsValidation'
  })

  const testModel = migration.createContentType('testModel', {
    name: 'Test Model',
    description: 'A test model for addItemsValidation'
  })

  testModel.createField('name').name('Name').type('Symbol').required(true)

  testModel
    .createField('tags')
    .name('Tags')
    .type('Array')
    .items({
      type: 'Symbol'
    })
    .addItemsValidation([{ unique: true }, { size: { min: 1, max: 5 } }])

  testModel
    .createField('skills')
    .name('Skills')
    .type('Array')
    .items({
      type: 'Symbol'
    })
    .addItemsValidation([{ size: { min: 1 } }])

  testModel
    .createField('relatedEntries')
    .name('Related Entries')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry'
    })
    .addItemsValidation([{ linkContentType: ['contentModelA', 'contentModelB'] }])
}
