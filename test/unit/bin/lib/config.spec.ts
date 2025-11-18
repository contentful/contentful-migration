/* eslint-disable semi */
import { beforeEach, describe, it, expect } from 'vitest'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { getConfig } from '../../../../src/bin/lib/config'

const fileConfig = {
  cmaToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN
}

function deleteRequireCache() {
  Object.keys(require.cache).forEach((key) => {
    delete require.cache[key]
  })
}

describe('Config', () => {
  beforeEach(() => {
    deleteRequireCache()
    writeFileSync(resolve('/tmp', '.contentfulrc.json'), JSON.stringify(fileConfig))
  })

  it('reads the contentfulrc.json', () => {
    const config = getConfig({})
    expect(config.accessToken).toEqual(process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN)
  })

  it('chooses cmaToken even if managementToken is provided as well', () => {
    writeFileSync(
      resolve('/tmp', '.contentfulrc.json'),
      JSON.stringify({ cmaToken: 'cmaToken', managementToken: 'managementToken' })
    )
    const config = getConfig({})
    expect(config.accessToken).toEqual('cmaToken')
  })

  it('picks up managementToken if no cmaToken is provided', () => {
    writeFileSync(
      resolve('/tmp', '.contentfulrc.json'),
      JSON.stringify({ managementToken: 'managementToken' })
    )
    const config = getConfig({})
    expect(config.accessToken).toEqual('managementToken')
  })

  it('prefers env config over contentfulrc.json', () => {
    const token = process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN

    process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = 'schnitzel'
    const config = getConfig({})
    expect(config.accessToken).toEqual('schnitzel')
    process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN = token
  })

  it('prefers handed in config over env config', () => {
    const config = getConfig({ accessToken: 'fooMyBar' })
    expect(config.accessToken).toEqual('fooMyBar')
  })

  it('exposes proxy and rawProxy from argv', () => {
    const config = getConfig({ proxy: 'https://foo.bar:443', rawProxy: true })
    expect(config.proxy).toEqual('https://foo.bar:443')
    expect(config.rawProxy).toBe(true)
  })

  it('exposes retryLimit from argv', () => {
    const config = getConfig({ retryLimit: 10 })
    expect(config.retryLimit).toBe(10)
  })

  it('exposes host from argv', () => {
    const config = getConfig({ host: 'https://foo.bar:443' })
    expect(config.host).toEqual('https://foo.bar:443')
  })

  it('validates retryLimit argument', () => {
    expect(() => getConfig({ retryLimit: -1 })).toThrow('retryLimit must be between 0 and 60')
    expect(() => getConfig({ retryLimit: 61 })).toThrow('retryLimit must be between 0 and 60')
  })

  it('exposes requestBatchSize from argv', () => {
    const config = getConfig({ requestBatchSize: 99 })
    expect(config.requestBatchSize).toBe(99)
  })

  it('always exposes a standard header', () => {
    const config = getConfig({})
    expect(config.headers).toHaveProperty('CF-Sequence')
  })

  it('exposes headers from argv', () => {
    const config = getConfig({ headers: { test: true } })
    expect(config.headers).toHaveProperty('test', true)
    expect(config.headers).toHaveProperty('CF-Sequence')
  })

  it('parses argv.header if provided', () => {
    const config = getConfig({ header: ['Accept   : application/json ', ' X-Header: 1'] })
    expect(config.headers).toHaveProperty('Accept', 'application/json')
    expect(config.headers).toHaveProperty('X-Header', '1')
    expect(config.headers).toHaveProperty('CF-Sequence')
  })
})
