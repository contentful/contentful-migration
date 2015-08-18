# contentful-management.js

Javascript client for [Contentful's](https://www.contentful.com) Content Management API:

- [API Documentation](#api)
- [REST API Documentation](https://www.contentful.com/developers/documentation/content-management-api)
- [Examples](#examples)
- [Create an access token for the Content Management API (need account)](https://www.contentful.com/developers/documentation/content-management-api/#getting-started)

Supported browsers/environments:

- Chrome
- Firefox
- IE10
- node.js >= 0.8

## Install

In node, using [npm](http://npmjs.org):

``` sh
npm install contentful-management
```

Note: The next minor version release of `dist/contentful-management.min.js` will
be much smaller. Please use a package manager to keep your JS
dependencies up to date and get the newest version right when it's
ready!

## Examples

This library comes with a few example scripts

### Cloning a Space

[View Source](example/clone-space.js)

This clones a Space's complete content model & content.
It's intended to be used to create one-time clones of Spaces,
not for synchronization.

``` sh
$ example/clone-space.js \
  --access-token $CONTENTFUL_ACCESS_TOKEN \
  --source-space-id $SOURCE_SPACE_ID \
  --destination-space-id $DESTINATION_SPACE_ID
```

Omit the `destination-space-id` parameter to make the script create a
Space. When doing that you might have to specify a
`destination-organization-id` parameter if your user is in multiple
organizations.

### Cloning a Space's Content Types Only

If you just want the content types for a space to be cloned, add the `--only-content-types` flag.
``` sh
$ example/clone-space.js \
  --access-token $CONTENTFUL_ACCESS_TOKEN \
  --source-space-id $SOURCE_SPACE_ID \
  --destination-space-id $DESTINATION_SPACE_ID \
  --only-content-types
```

### Migrating Entry fields

Sometimes you need to migrate content from one field to another.
This is a script which migrates all values from one field to another
field, using a specific mapping function if it's provided.
It'll do this for each entry of a specific Content Type in a Space,
going through it slice by slice.

Currently this supports mapping from Text to Symbol.
But it would be very simple to convert e.g. numbers to symbols
or even location strings to locations by geocoding.
PRs are very welcome!

[View Source](example/migrate-fields.js)

``` sh
$ example/migrate-fields.js \
    --access-token $CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN \
    --space-id $SPACE_ID \
    --content-type-id $CONTENT_TYPE_ID \
    --source-field-id $SOURCE_FIELD_ID \
    --destination-field-id $DESTINATION_FIELD_ID
```

## API

### createClient(opts) -> Client

To use the Content Management API you will need an access token. The easiest
way to get a token for local scripts/experimentation is by using the OAuth app
embedded in our [documentation][get-token].

``` js
var contentful = require('contentful-management');

var client = contentful.createClient({
  // A valid access token for your user (see above on how to create a valid access token)
  accessToken: 'b4c0n73n7fu1',

  // Enable or disable SSL. Enabled by default.
  secure: true
});
```

### Client#getSpace(id) -> SpacePromise

```js
client.getSpace('foobar')
```

Returns a promise for a [Space][] object.

### Client#createSpace(opts) -> SpacePromise

Create a space with the name 'CMA Example Space'.

```js
client.createSpace({name: 'CMA Example Space'})
```

Returns a promise for a [Space][] object.

### Client#deleteSpace -> Promise

Delete a space and all of it's content. **Warning:** there is no undo!

```js
client.deleteSpace(space);
```

Returns a promise for nothing, which should still be checked for errors.

### Space API

A space is a top level container for all other resources. In addition to the
methods documented below, a space has the following data properties:

```js
{
  "name": "Example Space",
  "sys": {
    "type": "Space",
      "id": "1vlwe1hnkhmk",
      "version": 0,
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "0lEP0wVJL8WSQSbRuVUdcJ"
        }
      },
      "createdAt": "2013-09-22T17:34:53Z",
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "0lEP0wVJL8WSQSbRuVUdcJ"
        }
      },
      "updatedAt": "2013-09-22T17:34:53Z"
  }
}
```

#### Space#createContentType(contentTypeId, entry) -> ContentTypePromise

Create a new content type by providing a name, fields, optional description,
and an optional ID. If you do not provide the `sys.id` property, an ID will be
generated for you.

```js
space.createContentType({
  sys: {id: 'blog-post'},
  name: 'Blog Post',
  description: 'For like, blogging',
  fields: [
    {id: 'title', name: 'Title', type: 'Text'},
    {id: 'body', name: 'Body', type: 'Text'}
  ]
})
```

The easiest way to find out what field types are available and how to represent
them in JSON is to use the content type editor built into the [Contentful
app][cf-app]. (Note that you will need administrative privileges for a space to
edit content types).

Returns a promise for a [ContentType][].

#### Space#getContentType(id) -> ContentTypePromise

Retrieve a content type by it's ID (**not** it's name). Returns a promise for a
[ContentType][].

#### Space#publishContentType(contentType) -> ContentTypePromise

Publish a [content type][], making it available for use by [create-entry], as
well as visible to the [Content Delivery API][].

```js
space.publishContentType(contentType)
```

Returns a promise for an updated version of the content type.

#### Space#unpublishContentType(contentType) -> ContentTypePromise

Unpublish a [content type][]. This operation is not allowed if there
are any entries of this content type (because entries may only be created for
published content types). If you wish to delete a content type and all of it's
entries, you will need to iterate over the entries and delete them before
unpublishing and deleting the content type.

```js
space.unpublishContentType(contentType)
```

Returns a promise for an updated version of the content type.

#### Space#deleteContentType(contentType) -> Promise

Delete a content type, note that the content type must be unpublished (and
therefore have no entries) before it can be deleted.

```js
space.deleteContentType(contentType)
```

#### Space#getContentTypes() -> ContentTypeCollectionPromise

Retrieve all content types for the space. Returns a promise for a [collection][]
of [ContentType][] objects.

#### Space#createEntry(contentType, entry) -> EntryPromise

Create a new entry by providing field values and and an optional ID. If you do
not provide the `sys.id` property, an ID will be generated for you.

```js
space.createEntry(contentType, {
  sys: {id: 'hello-world'},
  fields: {
    title: {'en-US': 'Hello, World!'},
    body: {'en-US': 'Bacon is healthy!'}
  }
})
```

For more information on what is allowed in the `fields` property, see [Entry
fields][].

Returns a promise for an [Entry][].

#### Space#getEntry(id) -> EntryPromise

Retrieve an entry by it's ID. Returns a promise for an [Entry][].

```js
space.getEntry('hello-world')
```

#### Space#publishEntry(entry) -> EntryPromise

Publish an [Entry][], making it visible to the [Content Delivery API][].

```js
space.publishEntry(entry)
```

Returns a promise for an updated version of the entry.

#### Space#unpublishEntry(entry) -> EntryPromise

Unpublish an [Entry][], this appears to the [Content Delivery API][] as though
the entry was deleted.

```js
space.unpublishEntry(entry)
```

Returns a promise for an updated version of the entry.

#### Space#deleteEntry(entry) -> Promise

Delete an entry. Note that entries must be unpublished before deleting them.

```js
space.deleteEntry(entry)
```

Returns a promise for nothing, which should still be checked for errors.

#### Space#getEntries(query) -> EntryCollectionPromise

Search & filter all of the entries in a space. The `query` parameter should be
an object of querystring key-value pairs. The [query examples](#query-examples)
section containts more examples of the kinds of queries you can perform.

```js
space.getEntries({content_type: 'blog-post'})
```

Returns a promise for a [collection][] of [Entry][] objects.

#### Space#createAsset(contentTypeId, entry) -> AssetPromise

Create a new asset by providing field values and and an optional ID. If you do
not provide the `sys.id` property, an ID will be generated for you.

```js
space.createAsset({
  sys: {id: 'dinosaurs'},
  fields: {
    title: {'en-US': 'Dinosaur'},
    file: {
      'en-US': {
        upload: 'http://www.qwantz.com/comics/comic2-2870.png'
      }
    }
  }
})
```

Returns a promise for an [Asset][], which must be [processed][process-asset]
before it can be published.

#### Space#processAssetFile(asset, locale) -> Promise

Process the file for a particular asset & locale. Note that this operation is
asynchronous on the Contentful backend; you will receive a successful response
before the asset is fully processed.

```js
space.processAssetFile(asset, 'en-US');
```

Returns a promise for nothing, which should still be checked for errors. In
order to detect when an asset has finished processing, retrieve the asset using
`space.getAsset` and test for the presence of `asset.fields.file[locale].url`.

#### Space#getAsset(id) -> AssetPromise

Retrieve an asset by it's ID. Returns a promise for an [Asset][].

```js
space.getAsset('dinosaurs')
```

#### Space#publishAsset(asset) -> AssetPromise

Publish an [Asset][], making it visible to the [Content Delivery API][].

```js
space.publishAsset(asset)
```

Returns a promise for an updated version of the asset.

#### Space#unpublishAsset(asset) -> AssetPromise

Unpublish an [Asset][], this appears to the [Content Delivery API][] as though
the asset was deleted.

```js
space.unpublishAsset(asset)
```

Returns a promise for an updated version of the asset.

#### Space#getAssets(query) -> AssetCollectionPromise

Search & filter all of the assets in a space. The `query` parameter should be
an object of querystring key-value pairs. The [query examples](#query-examples)
section containts more examples of the kinds of queries you can perform.

```js
space.getAssets({'fields.file.url[exists]': false})
```

Returns a promise for a [collection][] of [Asset][] objects.

### ContentType properties

Each content type defines a schema for entries in it's `fields` array. Every
entry has a corresponding content type, and it's _own_ `fields` property, which
is an object. The allowed keys and values in an entries `fields` object
correspond to the field ids defined in that entries content type.

A complete content type (the one created in [create-content-type][]) looks like:

```js
{
  "name": "Blog Post",
  "fields": [
    { "id": "title", "name": "Title", "type": "Text" },
    { "id": "body", "name": "Body", "type": "Text" }
  ],
  "sys": {
    "id": "blog-post",
    "type": "ContentType",
    "space": {
      "sys": { "type": "Link", "linkType": "Space", "id": "7daovfk1olns" }
    },
    "createdAt": "2013-09-22T21:42:00.184Z",
    "createdBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    },
    "version": 1,
    "updatedAt": "2013-09-22T21:42:00.187Z",
    "updatedBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    }
  }
}
```

### Entry properties

An entry is a piece of content containing fields and values. Every entry has a
corresponding content type (denoted by it's `sys.contentType` property) that
defines what keys are allowed in it's `fields` property, and what types those
keys can contain. Note that field values are always nested in an object whose
keys correspond to the locales available in a space.

```js
{
  "fields": {
    "title": { "en-US": "Hello, World!" },
    "body": { "en-US": "Bacon is healthy!" }
  },
  "sys": {
    "id": "hello-world",
    "type": "Entry",
    "space": {
      "sys": { "type": "Link", "linkType": "Space", "id": "7daovfk1olns" }
    },
    "createdAt": "2013-09-22T23:05:03.271Z",
    "createdBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    },
    "contentType": {
      "sys": { "type": "Link", "linkType": "ContentType", "id": "blog-post" }
    },
    "version": 1,
    "updatedAt": "2013-09-22T23:05:03.271Z",
    "updatedBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    }
  }
}
```

### Asset properties

An asset is special kind of entry containing metadata for a binary file (e.g. an
image or video). Note that asset files have multiple states.

```js
{
  "fields": {
    "title": { "en-US": "Dinosaurs" },
    "file": { "en-US": { /* See comments regarding asset file states below */ } }
  },
  "sys": {
    "id": "dinosaurs",
    "type": "Asset",
    "space": {
      "sys": { "type": "Link", "linkType": "Space", "id": "7daovfk1olns" }
    },
    "createdAt": "2013-09-22T23:05:03.271Z",
    "createdBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    },
    "version": 1,
    "updatedAt": "2013-09-22T23:05:03.271Z",
    "updatedBy": {
      "sys": { "type": "Link", "linkType": "User", "id": "0lEP0wVJL8WSQSbRuVUdcJ" }
    }
  }
}
```

#### Asset file states

Assets may contain references to multiple files (one for each locale of their
space) and each one of those files may be in one of three states: "new",
"ready to process", or "processed".

To determine the state of an asset file, you can test for the presence of
`fields.file[locale].upload` and `fields.file[locale].url`. If the `url`
property is set, then the file has already been processed. If the `url` property
is not set, but the `upload` property is, you can attempt processing of the
file.

If neither property is present, the `upload` property must be set to a valid
publically accessible URL before calling [Space#processAssetFile][process-asset].

Note that an asset with unprocessed files can not be published.

### Query Examples

You can filter & search the entries and assets in your space by passing query
params to [`Space#getEntries`](#spacegetentriesquery---entrycollectionpromise)
and [`Space#getAssets`](#spacegetassetsquery---assetcollectionpromise). There are
a few predefined query parameter names (such as `content_type` and `order`), and
you can also query against document properties by using a dot-separated property
path (followed by an optional operator in square brackets) as a query parameter
name.

For example: `fields.name[ne]` means "entries where `fields.name` is not-equal
to ...". Full documentation of the allowed query parameters & field operators
can be found in [our API Documentation][search-parameters], but below are some
examples of common queries to get you started:

Search entries that have been updated since the 1st of January, 2013:

```js
space.getEntries({ 'sys.updatedAt[gte]': '2013-01-01T00:00:00Z' })
```

Retrieve a specific set of entries by their `sys.id`:

```js
space.getEntries({ 'sys.id[in]': [ 'finn', 'jake' ] })
```

Search for `cat` entries that have less than three lives left:

```js
space.getEntries({
  'content_type': 'cat',
  'fields.lives[lt]': 3
})
```

> Specifying the `content_type` query parameter is _required_ when querying on
> fields (such as `fields.lives` above). Note that `'cat'` is the content type
> **ID** and not it's name.

Full-text search for entries with "bacon" anywhere in their textual content:

```js
space.getEntries({ query: 'bacon' })
```

Full-text search for dogs with "bacon" specifically in the `description` field:

```js
space.getEntries({
  'content_type': 'dog',
  'fields.description[match]': 'bacon'
})
```

Get the 50 most recently created entries, and the next 50:

```js
space.getEntries({
  order: '-sys.createdAt',
  limit: 50
})

space.getEntries({
  order: '-sys.createdAt',
  skip: 50,
  limit: 50
})
```

See also: [Collections and pagination][collection].

### Collections and pagination

Many methods return collections of resources. These collections are represented
as a JSON object containing items and pagination details:

```
{
  "sys": {
    "type": "Array"
  },
  "total": 1,    // Total number of items matching the query
  "skip": 0,     // Offset into the result set represented by this response
  "limit": 100,  // Effective limit on # of items returned in this response
  "items": [
    // Full representations of each item
  ]
}
```

The `getEntries` and `getAssets` methods both accept `limit`, `skip`, and
`order` as query parameters, allowing you to paginate through larger result
sets. Note that specifying a stable property (such as `'sys.createdAt'`) for
ordering results is recommended.

## Unit Tests

Set the following environment variables to valid values:
- `CONTENTFUL_ACCESS_TOKEN` - a valid access token value
- `CONTENTFUL_MANAGEMENT_HOSTNAME` - the Contentful host name (without protocol)

Then execute the unit tests:

``` sh
npm test
```

## License

MIT

[get-token]: https://www.contentful.com/developers/docs/references/authentication/#the-management-api
[search-parameters]: http://docs.contentfulcda.apiary.io/#reference/search-parameters
[collection]: #collections-and-pagination
[Space]: #space-api
[ContentType]: #contenttype-api
[Entry]: #entry-api
[Asset]: #asset-api
[process-asset]: #spaceprocessassetfile---promise
[create-content-type]: #spacecreatecontenttype---contenttypepromise
