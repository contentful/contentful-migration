# contentful-management.js

Javascript client for [Contentful's](https://www.contentful.com) Content Management API:

- [Documentation](https://www.contentful.com/developers/documentation/content-management-api)
- [Examples](#examples)
- [Create an access token for the Content Management API (need account)](https://www.contentful.com/developers/documentation/content-management-api/#getting-started)

## Install

In node, using [npm](http://npmjs.org):

``` sh
npm install contentful-management
```

Note: The next minor version release of `dist/contentful-management.min.js` will
be much smaller. Please use a package manager to keep your JS
dependencies up to date and get the newest version right when it's
ready!

## Usage

[Create an access token](https://www.contentful.com/developers/documentation/content-management-api/#getting-started) for the Content Management API first. Use it as the `accessToken` parameter when creating the client.

``` js
var contentful = require('contentful-management');

var client = contentful.createClient({
  // A valid access token for your user (see above on how to create a valid access token)
  accessToken: 'b4c0n73n7fu1',

  // Enable or disable SSL. Enabled by default.
  secure: true
});

var log = console.log.bind(console); // wat

// Get Space
client.getSpace('foobar').then(log, log);

// Get all Entries
client.getSpace('foobar').then(function(space) {
  return space.getEntries();
}).then(log, log);
```

For now, please check out the
[Content Management API documentation](https://www.contentful.com/developers/documentation/content-management-api)
to learn how the API and the JavaScript client work.

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

### Cloning a Space's Content Model

[View Source](example/mirror-content-model.js)

Note: Destination Space has to exist. It won't be created by the Script.

``` sh
$ example/mirror-content-model.js $CONTENTFUL_ACCESS_TOKEN $SOURCE_SPACE_ID $DEST_SPACE_ID
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
