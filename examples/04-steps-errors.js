// Example of syntax errors validation:
// Notice the `lodalised` property line 11, `reqired` line 15 or `validashons` line 17 as well as type inconsistencies.
module.exports = function (migration) {
  const person = migration.createContentType('person', {
    description: 'A content type for a person',
    nmae: 'Totally invalid'
  })

  const fullName = person.createField('fullName', {
    name: 'Full Name',
    lodalised: true
  })

  fullName.validations(null)
  fullName.reqired(false)

  fullName.validashons(false).required([])
}
