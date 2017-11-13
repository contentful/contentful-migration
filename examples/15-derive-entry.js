module.exports = function (migration) {
  const owner = migration.createContentType('owner').name('Owner').description('An owner of a dog');
  owner.createField('firstName').type('Symbol').name('First Name');
  owner.createField('lastName').type('Symbol').name('Last Name');
  owner.displayField('firstName');

  const dog = migration.editContentType('dog');
  dog.createField('ownerRef').type('Link').linkType('Entry').name('The Owner');

  migration.deriveLinkedEntries({
    contentType: 'dog',
    derivedContentType: 'owner',
    from: ['owner'],
    toReferenceField: 'ownerRef',
    derivedFields: ['firstName', 'lastName'],
    identityKey: async (fromFields) => {
      return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
    },
    shouldPublish: true,
    deriveEntryForLocale: async (inputFields, locale) => {
      if (locale !== 'en-US') {
        return;
      }
      const [firstName, lastName] = inputFields.owner[locale].split(' ');

      return {
        firstName,
        lastName
      };
    }
  });

  dog.deleteField('owner');
  dog.changeFieldId('ownerRef', 'owner');
};
