import { Entry } from '../../../../src/lib/entities/entry';
import makeApiEntry from '../../../helpers/make-api-entry';

const { expect } = require('chai');

it('does not add metadata to default entry or pass it down to its clone', () => {
  const sampleEntry = new Entry(makeApiEntry({
    id: '246',
    contentTypeId: 'dog',
    version: 1,
    fields: {
      name: {
        'en-US': 'bob',
        hawaii: 'haukea'
      }
    }
  }));

  const cloneEntry = sampleEntry.clone();

  expect(sampleEntry.tags).to.eql(undefined);
  expect(sampleEntry.toApiEntry()).not.to.have.property('metadata');

  expect(cloneEntry.tags).to.eql(undefined);
  expect(cloneEntry.toApiEntry()).not.to.have.property('metadata');
});
