import Migration from 'contentful-migration'

export = function (migration: Migration) {
  const dog = migration.createContentType('dog', {
    name: 'Dog'
  })

  const name = dog.createField('name')
  name.name('Name').type('Symbol').required(true)
}
