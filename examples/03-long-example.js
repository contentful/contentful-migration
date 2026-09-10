// Long migration example showcasing how migrations are split into one chunk per content type.
module.exports = function (migration) {
  const person = migration.createContentType('person', {
    name: 'Person',
    description: 'A content type for a person'
  })

  person.createField('age', {
    name: 'Age',
    type: 'Number',
    required: true
  })

  person.createField('fullName', {
    name: 'Full name',
    type: 'Symbol',
    required: true,
    localized: true
  })

  const animal = migration.createContentType('animal', {
    description: 'An animal',
    name: 'Animal'
  })

  animal.createField('species', {
    name: 'The species of the animal',
    type: 'Symbol',
    required: true
  })

  animal.createField('isFurry', {
    name: 'Is this a furry animal',
    type: 'Boolean',
    required: false
  })

  const tag = migration.createTag('longexampletag')
  tag.name('long example marketing')

  person.createField('pet', {
    name: 'Their pet',
    type: 'Link',
    linkType: 'Entry',
    required: false
  })

  animal.createField('name', {
    name: 'The name of the animal',
    type: 'Symbol',
    required: true,
    localized: true
  })
}
