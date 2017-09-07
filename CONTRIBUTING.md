# Contributing

Hey there, nice to see you! :wave:

So you want to contribute? Awesome!

(Before jumping into the hard work, please make sure you discussed the idea in an issue beforehand.)

## Hints about integration tests

In order to run integration tests, you need to specify:

* a source space the tests are run against (`CONTENTFUL_INTEGRATION_SOURCE_SPACE`)
* a management token for the defined space (`CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN`)

```sh
CONTENTFUL_INTEGRATION_SOURCE_SPACE=<spaceId> \
CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN=CFPAT-xxx \
npm test
```
