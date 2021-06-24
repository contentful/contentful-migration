'use strict';

import { expect } from 'chai';

import { EntryDeriveAction } from '../../../../src/lib/action/entry-derive';
import OfflineApi from '../../../../src/lib/offline-api/index';
import { Entry } from '../../../../src/lib/entities/entry';
import makeApiEntry from '../../../helpers/make-api-entry';
import ContentType from '../../../../src/lib/entities/content-type';

describe('Entry Derive', function () {
  it('derives an entry from n to 1', async function () {
    const action = new EntryDeriveAction('dog', {
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType({
      sys: {
        id: 'dog'
      },
      fields: [{
        name: 'ownerRef',
        id: 'ownerRef',
        type: 'Symbol'
      }]
    })
    );

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();
    expect(batches[0].requests.length).to.eq(4);
    const createTargetEntryFields = batches[0].requests[0].data.fields;
    const updateEntryWithLinkFields = batches[0].requests[2].data.fields;
    expect(createTargetEntryFields.firstName['en-US']).to.eq('john'); // target entry has first and last name
    expect(createTargetEntryFields.lastName['en-US']).to.eq('doe');
    expect(typeof updateEntryWithLinkFields.ownerRef['en-US'].sys).to.eq('object'); // request to update entry is n to 1 link
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.type).to.eq('Link');
    expect(updateEntryWithLinkFields.ownerRef['en-US'].sys.id).to.eq(batches[0].requests[0].data.sys.id); // id of linked object is same as id of target object
  });

  it('publishes all changed entries', async function () {
    const action = new EntryDeriveAction('dog', {
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType({
      sys: {
        id: 'dog'
      },
      fields: [{
        name: 'ownerRef',
        id: 'ownerRef',
        type: 'Symbol'
      }]
    })
    );

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();

    expect(batches[0].requests.length).to.eq(4);

    expect(batches[0].requests[1].method).to.eql('PUT');
    expect(batches[0].requests[1].url).to.eql('/entries/john-doe/published');

    expect(batches[0].requests[3].method).to.eql('PUT');
    expect(batches[0].requests[3].url).to.eql('/entries/246/published');
  });

  it('disable publishing of any entry', async function () {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
      },
      shouldPublish: false,
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType({
      sys: {
        id: 'dog'
      },
      fields: [{
        name: 'ownerRef',
        id: 'ownerRef',
        type: 'Symbol'
      }]
    })
    );

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();

    expect(batches[0].requests.length).to.eq(2);

    expect(batches[0].requests[0].data.sys.publishedVersion).to.eql(undefined);
    expect(batches[0].requests[0].data.sys.version).to.eql(0);
    expect(batches[0].requests[1].data.sys.publishedVersion).to.eql(undefined);
    expect(batches[0].requests[1].data.sys.version).to.eql(1);
  });

  it('preserves publish state of parent entry when is not published', async function () {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
      },
      shouldPublish: 'preserve',
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType({
      sys: {
        id: 'dog'
      },
      fields: [{
        name: 'ownerRef',
        id: 'ownerRef',
        type: 'Symbol'
      }]
    })
    );

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();

    expect(batches[0].requests.length).to.eq(2);

    expect(batches[0].requests[0].data.sys.publishedVersion).to.eql(undefined);
    expect(batches[0].requests[0].data.sys.version).to.eql(0);
    expect(batches[0].requests[1].data.sys.publishedVersion).to.eql(undefined);
    expect(batches[0].requests[1].data.sys.version).to.eql(1);
  });

  it('preserves publish state of parent entry when is published', async function () {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'ownerRef',
      derivedFields: ['firstName', 'lastName'],
      identityKey: async (fromFields) => {
        return fromFields.owner['en-US'].toLowerCase().replace(' ', '-');
      },
      shouldPublish: 'preserve',
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType({
      sys: {
        id: 'dog'
      },
      fields: [{
        name: 'ownerRef',
        id: 'ownerRef',
        type: 'Symbol'
      }]
    })
    );

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 2,
        publishedVersion: 1,
        fields: {
          owner: {
            'en-US': 'john doe'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();

    expect(batches[0].requests.length).to.eq(4);

    expect(batches[0].requests[1].method).to.eql('PUT');
    expect(batches[0].requests[1].url).to.eql('/entries/john-doe/published');

    expect(batches[0].requests[3].method).to.eql('PUT');
    expect(batches[0].requests[3].url).to.eql('/entries/246/published');
  });

  it('derives an entry from n to n', async function () {
    const action = new EntryDeriveAction('dog', {
      derivedContentType: 'owner',
      from: ['owner'],
      toReferenceField: 'owners',
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

    const contentTypes = new Map();
    contentTypes.set('dog', new ContentType(
      {
        sys: {
          id: 'dog'
        },
        name: 'dog content type',
        fields: [{
          name: 'owners',
          id: 'owners',
          type: 'Array',
          items: {
            type: 'Link',
            linkType: 'Entry'
          }
        },
        {
          id: 'owner',
          name: 'owner',
          type: 'Symbol',
          localized: true
        }
        ]
      }));

    const entries = [
      new Entry(makeApiEntry({
        id: '246',
        contentTypeId: 'dog',
        version: 1,
        fields: {
          owner: {
            'en-US': 'johnny depp'
          }
        }
      }))
    ];

    const api = new OfflineApi({ contentTypes, entries, locales: ['en-US'] });
    api.startRecordingRequests(null);
    await action.applyTo(api);
    api.stopRecordingRequests();
    const batches = await api.getRequestBatches();

    expect(batches[0].requests.length).to.eq(4);
    const createTargetEntryFields = batches[0].requests[0].data.fields;
    const updateEntryWithLinkFields = batches[0].requests[2].data.fields;
    expect(createTargetEntryFields.firstName['en-US']).to.eq('johnny'); // target entry has first and last name
    expect(createTargetEntryFields.lastName['en-US']).to.eq('depp');
    expect(typeof updateEntryWithLinkFields.owners['en-US'][0].sys).to.eq('object'); // request to update entry is n to n link
    expect(updateEntryWithLinkFields.owners['en-US'][0].sys.type).to.eq('Link');
    expect(updateEntryWithLinkFields.owners['en-US'][0].sys.id).to.eq(batches[0].requests[0].data.sys.id); // id of linked object is same as id of target object
  });
});
