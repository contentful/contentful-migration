import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { expect } from 'chai'
import { getConfig } from '../../../../src/bin/lib/config'

const fileConfig = {
  cmaToken: process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN
}

describe('Config', function () {
  beforeEach(function () {
    writeFileSync(resolve('/tmp', '.contentfulrc.json'), JSON.stringify(fileConfig))
  })

  it('reads the contentfulrc.json', async function () {
    const config = getConfig({})
    expect(config.accessToken).to.eql(process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN)
  })

  it('prefers env config over contentfulrc.json', async function () {
    const token = process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN

    process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = 'schnitzel'
    const config = getConfig({})
    expect(config.accessToken).to.eql('schnitzel')
    process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN = token
  })

  it('prefers handed in config over env config', async function () {
    const config = getConfig({ accessToken: 'fooMyBar' })
    expect(config.accessToken).to.eql('fooMyBar')
  })

  it('exposes proxy and rawProxy from argv', function () {
    const config = getConfig({ proxy: 'https://foo.bar:443', rawProxy: true })
    expect(config.proxy).to.eql('https://foo.bar:443')
    expect(config.rawProxy).to.eql(true)
  })

  it('exposes requestBatchSize from argv', function () {
    const config = getConfig({ requestBatchSize: 99 })
    expect(config.requestBatchSize).to.eql(99)
  })

  it('exposes headers from argv', function () {
    const config = getConfig({ headers: { test: true } })
    expect(config.headers).to.eql({ test: true })
  })

  it('parses argv.header if provided', function () {
    const config = getConfig({ header: ['Accept   : application/json ', ' X-Header: 1'] })
    expect(config.headers).to.eql({ Accept: 'application/json', 'X-Header': '1' })
  })
})
