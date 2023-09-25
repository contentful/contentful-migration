/* eslint-disable semi */
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { expect } from 'chai'
import { getConfig } from '../../../../src/bin/lib/config'

const fileConfig = {
  cmaToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN
}

function deleteRequireCache() {
  Object.keys(require.cache).forEach((key) => {
    delete require.cache[key]
  })
}

describe('Config', function () {
  beforeEach(function () {
    deleteRequireCache()
    writeFileSync(resolve('/tmp', '.contentfulrc.json'), JSON.stringify(fileConfig))
  })

  it('reads the contentfulrc.json', function () {
    const config = getConfig({})
    expect(config.accessToken).to.eql(process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN)
  })

  it('chooses cmaToken even if managementToken is provided as well', function () {
    writeFileSync(
      resolve('/tmp', '.contentfulrc.json'),
      JSON.stringify({ cmaToken: 'cmaToken', managementToken: 'managementToken' })
    )
    const config = getConfig({})
    expect(config.accessToken).to.eql('cmaToken')
  })

  it('picks up managementToken if no cmaToken is provided', function () {
    writeFileSync(
      resolve('/tmp', '.contentfulrc.json'),
      JSON.stringify({ managementToken: 'managementToken' })
    )
    const config = getConfig({})
    expect(config.accessToken).to.eql('managementToken')
  })

  it('prefers env config over contentfulrc.json', function () {
    const token = process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN

    process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = 'schnitzel'
    const config = getConfig({})
    expect(config.accessToken).to.eql('schnitzel')
    process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN = token
  })

  it('prefers handed in config over env config', function () {
    const config = getConfig({ accessToken: 'fooMyBar' })
    expect(config.accessToken).to.eql('fooMyBar')
  })

  it('exposes proxy and rawProxy from argv', function () {
    const config = getConfig({ proxy: 'https://foo.bar:443', rawProxy: true })
    expect(config.proxy).to.eql('https://foo.bar:443')
    expect(config.rawProxy).to.eql(true)
  })

  it('exposes retryLimit from argv', function () {
    const config = getConfig({ retryLimit: 10 })
    expect(config.retryLimit).to.eql(10)
  })

  it('exposes host from argv', function () {
    const config = getConfig({ host: 'https://foo.bar:443' })
    expect(config.host).to.eql('https://foo.bar:443')
  })

  it('validates retryLimit argument', function () {
    expect(() => getConfig({ retryLimit: -1 })).to.throw(
      Error,
      'retryLimit must be between 0 and 60'
    )
    expect(() => getConfig({ retryLimit: 61 })).to.throw(
      Error,
      'retryLimit must be between 0 and 60'
    )
  })

  it('exposes requestBatchSize from argv', function () {
    const config = getConfig({ requestBatchSize: 99 })
    expect(config.requestBatchSize).to.eql(99)
  })

  it('always exposes a standard header', function () {
    const config = getConfig({})
    expect(config.headers).to.have.property('CF-Sequence')
  })

  it('exposes headers from argv', function () {
    const config = getConfig({ headers: { test: true } })
    expect(config.headers).to.have.property('test', true)
    expect(config.headers).to.have.property('CF-Sequence')
  })

  it('parses argv.header if provided', function () {
    const config = getConfig({ header: ['Accept   : application/json ', ' X-Header: 1'] })
    expect(config.headers).to.have.property('Accept', 'application/json')
    expect(config.headers).to.have.property('X-Header', '1')
    expect(config.headers).to.have.property('CF-Sequence')
  })
})
