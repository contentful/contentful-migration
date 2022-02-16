import { expect } from 'chai'
import { Entry } from '../../../../src/lib/entities/entry'
import shouldPublishLocalChanges from '../../../../src/lib/utils/should-publish-local-changes'
import makeApiEntry from '../../../helpers/make-api-entry'

function entry (version, publishedVersion) {
  return new Entry(
    makeApiEntry({
      id: '246',
      contentTypeId: 'dog',
      version,
      publishedVersion,
      fields: {
        name: {
          'en-US': 'bob',
          hawaii: 'haukea'
        }
      }
    })
  )
}

describe('A shouldPublish util function', function () {
  it('returns true if explicitly set', () => {
    expect(shouldPublishLocalChanges(true, entry(1, 1))).to.eql(true)
  })

  it('returns false if explicitly set', () => {
    expect(shouldPublishLocalChanges(false, entry(1, 1))).to.eql(false)
  })

  it('returns false for "preserve" and pending remote changes', () => {
    expect(shouldPublishLocalChanges('preserve', entry(4, 1))).to.eql(false)
    expect(shouldPublishLocalChanges('preserve', entry(5, 1))).to.eql(false)
  })

  it('returns true for "preserve" and no pending remote changes', () => {
    expect(shouldPublishLocalChanges('preserve', entry(2, 1))).to.eql(true)
  })

  it('returns false if shouldPublish is not defined', () => {
    expect(shouldPublishLocalChanges(undefined, entry(2, 1))).to.eql(false)
    expect(shouldPublishLocalChanges(undefined, entry(5, 1))).to.eql(false)
  })
})
