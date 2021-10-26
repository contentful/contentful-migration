# Contributing

Hey there, nice to see you! :wave:

So you want to contribute? Awesome!

(Before jumping into the hard work, please make sure you discussed the idea in an issue beforehand.)

## A note about the programming language

Most of the codebase is written with [Typescript](https://www.typescriptlang.org/) (there are some bits pending in Javascript). This means that the code has to be transpiled before running and that you have to run `npm run build` before trying out your changes to the CLI.

Don't worry if this is your first time with Typescript. The language reads like Javascript only that it is annotated with types and you're not forced to type every expression. For a quickstart tutorial you could look at [Typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) from the creators of the language.

## Hints about integration tests

In order to run integration tests, you need:

* a source space the tests are run against (`CONTENTFUL_SPACE_ID`) and is called `contentful-migration`
* a management token for the defined space (`CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN`)

```sh
CONTENTFUL_SPACE_ID=<spaceId> \
CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN=CFPAT-xxx \
npm test
```

