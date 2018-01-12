🚚  Contentful migrations
===============

[![Build Status](https://travis-ci.org/contentful/migration-cli.svg?branch=master)](https://travis-ci.org/contentful/migration-cli) [![codecov](https://codecov.io/gh/contentful/migration-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/contentful/migration-cli)

Describe and execute changes to your content model and transform entry content.

This CLI is currently available in **Beta**.

## Installation

```js
npm install -g contentful-migration-cli
```

## Usage

![Usage demo](examples/demo.gif)

```sh
contentful-migration --space-id <space id to use> <path to migration description file>
```

In your migration description file, export a function that accepts the `migration` object as its argument. For example:

```javascript
module.exports = function (migration) {
  const dog = migration.createContentType('dog');
  const name = dog.createField('name');
  name.type('Symbol').required(true);
};
```

## Setup

You need to export the following environment variables for the CLI to work:
- `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` – The [personal access token](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/personal-access-tokens/personal-access-token) for accessing the CMA.
- `HTTP_PROXY` or `http_proxy` _(optional)_ – The settings for the HTTP proxy in the shape of `http://[user:password@]<host>[:port]`.
- `HTTPS_PROXY` or `https_proxy` _(optional)_ – The settings for the HTTPS proxy in the shape of `https://[user:password@]<host>[:port]`.

If you are using the [Contentful CLI](https://www.npmjs.com/package/contentful-cli) these will be automatically picked up from your `~/.contentfulrc.json` configuration file.

Please note that the environment variables will take precedence over the `~/.contentfulrc.json` configuration.

## Chaining vs Object notation

All methods described below can be used in two flavors:
 1. The chained approach:
    ```javascript
    const author = migration.createContentType('author')
      .name('Author')
      .description('Author of blog posts or pages')
    ```
 2. The object approach:
    ```javascript
    const author = migration.createContentType('author', {
      name: 'Author',
      description: 'Author of blog posts or pages'
    })
    ```
    While both approaches work, **it is recommended to use the chained approach** since validation errors will display context information whenever an error is detected, along with a line number. The object notation will lead the validation error to only show the line where the object is described, whereas the chained notation will show precisely where the error is located.

## Reference documentation

### `migration`

The main interface for creating and editing content types.

#### `createContentType(id[, opts])` : [ContentType](#contenttype)

Creates a content type with provided `id` and returns a reference to the newly created content type.

**`id : string`** – The ID of the content type.

**`opts : Object`** – Content type definition, with the following options:
- **`name : string`** – Name of the content type.
- **`description : string`** – Description of the content type.
- **`displayField : string`** – ID of the field to use as the display field for the content type.

#### `editContentType(id[, opts])` : [ContentType](#contenttype)

Edits an existing content type of provided `id` and returns a reference to the content type.
Uses the same options as [`createContentType`](#createcontenttypeid--string-opts--object--contenttype).

#### `deleteContentType(id)`

Deletes the content type with the provided id and returns `undefined`. Note that the content type must not have any entries.

#### `transformEntries(config)`

For the given content type, transforms all its entries according to the user-provided `transformEntryForLocale` function. For each entry, the CLI will call this function once per locale in the space, passing in the `from` fields and the locale as arguments. 
The transform function is expected to return an object with the desired target fields. If it returns `undefined`, this entry locale will be left untouched. 



**`config : Object`** – Content transformation definition, with the following properties:
- **`contentType : string`** _(required)_ – Content type ID
- **`from : array`** _(required)_ – Array of the source field IDs
- **`to : array`** _(required)_ – Array of the target field IDs
- **`transformEntryForLocale : function (fields, locale): object`** _(required)_ – Transformation function to be applied.
    - `fields` is an object containing each of the `from` fields. Each field will contain their current localized values (i.e. `from == {myField: {'en-US': 'my field value'}}`)
    - `locale` one of the locales in the space being transformed  

   The return value must be an object with the same keys as specified in `to`. Their values will be written to the respective entry fields for the current locale (i.e. `{nameField: 'myNewValue'}`). If it returns `undefined`, this the values for this locale on the entry will be left untouched. 
- **`shouldPublish : boolean`** _(optional)_ – If `true`, the transformed entries will be published. If `false`, both will remain in draft state (default `true`)

### Example

```javascript
migration.transformEntries({
    contentType: 'newsArticle',
    from: ['author', 'authorCity'],
    to: ['byline'],
    transformEntryForLocale: function (fromFields, currentLocale) {
      if (currentLocale === 'de-DE') {
        return;
      }
      const newByline = `${fromFields.author[currentLocale]} ${fromFields.authorCity[currentLocale]}`;
      return { byline: newByline };
    }
  });
```

For the complete version, please refer to [this example](./examples/12-transform-content.js).

#### `deriveLinkedEntries(config)`

For each entry of the given content type (source entry), derives a new entry and sets up a reference to it on the source entry. The content of the new entry is generated by the user-provided `deriveEntryForLocale` function.
For each source entry, this function will be called as many times as there are locales in the space. Each time, it will be called with the `from` fields and one of the locales as arguments. 
The derive function is expected to return an object with the desired target fields. If it returns `undefined`, the new entry will have no values for the current locale.

**`config : Object`** – Entry derivation definition, with the following properties:
- **`contentType : string`** _(required)_ – Source content type ID

- **`derivedContentType : string`** _(required)_ – Target content type ID

- **`from : array`** _(required)_ – Array of the source field IDs

- **`toReferenceField : string`** _(required)_ – ID of the field on the source content type in which to insert the reference

- **`derivedFields : array`** _(required)_ – Array of the field IDs on the target content type

- **`identityKey: function (fields): string`** _(required)_ - Called once per source entry. Returns the ID used for the derived entry, which is also used for de-duplication so that multiple source entries can link to the same derived entry.
  - `fields` is an object containing each of the `from` fields. Each field will contain their current localized values (i.e. `fields == {myField: {'en-US': 'my field value'}}`)

- **`deriveEntryForLocale : function (fields, locale): object`** _(required)_ – Function that generates the field values for the derived entry.
  - `fields` is an object containing each of the `from` fields. Each field will contain their current localized values (i.e. `fields == {myField: {'en-US': 'my field value'}}`)
  - `locale` one of the locales in the space being transformed

   The return value must be an object with the same keys as specified in `derivedFields`. Their values will be written to the respective new entry fields for the current locale (i.e. `{nameField: 'myNewValue'}`)

- **`shouldPublish : boolean`** _(optional)_ – If `true`, both the source and the derived entries will be published. If `false`, both will remain in draft state (default `true`)

### Example

```javascript
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
```

For the complete version of this migration, please refer to [this example](./examples/15-derive-entry.js).

### Content type

For a comprehensive guide to content modelling, please refer to [this guide](https://www.contentful.com/developers/docs/concepts/data-model/).

#### `createField(id[, opts])` : [Field](#field)

Creates a field with provided `id`.

**`id : string`** – The ID of the field.

**`opts : Object`** – Field definition, with the following options:
- **`name : string`** _(required)_ – Field name.
- **`type : string`** _(required)_ – Field type, amongst the following values:
  - `Symbol` (Short text)
  - `Text` (Long text)
  - `Integer`
  - `Number`
  - `Date`
  - `Boolean`
  - `Object`
  - `Location`
  - `Array` (requires `items`)
  - `Link` (requires `linkType`)
- **`items : Object`** _(required for type 'Array')_ – Defines the items of an Array field.
  Example:
  ```javascript
  items: {
    type: 'Link',
    linkType: 'Entry',
    validations: [
      { linkContentType: [ 'my-content-type' ] }
    ]
  }
  ```
- **`linkType : string`** _(required for type 'Link')_ – Type of the referenced entry.
  Can take the same values as the ones listed for `type` above.
- **`required : boolean`** – Sets the field as required.
- **`validations : Array`** – Validations for the field.
  Example:
  ```javascript
  validations: [
    { in: [ 'Web', 'iOS', 'Android' ] }
  ]
  ```
  _See [The CMA documentation](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/content-types/content-type) for the list of available validations._
- **`localized : boolean`** – Sets the field as localized.
- **`disabled : boolean`** – Sets the field as disabled, hence not editable by authors.
- **`omitted : boolean`** – Sets the field as omitted, hence not sent in response.
- **`deleted : boolean`** – Sets the field as deleted. Requires to have been `omitted` first.
  _You may prefer using the `deleteField` method._

#### `editField(id[, opts])` : [Field](#field)

Edits the field of provided `id`.

**`id : string`** – The ID of the field to delete.

**`opts : Object`** – Same as [`createField`](#createfieldid--string-opts--object--field) listed above.

#### `deleteField(id)` : void

Shorthand method to omit a field, publish its content type, and then delete the field.
This implies that associated content for the field will be lost.

`id : string` – The ID of the field to delete.

#### `changeFieldId (currentId, newId)` : void

Changes the field's ID.

`currentId : string` – The current ID of the field.
`newId : string` – The new ID for the field.

#### `changeEditorInterface (fieldId, widgetId)` : void

Changes the editor interface of given field's ID.

`fieldId : string` – The ID of the field.
`widgetId : string` – The new widget ID for the field.

### Field

The field object has the same methods as the properties listed in the [`ContentType.createField`](#createfieldid--string-opts--object--field) method.

## Validation errors

You can learn more from the [possible validation errors here](./docs/validation.md).

## Examples

You can check out the [examples](/examples) to learn more about the migrations DSL.
Each example file is prefixed with a sequence number, specifying the order in which you're supposed to run the migrations, as follows:

```bash
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=your-token
export SPACE_ID=your-space-id
contentful-migration --space-id $SPACE_ID 01-angry-dog.js
contentful-migration --space-id $SPACE_ID 02-friendly-dog.js
contentful-migration --space-id $SPACE_ID 03-long-example.js
contentful-migration --space-id $SPACE_ID 04-steps-errors.js
contentful-migration --space-id $SPACE_ID 05-plan-errors.js
contentful-migration --space-id $SPACE_ID 06-delete-field.js
contentful-migration --space-id $SPACE_ID 07-display-field.js
```

## Programmatic Usage

To use the CLI without the manual confirmation step (e.g. in a CI environment), you can pass the `--yes` (or just `-y`) flag:

```bash
contentful-migration --yes --space-id YOUR_TOKEN ./your-migration.js
```

## Support

If you have a problem with this tool, please file an [issue](https://github.com/contentful/migration-cli/issues/new) here on Github.

If you have other problems with Contentful not related to this library, you can contact [Customer Support](https://support.contentful.com).

## License

MIT
