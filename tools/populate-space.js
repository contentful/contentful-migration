'use strict';

const Bluebird = require('bluebird');
const _ = require('lodash');
const { createManagementClient } = require('../built/bin/lib/contentful-client');
const chance = require('chance').Chance();

const dog = require('./fake-data/dog.json');

const owners = _.times(30, () => chance.name());

chance.mixin({
  'breed': function () {
    const index = _.random(0, dog.breed.length - 1);
    return dog.breed[index];
  },
  'dogName': function () {
    const index = _.random(0, dog.name.length - 1);
    return dog.name[index];
  },
  'owner': function () {
    const index = _.random(0, owners.length - 1);
    return owners[index];
  }
});

const APPLICATION_NAME = `contentful.migration-cli;populate-space`;
const CONTENTFUL_TARGET_SPACE = process.env.CONTENTFUL_TARGET_SPACE;
const NUMBER_OF_ENTRIES = parseInt(process.env.ENTRIES, 10) || 500;

if (!CONTENTFUL_TARGET_SPACE) {
  throw new Error('Empty or undefined $CONTENTFUL_TARGET_SPACE env variable');
}

const client = createManagementClient({ application: APPLICATION_NAME });

const CONTENT_TYPE = {
  id: 'dog',
  payload: {
    name: 'Dog',
    description: 'Dogs and why their owners love them',
    fields: [
      { name: 'Name', type: 'Symbol', id: 'name' },
      { name: 'Breed', type: 'Symbol', id: 'breed' },
      { name: 'Age', type: 'Number', id: 'age' },
      { name: 'Why I love it', type: 'Text', id: 'loveLetter', localized: true },
      { name: 'Owner', type: 'Symbol', id: 'owner' }
    ]
  }
};

function makeLocaleCodes (n) {
  const locales = [];
  for (let i = 0; i < n; i++) {
    locales.push('locale' + i);
  }
  return locales;
}

async function makeEntry (locales, spaceClient) {
  const name = chance.dogName();
  const breed = chance.breed();
  const age = chance.age({ type: 'child' });

  const owner = chance.owner();

  // const entryLocales = ['en-US', ...locales]

  // const loveLetterField = _.zipObject(entryLocales, entryLocales.map(() => chance.paragraph({ sentences: 10 })));

  const entry = {
    fields: {
      name: { 'en-US': name },
      breed: { 'en-US': breed },
      age: { 'en-US': age },
      owner: { 'en-US': owner },
      loveLetter: {
        'en-US': chance.paragraph({ sentences: 10 }),
        'de': chance.paragraph({ sentences: 10 })
      }
    }
  };

  return spaceClient.createEntry(CONTENT_TYPE.id, entry);
}

async function maybeCreateContentType (spaceClient) {
  try {
    await spaceClient.getContentType(CONTENT_TYPE.id);
  } catch (e) {
    const details = JSON.parse(e.message);

    if (details.status === 404) {
      const contentType = await spaceClient.createContentTypeWithId(CONTENT_TYPE.id, CONTENT_TYPE.payload);

      return contentType.publish();
    }

    throw e;
  }
}

async function maybeCreateLocales (localeCodes, spaceClient) {
  const { items: existing } = await spaceClient.getLocales();
  const currentLocaleIds = existing.map((l) => l.code);
  const difference = _.difference(localeCodes, currentLocaleIds);

  await Promise.all(difference, (localeCode) => {
    return spaceClient.createLocale({
      code: localeCode,
      name: localeCode
    });
  });
}

async function run () {
  const spaceClient = await client.getSpace(CONTENTFUL_TARGET_SPACE);
  const localeCodes = makeLocaleCodes(20);
  // await maybeCreateLocales(localeCodes, spaceClient);
  await maybeCreateContentType(spaceClient);

  let pending = NUMBER_OF_ENTRIES;

  await Bluebird.map(new Array(NUMBER_OF_ENTRIES), async () => {
    await makeEntry(localeCodes, spaceClient);

    pending = pending - 1;

    console.log(`Pending ${pending}`);
  }, { concurrency: 10 });
}

(async function () {
  await run();
})();

