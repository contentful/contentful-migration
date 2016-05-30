# Migration to contentful-management.js 1.x from previous versions

__(May 30th, 2016)__

contentful.js 1.x was a major rewrite, with some API changes. While the base functionality remains the same, some method names have changed, as well as some internal behaviors.

The main change you should look out for, is the fact that some of the actions executed on objects you retrieve from the API (Entries, Assets, etc) now have instance methods on them to perform those actions (such as update or delete) rather than methods such as `updateEntry` on the space object.

This file lists the changes to the API and behavior, and how you should proceed to update your code.

For more specific details consult the [reference documentation](https://contentful.github.io/contentful-management.js/) for the current version.

Future releases will have any changes listed in the changelog on the [releases page](https://github.com/contentful/contentful-management.js/releases).

## Instance methods

The pre 1.x version of the SDK exposed a top level client object, from which you could create or get spaces. This space object then contained methods to perform all the actions that were possible on that space, such as creating entities (assets, entries, etc), updating them, deleting them, publishing them, etc.

The new version, works a bit differently. All the methods in the space object which retrieve or create entities (such as `space.createEntry` or `space.getEntry`) retrieve an object for that kind of entity. If you then perform actions such as update, delete, publish/unpublish or archive/unarchive, you perform them directly on methods on the entities. So if you'd get and update an Entry, it would look something like this:

```js
client.getSpace('spaceid', (space) => {
  space.getEntry('entryid', (entry) => {
    entry.fields.title['en-US'] = 'new value for title field'
    entry.update()
    .then((updatedEntry) => {
      console.log(updatedEntry.fields.title['en-US'])
    }, (err) => {
      console.log('oh no! we failed to update!', err)
    })
  })
})
```

Check out the new reference documentation to see what methods exist and on which objects and entities they are available.

## Format of collection replies

Before contentful-management.js 1.x, collection replies were essentially JavaScript Arrays with some additional properties (`total`, `skip` and `limit`) added to their prototypes.

Now, collection replies are Objects, with those same properties, and an additional `items` property containing an array with all the items returned. This is more similar to what is actually returned from the REST API.

## Class removal

Before contentful-management.js 1.x, the entities returned from the API such as Entries or Content Types were wrapped in prototype based classes.

From contentful-management.js 1.x this is not the case anymore.

The objects returned by the promises are now JavaScript Objects, which contain the relevant data and some helper methods.

You can get a plain version of this object with only the data by using the `toPlainObject()` method.

Also note that Date fields such as `sys.createdAt` are not turned into JavaScript `Date` objects anymore, and are now plain ISO-8601 strings.

## New features

Some new features were also added to this version:
- Status methods, such as `isPublished` or `isArchived`
- Asset processing wait
  - After creating an asset, it's necessary to call processing on this asset's file so that the file gets properly processed on Contentful's backend systems. In order to do this there are now two separate calls, `processForLocale` and `processForAllLocales`.
  - In the older SDK, the only way to know if an asset was ready would be to retrieve the asset again and check if the `upload` property had been removed and if an `url` property was now available.
  - The processing calls now do this for you on the background, so the promise only gets resolved when a successful verification call occurs.
- New API endpoints:
  - Webhooks
  - Roles
  - Space Memberships
  - API Keys
