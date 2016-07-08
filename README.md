[![npm](https://img.shields.io/npm/v/contentful-management.svg)](https://www.npmjs.com/package/contentful-management)
[![Build Status](https://travis-ci.org/contentful/contentful-management.js.svg?branch=master)](https://travis-ci.org/contentful/contentful-management.js)
[![Coverage Status](https://coveralls.io/repos/github/contentful/contentful-management.js/badge.svg?branch=master)](https://coveralls.io/github/contentful/contentful-management.js?branch=master)
[![Dependency Status](https://david-dm.org/contentful/contentful-management.js.svg)](https://david-dm.org/contentful/contentful-management.js)
[![devDependency Status](https://david-dm.org/contentful/contentful-management.js/dev-status.svg)](https://david-dm.org/contentful/contentful-management.js#info=devDependencies)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm downloads](https://img.shields.io/npm/dm/contentful-management.svg)](http://npm-stat.com/charts.html?package=contentful-management)
Javascript SDK for [Contentful's](https://www.contentful.com) Content Management API.

# About

[Contentful](https://www.contentful.com) is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via a powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

## Features

- Content management and retrieval through Contentful's [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/).
- Built in rate limiting with recovery procedures
- Asset processing helpers

## Supported environments

Browsers and Node.js:
- Chrome
- Firefox
- IE11 / Edge
- Safari
- node.js (0.10, iojs-3.x, 4.x, 5.x)

Other browsers should also work, but at the moment we're only running automated tests on the browsers and Node.js versions specified above.

# Getting started

In order to get started with the Contentful Management JS SDK you'll need not only to install it, but also to get credentials which will allow you to have access to your content in Contentful.

## Installation

In node, using [npm](http://npmjs.org):

``` sh
npm install contentful-management
```

Or, if you'd like to use a standalone built file you can use the following script tag or just download it from [npmcdn](https://npmcdn.com), under the `browser-dist` directory:

``` html
<script src="https://npmcdn.com/contentful-management@latest/browser-dist/contentful-management.min.js"></script>
```
**It is not recommended to use the above URL for production.**

Using `contentful@latest` will always get you the latest version, but you can also specify a specific version number:

``` html
<script src="https://npmcdn.com/contentful-management@1.0.0/browser-dist/contentful-management.min.js"></script>
```

Check the [releases](https://github.com/contentful/contentful-management.js/releases) page to know which versions are available.

## Authentication

To get content from Contentful, an app should authenticate with an with an OAuth bearer token.

If you want to use this SDK for a simple tool or a local app that you won't redistribute or make available to other users, you can get an API key for the Management API at our [Authentication page](https://www.contentful.com/developers/docs/references/authentication/).

If you'd like to create an app which would make use of this SDK but that would be available for other users, where they could authenticate with their own Contentful credentials, make sure to also check out the section about [Creating an OAuth Application](https://www.contentful.com/developers/docs/references/authentication/#creating-an-oauth-20-application)

## Your first request

The following code snippet is the most basic one you can use to get some content from Contentful with this SDK:

```js
var contentful = require('contentful-management')
var client = contentful.createClient({
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'YOUR_ACCESS_TOKEN'
})

// This API call will request a space with the specified ID
client.getSpace('spaceId')
.then((space) => {
  // Now that we have a space, we can get entries from that space
  space.getEntries()
  .then((entries) => {
    console.log(entries.items)
  })

  // let's get a content type
  space.getContentType('product')
  .then((contentType) => {
    // and now let's update its name
    contentType.name = 'New Product'
    contentType.update()
    .then((updatedContentType) => {
      console.log('Update was successful')
    })
  })
})
```

You can try and change the above example at [Tonic](https://tonicdev.com/npm/contentful-management).

## Documentation/References

To help you get the most out of this SDK, we've prepared reference documentation, tutorials and other examples that will help you learn and understand how to use this library.

### Reference documentation

The [Contentful's JS SDK reference](https://contentful.github.io/contentful-management.js) documents what objects and methods are exposed by this library, what arguments they expect and what kind of data is returned.

Most methods also have examples which show you how to use them.

You can start by looking at the top level `contentfulManagement` namespace.

The `ContentfulClientAPI` namespace defines the methods at the Client level which allow you to create and get spaces.

The `ContentfulSpaceAPI` namespace defines the methods at the Space level which allow you to create and get entries, assets, content types and other possible entities.

The `Entry`, `Asset` and `ContentType` namespaces show you the instance methods you can use on each of these entities, once you retrieve them from the server.

    From version 1.0.0 onwards, you can access documentation for a specific version by visiting `https://contentful.github.io/contentful-management.js/contentful-management/<VERSION>`

### Contentful JavaScript resources

Check the [Contentful for JavaScript](https://www.contentful.com/developers/docs/javascript/) page for Tutorials, Demo Apps, and more information on other ways of using JavaScript with Contentful

### REST API reference

This library is a wrapper around our Contentful Management REST API. Some more specific details such as search parameters and pagination are better explained on the [REST API reference](https://www.contentful.com/developers/docs/references/content-management-api/), and you can also get a better understanding of how the requests look under the hood.

### Legacy contentful-management.js

For versions prior to 1.0.0, you can access documentation at [https://github.com/contentful/contentful-management.js/tree/legacy](https://github.com/contentful/contentful.js/tree/legacy)

## Versioning

This project strictly follows [Semantic Versioning](http://semver.org/) by use of [semantic-release](https://github.com/semantic-release/semantic-release).

This means that new versions are released automatically as fixes, features or breaking changes are released.

You can check the changelog on the [releases](https://github.com/contentful/contentful-management.js/releases) page.

## Migration from contentful-management.js 1.x and older

contentful.js 1.x was a major rewrite, with some API changes. While the base functionality remains the same, some method names have changed, as well as some internal behaviors.

See the [migration guide](MIGRATION.md) for more information.

## Support

If you have a problem with this library, please file an [issue](https://github.com/contentful/contentful-management.js/issues/new) here on Github.

If you have other problems with Contentful not related to this library, you can contact [Customer Support](https://support.contentful.com).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
