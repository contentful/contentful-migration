'use strict';

const crypto = require('crypto');
const Bluebird = require('bluebird');
const _ = require('lodash');
const { createManagementClient } = require('../src/bin/lib/contentful-client');

const APPLICATION_NAME = `contentful.migration-cli;populate-space`;
const CONTENTFUL_TARGET_SPACE = process.env.CONTENTFUL_TARGET_SPACE;
const NUMBER_OF_ENTRIES = 500;

if (!CONTENTFUL_TARGET_SPACE) {
  throw new Error('Empty or undefined $CONTENTFUL_TARGET_SPACE env variable');
}

const client = createManagementClient({ application: APPLICATION_NAME });

const CONTENT_TYPE = {
  id: 'test-ct',
  payload: {
    name: 'Test CT',
    fields: [
      { name: 'name', type: 'Text', id: 'name', localized: true }
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
  const data = crypto.randomBytes(1024).toString('hex');
  const entry = {
    fields: {
      name: _.zipObject(locales, locales.map(() => data))
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
  await maybeCreateLocales(localeCodes, spaceClient);
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

