'use strict'

import { expect } from 'chai'
import { shouldPublishOrDefault, preservedOrForcedPublish } from '../../../../src/lib/utils/should-publish'

describe('shouldPublishOrDefault', () => {
  it('should return the default', () => {
    const result = shouldPublishOrDefault()
    expect(result).to.eql(false)
  })
  it('should return the passed param "preserve"', () => {
    const result = shouldPublishOrDefault('preserve')
    expect(result).to.eql('preserve')
  })
  it('should return the passed param false', () => {
    const result = shouldPublishOrDefault(false)
    expect(result).to.eql(false)
  })
  it('should return the passed param true', () => {
    const result = shouldPublishOrDefault(true)
    expect(result).to.eql(true)
  })
})

describe('preservedOrForcedPublish', () => {
  it('should force the publish', () => {
    const result = preservedOrForcedPublish(true, false)
    expect(result).to.eql(true)
  })
  it('should preserve the published state false', () => {
    const result = preservedOrForcedPublish('preserve', false)
    expect(result).to.eql(false)
  })
  it('should preserve the published state true', () => {
    const result = preservedOrForcedPublish('preserve', true)
    expect(result).to.eql(true)
  })
})
