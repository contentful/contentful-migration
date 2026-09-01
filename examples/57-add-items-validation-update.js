module.exports = function (migration) {
  const testModel = migration.editContentType('testModel')

  // Update the relatedEntries's items validations using addItemsValidation to add contentModelC
  testModel.editField('relatedEntries').addItemsValidation([{ linkContentType: ['contentModelC'] }])
}
