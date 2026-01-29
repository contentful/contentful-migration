import fs from 'fs'
import path from 'path'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { getConfig } from '../../../../built/bin/lib/config'

// Mock contentful-management module with a factory that can be controlled
const mockCreateClientFn = vi.fn()
let useMock = false

vi.mock('contentful-management', async () => {
  const actual =
    await vi.importActual<typeof import('contentful-management')>('contentful-management')
  return {
    ...actual,
    createClient: (params: any, options?: any) => {
      // If mock has been configured, use it; otherwise use the real implementation
      if (useMock) {
        return mockCreateClientFn(params, options)
      }
      return actual.createClient(params, options)
    }
  }
})

// Import after mock is set up
import { createManagementClient } from '../../../../src/bin/lib/contentful-client'

// Ensure that when both tokens are defined, we first take the integration one
// This is mostly useful for local testing where both may be defined
delete process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

const fileConfig = {
  cmaToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN
}

describe('contentful-client', () => {
  beforeEach(() => {
    fs.writeFileSync(path.resolve('/tmp', '.contentfulrc.json'), JSON.stringify(fileConfig))
    vi.clearAllMocks()
    // Reset the mock flag so it uses the real client by default
    useMock = false
    mockCreateClientFn.mockReset()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    delete process.env.https_proxy
    delete process.env.HTTPS_PROXY
    delete process.env.http_proxy
    delete process.env.HTTP_PROXY
    delete process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  })

  it('can read the space', async () => {
    // This test uses the real client - no mocking needed
    const spaceName = 'contentful-migration'
    const clientConfig = Object.assign(
      {
        application: `contentful.migration-cli/0.0.0`
      },
      getConfig({})
    )
    const client = createManagementClient(clientConfig)
    const space = await client.space.get({ spaceId: SOURCE_TEST_SPACE })
    expect(space.name).toEqual(spaceName)
  })

  it('creates an https agent for proxies', () => {
    process.env.https_proxy = 'https://user:pass@myproxy.com:1337'

    useMock = true
    mockCreateClientFn.mockImplementation((params: any) => {
      expect(params.httpsAgent).toBeInstanceOf(HttpsProxyAgent)
      expect(params.httpsAgent.proxy.host).toEqual('myproxy.com')
      expect(params.httpsAgent.proxy.port).toEqual(1337)
      expect(params.httpsAgent.proxy.auth).toEqual('user:pass')
      return {} as any
    })

    createManagementClient({ application: 'contentful.migration-cli.integration-test/0.0.0' })
    expect(mockCreateClientFn).toHaveBeenCalled()
  })

  it('prefers command line option access token over env', () => {
    process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = 'foomybar'
    const expected = 'config-access-token'

    useMock = true
    mockCreateClientFn.mockImplementation((params: any) => {
      expect(params.accessToken).toEqual(expected)
      return {} as any
    })

    createManagementClient({
      application: 'contentful.migration-cli.integration-test/0.0.0',
      accessToken: expected
    })
    expect(mockCreateClientFn).toHaveBeenCalled()
  })

  it('requires application param to be set', () => {
    const invocation = () => createManagementClient({ accessToken: 'something-random' })
    expect(invocation).toThrow('specify the application name')
  })
})
