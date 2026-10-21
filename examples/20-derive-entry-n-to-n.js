// In this example, we want to turn the dog's owner field into its own entry
// and link it back to the dog. To do this, we create an "owner"
// content type and a link field on the "dog" content type. The link field will be of
// type 'Array', and the derived entry will be the first item in that Array field.
// In the identity function, we define the criterion for when a new owner should
// be created: If the name joined by a hyphen is the same, then the same owner entry is
// linked.
// In the deriveLinkedEntries function, we define what values should go into the new
// owner entries. We don't create any values for the locale 'en-US' on the derived entries.

module.exports = function (migration) {
  const owner = migration.createContentType('owner').name('Owner').description('An owner of a dog')
  owner.createField('firstName').type('Symbol').name('First Name')
  owner.createField('lastName').type('Symbol').name('Last Name')
  owner.displayField('firstName')

  const dog = migration.editContentType('dog')
  dog
    .createField('ownersRef')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry' })
    .name('The Owner')
  migration.deriveLinkedEntries({
    contentType: 'dog',
    derivedContentType: 'owner',
    from: ['owner'],
    toReferenceField: 'ownersRef',
    derivedFields: ['firstName', 'lastName'],
    identityKey: async (fromFields) => {
      return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
    },
    shouldPublish: true,
    deriveEntryForLocale: async (inputFields, locale) => {
      if (locale !== 'en-US') {
        return
      }
      const [firstName, lastName] = inputFields.owner[locale].split(' ')

      return {
        firstName,
        lastName
      }
    }
  })

  dog.deleteField('owner')
}
