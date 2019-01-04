![header](./.github/header.png)
<p align="center">
  <a href="https://www.contentful.com/slack/">
    <img src="https://img.shields.io/badge/-Join%20Community%20Slack-2AB27B.svg?logo=slack&maxAge=31557600" alt="Join Contentful Community Slack">
  </a>
  &nbsp;
  <a href="https://www.contentfulcommunity.com/">
    <img src="https://img.shields.io/badge/-Join%20Community%20Forum-3AB2E6.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1OSI+CiAgPHBhdGggZmlsbD0iI0Y4RTQxOCIgZD0iTTE4IDQxYTE2IDE2IDAgMCAxIDAtMjMgNiA2IDAgMCAwLTktOSAyOSAyOSAwIDAgMCAwIDQxIDYgNiAwIDEgMCA5LTkiIG1hc2s9InVybCgjYikiLz4KICA8cGF0aCBmaWxsPSIjNTZBRUQyIiBkPSJNMTggMThhMTYgMTYgMCAwIDEgMjMgMCA2IDYgMCAxIDAgOS05QTI5IDI5IDAgMCAwIDkgOWE2IDYgMCAwIDAgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0UwNTM0RSIgZD0iTTQxIDQxYTE2IDE2IDAgMCAxLTIzIDAgNiA2IDAgMSAwLTkgOSAyOSAyOSAwIDAgMCA0MSAwIDYgNiAwIDAgMC05LTkiLz4KICA8cGF0aCBmaWxsPSIjMUQ3OEE0IiBkPSJNMTggMThhNiA2IDAgMSAxLTktOSA2IDYgMCAwIDEgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0JFNDMzQiIgZD0iTTE4IDUwYTYgNiAwIDEgMS05LTkgNiA2IDAgMCAxIDkgOSIvPgo8L3N2Zz4K&maxAge=31557600"
      alt="Join Contentful Community Forum">
  </a>
</p>

# contentful-migration - content model migration tool

> Describe and execute changes to your content model and transform entry content.
>This tool is currently available in **Beta**.

<p align="center">
  <img src="https://img.shields.io/badge/Status-Maintained-green.svg" alt="This repository is actively maintained" /> &nbsp;
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT License" />
  </a>
  &nbsp;
  <a href="https://travis-ci.org/contentful/contentful-migration">
    <img src="https://travis-ci.org/contentful/contentful-migration.svg?branch=master" alt="Build Status">
  </a>
</p>


<p align="center">
  <a href="https://www.npmjs.com/package/contentful-migration">
    <img src="https://img.shields.io/npm/v/contentful-migration.svg" alt="NPM">
  </a>
  &nbsp;
  <a href="http://npm-stat.com/charts.html?package=contentful-migration">
    <img src="https://img.shields.io/npm/dm/contentful-migration.svg" alt="NPM downloads">
  </a>
  &nbsp;
</p>

**What is Contentful?**

[Contentful](https://www.contentful.com/) provides content infrastructure for digital teams to power websites, apps, and devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app that enable developers and content creators to ship their products faster.

<details>

<summary>Table of contents</summary>
<!-- TOC -->

- [contentful-migration - content model migration tool](#contentful-migration---content-model-migration-tool)
  - [Core Features](#core-features)
  - [Pre-requisites && Installation](#pre-requisites--installation)
    - [Pre-requisites](#pre-requisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [:exclamation: Usage as CLI](#exclamation-usage-as-cli)
    - [Usage as a library](#usage-as-a-library)
  - [Documentation & References](#documentation--references)
    - [Configuration](#configuration)
    - [Chaining vs Object notation](#chaining-vs-object-notation)
    - [`migration`](#migration)
      - [`createContentType(id[, opts])` : [ContentType](#content-type)](#createcontenttypeid-opts--contenttypecontent-type)
      - [`editContentType(id[, opts])` : [ContentType](#content-type)](#editcontenttypeid-opts--contenttypecontent-type)
      - [`deleteContentType(id)`](#deletecontenttypeid)
      - [`transformEntries(config)`](#transformentriesconfig)
        - [`transformEntries` Example](#transformentries-example)
      - [`deriveLinkedEntries(config)`](#derivelinkedentriesconfig)
        - [`deriveLinkedEntries(config)` Example](#derivelinkedentriesconfig-example)
    - [`context`](#context)
      - [`makeRequest(config)`](#makerequestconfig)
      - [`spaceId` : `string`](#spaceid--string)
      - [`accessToken` : `string`](#accesstoken--string)
    - [Content type](#content-type)
      - [`createField(id[, opts])` : [Field](#field)](#createfieldid-opts--fieldfield)
      - [`editField(id[, opts])` : [Field](#field)](#editfieldid-opts--fieldfield)
      - [`deleteField(id)` : void](#deletefieldid--void)
      - [`changeFieldId (currentId, newId)` : void](#changefieldid-currentid-newid--void)
      - [`changeEditorInterface (fieldId, widgetId[, settings])` : void](#changeeditorinterface-fieldid-widgetid-settings--void)
      - [`resetEditorInterface (fieldId)` : void](#reseteditorinterface-fieldid--void)
      - [`copyEditorInterface (sourceFieldId, destinationFieldId)` : void](#copyeditorinterface-sourcefieldid-destinationfieldid--void)
    - [Field](#field)
  - [Validation errors](#validation-errors)
  - [Example migrations](#example-migrations)
  - [Writing Migrations in Typescript](#writing-migrations-in-typescript)
  - [Troubleshooting](#troubleshooting)
  - [Reach out to us](#reach-out-to-us)
    - [You have questions about how to use this library?](#you-have-questions-about-how-to-use-this-library)
    - [You found a bug or want to propose a feature?](#you-found-a-bug-or-want-to-propose-a-feature)
    - [You need to share confidential information or have other questions?](#you-need-to-share-confidential-information-or-have-other-questions)
  - [Get involved](#get-involved)
  - [License](#license)
  - [Code of Conduct](#code-of-conduct)

<!-- /TOC -->
</details>

## Core Features

- Content type
  - Edit Content type
  - Create a Content type
- Entries
  - Tranform Entries for a Given Content type
  - Derives a new entry and sets up a reference to it on the source entry
- Fields
  - Create a field
  - Edit a field
  - Delete a field
  - Rename a field
  - Change editorInterface
  - Reset editorInterface
  - Copy editorInterface
  - Move field

## Pre-requisites && Installation

### Pre-requisites

- node.js 8.x

### Installation

```js
npm install contentful-migration
```

## Usage

## :exclamation: Usage as CLI

> We moved the CLI version of this tool into our [Contentful CLI](https://github.com/contentful/contentful-cli). This allows our users to use and install only one single CLI tool to get the full Contentful experience.
>
> Please have a look at the [Contentful CLI migration command documentation](https://github.com/contentful/contentful-cli/tree/master/docs/space/migration) to learn more about how to use this as command line tool.
### Usage as a library

```javascript
const runMigration = require('contentful-migration/built/bin/cli').runMigration
const options = {
  filePath: '<migration-file-path>',
  spaceId: '<space-id>',
  accessToken: '<access-token>'
}
runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error)
```

In your migration description file, export a function that accepts the `migration` object as its argument. For example:

```javascript
module.exports = function (migration, context) {
  const dog = migration.createContentType('dog');
  const name = dog.createField('name');
  name.type('Symbol').required(true);
};
```

## Documentation & References

### Configuration

| Name          | Default    | Type    | Description                                                 | Required |
|---------------|------------|---------|-------------------------------------------------------------|----------|
| filePath      |            | string  | The path to the migration file                              | true     |
| spaceId       |            | string  | ID of the space to run the migration script on              | true     |
| environmentId | `'master'` | string  | ID of the environment within the space to run the           | false    |
| accessToken   |            | string  | The access token to use                                     | true     |
| yes           | false      | boolean | Skips any confirmation before applying the migration,script | false    |

### Chaining vs Object notation

All methods described below can be used in two flavors:

 1. The chained approach:

    ```javascript
    const author = migration.createContentType('author')
      .name('Author')
      .description('Author of blog posts or pages')
    ```

 1. The object approach:

    ```javascript
    const author = migration.createContentType('author', {
      name: 'Author',
      description: 'Author of blog posts or pages'
    })
    ```

    While both approaches work, **it is recommended to use the chained approach** since validation errors will display context information whenever an error is detected, along with a line number. The object notation will lead the validation error to only show the line where the object is described, whereas the chained notation will show precisely where the error is located.

### `migration`

The main interface for creating and editing content types.

#### `createContentType(id[, opts])` : [ContentType](#content-type)

Creates a content type with provided `id` and returns a reference to the newly created content type.

**`id : string`** – The ID of the content type.

**`opts : Object`** – Content type definition, with the following options:

- **`name : string`** – Name of the content type.
- **`description : string`** – Description of the content type.
- **`displayField : string`** – ID of the field to use as the display field for the content type.

#### `editContentType(id[, opts])` : [ContentType](#content-type)

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

##### `transformEntries` Example

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

##### `deriveLinkedEntries(config)` Example

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

### `context`

There may be cases where you want to use Contentful API features that are not supported by the `migration` object. For these cases you have access to the internal configuration of the running migration in a `context` object.

```javascript
module.exports = function (migration, { makeRequest, spaceId, accessToken }) {
  const contentType = await makeRequest({
    method: 'GET',
    url: `/content_types?sys.id[in]=foo`
  });

  const anyOtherTool = new AnyOtherTool({ spaceId, accessToken })
};
```

#### `makeRequest(config)`

The function used by the migration object to talk to the Contentful Management API. This can be useful if you want to use API features that may not be supported by the `migration` object.

`config : Object` - Configuration for the request based on [the Contentful management SDK](https://contentful.github.io/contentful-management.js/contentful-management/5.0.0-beta2/ContentfulClientAPI.html#.rawRequest)
  - `method` : `string` – HTTP method
  - `url` : `string` - HTTP endpoint

```javascript
module.exports = function (migration, { makeRequest }) {
  const contentType = await makeRequest({
    method: 'GET',
    url: `/content_types?sys.id[in]=foo`
  })
};
```

#### `spaceId` : `string`

The space ID that was set for the current migration.

#### `accessToken` : `string`

The access token that was set for the current migration.


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
  - `RichText`
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

**`id : string`** – The ID of the field to delete.

#### `changeFieldId (currentId, newId)` : void

Changes the field's ID.

**`currentId : string`** – The current ID of the field.

**`newId : string`** – The new ID for the field.

#### `moveField (id)` : MovableField

Move the field (position of the field in the web editor)

**`id: string`** - The ID of the field to move

`.moveField(id)` returns a movable field type which must be called with a direction function:

- **`.toTheTop()`**
- **`.toTheBottom()`**
- **`.beforeField(fieldId)`**
- **`.afterField(fieldId)`**

Example:
```
module.exports = function (migration) {
  const food = migration.editContentType('food');

  food.createField('calories')
    .type('Number')
    .name('How many calories does it have?');

  food.createField('sugar')
    .type('Number')
    .name('Amount of sugar');

  food.createField('vegan')
    .type('Boolean')
    .name('Vegan friendly');

  food.createField('producer')
    .type('Symbol')
    .name('Food producer');

  food.createField('gmo')
    .type('Boolean')
    .name('Genetically modified food');

  food.moveField('calories').toTheTop();
  food.moveField('sugar').toTheBottom();
  food.moveField('producer').beforeField('vegan');
  food.moveField('gmo').afterField('vegan');
};
```

#### `changeEditorInterface (fieldId, widgetId[, settings])` : void

Changes the editor interface of given field's ID.

**`fieldId : string`** – The ID of the field.

**`widgetId : string`** – The new widget ID for the field. See the [editor interface documentation](https://www.contentful.com/developers/docs/concepts/editor-interfaces/) for a list of available widgets.

**`settings : Object`** – Widget settings, with the following options:

- **`helpText : string`** – This help text will show up below the field.
- **`trueLabel : string`** _(only for fields of type boolean)_ – Shows this text next to the radio button that sets this value to `true`. Defaults to “Yes”.
- **`falseLabel : string`** _(only for fields of type boolean)_ – Shows this text next to the radio button that sets this value to `false`. Defaults to “No”.
- **`stars : number`** _(only for fields of type rating)_ – Number of stars to select from. Defaults to 5.
- **`format : string`** _(only for fields of type datePicker)_ – One of “dateonly”, “time”, “timeZ” (default). Specifies whether to show the clock and/or timezone inputs.
- **`ampm : string`** _(only for fields of type datePicker)_ – Specifies which type of clock to use. Must be one of the strings “12” or “24” (default).
- **`bulkEditing : boolean`** _(only for fields of type Array)_ – Specifies whether bulk editing of linked entries is possible.

#### `resetEditorInterface (fieldId)` : void

**`fieldId : string`** – The ID of the field.

#### `copyEditorInterface (sourceFieldId, destinationFieldId)` : void

**`sourceFieldId : string`** – The ID of the field to copy the editorinterface setting from.
**`destinationFieldId : string`** – The ID of the field to apply the copied editorinterface setting to.

### Field

The field object has the same methods as the properties listed in the [`ContentType.createField`](#createfieldid--string-opts--object--field) method.

## Validation errors

You can learn more from the [possible validation errors here](./docs/validation.md).

## Example migrations

You can check out the [examples](/examples) to learn more about the migrations DSL.
Each example file is prefixed with a sequence number, specifying the order in which you're supposed to run the migrations, as follows:

```javascript
const runMigration = require('contentful-migration/built/bin/cli').runMigration

const options = {
  spaceId: '<space-id>',
  accessToken: '<access-token>',
  yes: true
}

const migrations = async () => {
  await runMigration({...options, ...{filePath: '01-angry-dog.js'}})
  await runMigration({...options, ...{filePath: '02-friendly-dog.js'}})
  await runMigration({...options, ...{filePath: '03-long-example.js'}})
  await runMigration({...options, ...{filePath: '04-steps-errors.js'}})
  await runMigration({...options, ...{filePath: '05-plan-errors.js'}})
  await runMigration({...options, ...{filePath: '06-delete-field.js'}})
  await runMigration({...options, ...{filePath: '07-display-field.js'}})
}

migrations()

```

## Writing Migrations in Typescript

You can use Typescript to write your migration files using `ts-node`!  First `npm install --save ts-node typescript`,
then run your migration with ts-node:

```
node_modules/.bin/ts-node node_modules/.bin/contentful-migration -s $CONTENTFUL_SPACE_ID -a $CONTENTFUL_MANAGEMENT_TOKEN my_migration.ts
```

An example Typescript migration:
```typescript
import { MigrationFunction } from 'contentful-migration'

// typecast to 'MigrationFunction' to ensure you get type hints in your editor
export = function (migration, { makeRequest, spaceId, accessToken }) {
  const dog = migration.createContentType('dog', {
    name: 'Dog'
  })

  const name = dog.createField('name')
  name.name('Name')
    .type('Symbol')
    .required(true)
} as MigrationFunction
```

Here's how it looks inside VS Code:

![typescript migration in vscode](docs/screenshots/typescript-migration-vscode.png)

## Troubleshooting

*  Unable to connect to Contentful through your Proxy? Try to set the `rawProxy` option to `true`.

```javascript
runMigration({
  proxy: 'https://cat:dog@example.com:1234',
  rawProxy: true,
  ...
})
```


## Reach out to us

### You have questions about how to use this library?

- Reach out to our community forum: [![Contentful Community Forum](https://img.shields.io/badge/-Join%20Community%20Forum-3AB2E6.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1OSI+CiAgPHBhdGggZmlsbD0iI0Y4RTQxOCIgZD0iTTE4IDQxYTE2IDE2IDAgMCAxIDAtMjMgNiA2IDAgMCAwLTktOSAyOSAyOSAwIDAgMCAwIDQxIDYgNiAwIDEgMCA5LTkiIG1hc2s9InVybCgjYikiLz4KICA8cGF0aCBmaWxsPSIjNTZBRUQyIiBkPSJNMTggMThhMTYgMTYgMCAwIDEgMjMgMCA2IDYgMCAxIDAgOS05QTI5IDI5IDAgMCAwIDkgOWE2IDYgMCAwIDAgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0UwNTM0RSIgZD0iTTQxIDQxYTE2IDE2IDAgMCAxLTIzIDAgNiA2IDAgMSAwLTkgOSAyOSAyOSAwIDAgMCA0MSAwIDYgNiAwIDAgMC05LTkiLz4KICA8cGF0aCBmaWxsPSIjMUQ3OEE0IiBkPSJNMTggMThhNiA2IDAgMSAxLTktOSA2IDYgMCAwIDEgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0JFNDMzQiIgZD0iTTE4IDUwYTYgNiAwIDEgMS05LTkgNiA2IDAgMCAxIDkgOSIvPgo8L3N2Zz4K&maxAge=31557600)](https://support.contentful.com/)
- Jump into our community slack channel: [![Contentful Community Slack](https://img.shields.io/badge/-Join%20Community%20Slack-2AB27B.svg?logo=slack&maxAge=31557600)](https://www.contentful.com/slack/)

### You found a bug or want to propose a feature?

- File an issue here on GitHub: [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/contentful/contentful-migration/issues/new). Make sure to remove any credential from your code before sharing it.

### You need to share confidential information or have other questions?

- File a support ticket at our Contentful Customer Support: [![File support ticket](https://img.shields.io/badge/-Submit%20Support%20Ticket-3AB2E6.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1OSI+CiAgPHBhdGggZmlsbD0iI0Y4RTQxOCIgZD0iTTE4IDQxYTE2IDE2IDAgMCAxIDAtMjMgNiA2IDAgMCAwLTktOSAyOSAyOSAwIDAgMCAwIDQxIDYgNiAwIDEgMCA5LTkiIG1hc2s9InVybCgjYikiLz4KICA8cGF0aCBmaWxsPSIjNTZBRUQyIiBkPSJNMTggMThhMTYgMTYgMCAwIDEgMjMgMCA2IDYgMCAxIDAgOS05QTI5IDI5IDAgMCAwIDkgOWE2IDYgMCAwIDAgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0UwNTM0RSIgZD0iTTQxIDQxYTE2IDE2IDAgMCAxLTIzIDAgNiA2IDAgMSAwLTkgOSAyOSAyOSAwIDAgMCA0MSAwIDYgNiAwIDAgMC05LTkiLz4KICA8cGF0aCBmaWxsPSIjMUQ3OEE0IiBkPSJNMTggMThhNiA2IDAgMSAxLTktOSA2IDYgMCAwIDEgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0JFNDMzQiIgZD0iTTE4IDUwYTYgNiAwIDEgMS05LTkgNiA2IDAgMCAxIDkgOSIvPgo8L3N2Zz4K&maxAge=31557600)](https://www.contentful.com/support/)

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to contribute see our [CONTRIBUTING.md](CONTRIBUTING.md) document.

## License

This repository is published under the [MIT](LICENSE) license.

## Code of Conduct

We want to provide a safe, inclusive, welcoming, and harassment-free space and experience for all participants, regardless of gender identity and expression, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, level of experience, age, religion (or lack thereof), or other identity markers.
