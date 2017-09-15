🚚  Contentful migrations
===============

[![Build Status](https://travis-ci.org/contentful/migration-cli.svg?branch=master)](https://travis-ci.org/contentful/migration-cli) [![codecov](https://codecov.io/gh/contentful/migration-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/contentful/migration-cli)

Describe and execute changes to your content model.

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

### `ContentType`

#### `createField(id[, opts])` : [Field](#field)

Creates a field with provided `id`.

**`id : string`** – The ID of the field.

**`opts : Object`** – Field definition, with the following options:
- **`name : string`** _(required)_ – Field name.
- **`type : string`** _(required)_ – Field type, amongst the following values:
  - `Symbol`
  - `Text`
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

## Support

If you have a problem with this tool, please file an [issue](https://github.com/contentful/migration-cli/issues/new) here on Github.

If you have other problems with Contentful not related to this library, you can contact [Customer Support](https://support.contentful.com).

## License

MIT
