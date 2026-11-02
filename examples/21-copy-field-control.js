module.exports = function (migration) {
  const recipe = migration.createContentType('recipe', {
    name: 'Delicious Recipe',
    description: 'yammy'
  })

  recipe.createField('description', {
    name: 'Description',
    type: 'Text',
    required: true,
    localized: true
  })
  recipe.createField('instruction', {
    name: 'Instruction',
    type: 'Text'
  })
  recipe.changeFieldControl('description', 'builtin', 'markdown')
  recipe.copyFieldControl('description', 'instruction')
}
