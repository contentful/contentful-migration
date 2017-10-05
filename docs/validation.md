Contentful Migration – Validations
=====

Here is a list of supported validations.

## INVALID_PROPERTY_NAME
Whenever trying to set a property which doesn't exist, and we couldn't offer any suggestion to use as a replacement.

**Example:**
```javascript
field.fdskljhdf('Ctrl + arm')
```

## INVALID_PROPERTY_NAME_WITH_SUGGESTION
Whenever trying to set a property which doesn't exist, and we could offer a suggestion to use as a replacement.

**Example:**
```javascript
field.nmae('First name')
```

## INVALID_PROPERTY_TYPE
Whenever setting a value to a property which is not matching the expected type.

**Example:**
```javascript
field.name(true)
```

## INVALID_MOVEMENT_TYPE
Whenever trying to move a field with the wrong type for the field id.

 Example:
```javascript
contentType.moveField(3).toTheTop()
```

## INVALID_MOVEMENT_WITH_SELF
Whenever trying to move a field relative to itself.

 Example:
```javascript
contentType.moveField('name').afterField('name')
```

## INVALID_MOVEMENT_NAME
Whenever trying to move a field relative to another with an invalid movement.

 Example:
```javascript
contentType.moveField('name').xyz('surname')
```

## INVALID_MOVEMENT_NAME_WITH_SUGGESTION
Whenever trying to move a field relative to another with an invalid movement but we can provide a suggestion.

 Example:
```javascript
contentType.moveField('name').after('surname')
```


While evaluating your migration script we validate that the actions you want to perform on content types and fields aren't wrong in any sense.
These validations are bound to the entity type and action on which they ocurred. Therefore the error keys are scoped to it
and have a layout of `{entity}.{action}.{validation name}`.

## field.create.FIELD_ALREADY_CREATED
Whenever trying to create twice the same field.

**Example:**
```javascript
contentType.createField('name').name('First name')

contentType.createField('name').name('Last name')
```

## field.create.CONTENT_TYPE_DOES_NOT_EXIST
Whenever trying to create a field on a non-existing content type.

**Example:**
```javascript
// While no `inexistent` content type exists in the target space
migration.editContentType('inexistent').createField('foo')
```

## field.delete.FIELD_ALREADY_DELETED
Whenever trying to delete a field twice.

**Example:**
```javascript
contentType.deleteField('name')

contentType.deleteField('name')
```

## field.delete.FIELD_DOES_NOT_EXIST
Whenever trying to delete a field which doesn't exist.

**Example:**
```javascript
contentType.createField('name')
// ...
contentType.deleteField('nmae')
```

## field.delete.CONTENT_TYPE_DOES_NOT_EXIST
Whenever trying to delete a field of a content type which doesn't exist.

**Example:**
```javascript
// While no `inexistent` content type exists in the target space
migration.editContentType('inexistent').deleteField('foo')
```

## field.update.FIELD_DOES_NOT_EXIST
Whenever trying to edit a field which doesn't exist.

**Example:**
```javascript
contentType.createField('name')
// ...
contentType.editField('nmae')
```

## field.update.FIELD_ALREADY_DELETED
Whenever trying to update a field after it has been deleted.

**Example:**
```javascript
contentType.deleteField('name')

contentType.editField('name')
```

## field.update.CONTENT_TYPE_DOES_NOT_EXIST
Whenever trying to update a field on a non-existing content type.

**Example:**
```javascript
// While no `inexistent` content type exists in the target space
migration.editContentType('inexistent').editField('foo')
```

## contentType.create.CONTENT_TYPE_ALREADY_CREATED
Whenever trying to create a content type twice.

**Example:**
```javascript
migration.createContentType('author').name('Author')
// ...
migration.createContentType('author').name('Editor')
```

## field.move.FIELD_DELETED
Whenever trying to move a field which was already deleted.

 Example:
```javascript
contentType.deleteField('name')
// ...
contentType.moveField('name').toTheTop()
```

## field.move.FIELD_DOES_NOT_EXIST
Whenever trying to move a field which doesn't exists.

## field.move.FIELD_ALREADY_MOVED
Whenever trying to move a field which was already moved.

 Example:
```javascript
contentType.moveField('name').toTheTop()
contentType.moveField('name').toTheBottom()
```

## field.move.CONTENT_TYPE_DOES_NOT_EXIST
Whenever you try to move a field on a non existing content type.

## field.move.PIVOT_FIELD_DOES_NOT_EXIST
Whenever you try to move field relative to another one which doesn't exist.

 Example:
```javascript
contentType.moveField('name').afterField('somefield-that-doesnt-exist')
```

## field.move.PIVOT_FIELD_DELETED
Whenever you try to move a field relative to another one which has been already deleted.

 Example:
```javascript
contentType.deleteField('surname')
contentType.moveField('name').afterField('surname')
```

## contentType.create.CONTENT_TYPE_ALREADY_EXISTS
Whenever trying to create a content type which already exists in the target space.

**Example:**
```javascript
// While `author` already exists in the target space
migration.createContentType('author').name('Author')
```

## contentType.update.CONTENT_TYPE_NOT_YET_CREATED
Whenever trying to edit a content type which doesn't exist currently. (i.e. is created later in the migration)

**Example:**
```javascript
// While no `inexistent` content type exists in the target space
migration.editContentType('inexistent')
migration.createContentType('inexistent')
```

## contentType.update.CONTENT_TYPE_DOES_NOT_EXIST
Whenever trying to create or edit a field of a content type which hasn't yet been created.

**Example:**
```javascript
author.createField('fullName').name('Full name')

const author = migration.createContentType('author').name('Author')
```

Some other validation errors pop up when checking the payload generated after applying your migration. On this case
the validation keys are scoped only by the entity on which the ocurred: `{entity}.{validation name}`


## contentType.REQUIRED_PROPERTY
Whenever a required property is missing in the definition, such as, for example, `name` for fields of content types.

**Example:**
```javascript
const author = migration.createContentType('author')
```

## contentType.TOO_MANY_FIELDS
Whenever hitting the 50 fields limit on a content type, while trying to create a new field.

**Example:**
```javascript
const author = migration.createContentType('author')
  .name('Author')

for (let i = 0; i < 60; i++) {
  author.createField('dummy-' + i)
    .name('Dummy field ' + i)
    .type('Symbol')
}
```

## contentType.NON_EXISTENT_DISPLAY_FIELD
Whenever setting the `displayField` of a content type to an ID of a field which doesn't exist.

**Example:**
```javascript
const author = migration.createContentType('author')
  .name('Author')
  .displayField('fullName')

author.createField('firstName')
  .name('First name')
  .type('Symbol')

author.createField('lastName')
  .name('Last name')
  .type('Symbol')
```

## contentType.DELETE_DISPLAY_FIELD
Whenever trying to delete the field used as the `displayField` of the content type.

**Example:**
```javascript
const author = migration.createContentType('author')
  .name('Author')
  .displayField('fullName')

author.createField('fullName')
  .name('Full name')
  .type('Symbol')

author.deleteField('fullName')
```

## contentType.ID_MUST_BE_DIFFERENT
When setting a new field ID to the value it already has.

**Example:**
```javascript
author.changeFieldId('fullName', 'fullName')
```

## contentType.ID_MUST_BE_UNIQUE
When giving a field an ID that another field on the same content type already has.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')

author.changeFieldId('firstName', 'fullName')
```

## contentType.ID_MUST_MATCH_SCHEMA
When setting a new field ID that does not match the requirements.

**Example:**
```javascript
author.changeFieldId('fullName', '!%#')
```

## field.REQUIRED_PROPERTY
Whenever a required property is missing in the definition, such as, for example, the `type` property of a field.

**Example:**
```javascript
contentType.createField('author').name('Author')
// .type('Symbol') is missing

## field.REQUIRED_DEPENDENT_PROPERTY
Whenever editing an element, but forgetting to set a required property, such as `items` for fields of type `Array` or `linkType` for fields of type `Link`.

**Example:**
```javascript
const author = migration.createContentType('author')
  .name('Author')

author.createField('articles')
  .name('Written articles')
  .type('Array')

// Missing the `items` property
```

## field.FORBIDDEN_DEPENDENT_PROPERTY
Whenever using a property which is not compatible with the type of the field.

**Example:**
```javascript
const author = migration.createContentType('author')
  .name('Author')

author.createField('fullName')
  .name('Full name')
  .type('Symbol')
  .items({ type: 'Asset' })

// `items` is not compatible with field type `Symbol`.
```

## field.PROPERTY_MUST_BE_ONE_OF
Whenever trying to set a field type with a value which is not allowed.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Wrong')
```

Allowed types are listed in the [`createField`](#createfieldid--string-opts--object--field) documentation.

## field.NO_DELETE_WITHOUT_OMIT
Whenever using `deleted(true)` on a field which hasn't been omitted first (using `omitted(true)`).

**Example:**
```javascript
const author = migration.editContentType('author')

// Missing the following code:
// author.editField('fullName')
//  .omitted(true)

author.editField('fullName')
  .deleted(true)
```

Note: you may use the [`deleteField`](#deletefieldid--string--void) shorthand method to do both operations at once.

## field.NO_TYPE_CHANGE
Whenever trying to edit the `type` of an existing field.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')

author.editField('fullName').type('Text')
```

Field types can't be changed, you must disable and omit the field, and create a new field with the right type and a different ID instead.

## field.validations.DUPLICATED_VALIDATION
Whenever trying to add the same validation twice.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')
  .validations([
    { unique: true },
    { unique: true }
  ])
```

## field.validations.INVALID_VALIDATION_PROPERTY
Whenever trying to set a non existing validation.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')
  .validations([
    { customValidation: { crazy: 'stuff' } },
  ])
```

## field.validations.INVALID_VALIDATION_PARAMETER
Whenever trying to set the wrong parameters for a validation.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')
  .validations([
    { unique: 'yes' }, // needs to be Boolean
    { size: 5 } // needs to be object { min, max }
  ])
```

## DUPLICATE_PROP
When setting the same property on a content type or field multiple times.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')
  .name('Name')
```

Note that steps in the migration description are grouped into what will be requests to Contentful's API. If the property changes would not end up in the same request because they are done in a later, separate step, this will not produce an error.

**Example:**
```javascript
author.createField('fullName')
  .name('Full name')
  .type('Symbol')

migration.deleteContentType('reader');

author.editField('fullName')
  .name('Name')
```
