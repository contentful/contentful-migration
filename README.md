# contentful-management.js

Javascript client for [Contentful's](https://www.contentful.com) Content Management API:

- [Documentation](https://www.contentful.com/developers/documentation/content-management-api)
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

#### Cloning a Space's Content Model

Note: Destination Space has to exist. It won't be created by the Script.

``` sh
$ example/mirror-content-model.js $CONTENTFUL_ACCESS_TOKEN $SOURCE_SPACE_ID $DEST_SPACE_ID
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
