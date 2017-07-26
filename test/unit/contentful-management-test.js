import test from 'tape'
import sinon from 'sinon'
import {createClient, __RewireAPI__ as createClientRewireApi} from '../../lib/contentful-management'

test('Throws if no accessToken is defined', (t) => {
  t.throws(() => {
    createClient({space: 'spaceid'})
  }, /Expected parameter accessToken/)
  t.end()
})

test('Passes along HTTP client parameters', (t) => {
  createClientRewireApi.__Rewire__('axios', {create: sinon.stub()})

  const createHttpClientStub = sinon.stub()
  createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
  createClientRewireApi.__Rewire__('createContentfulApi', sinon.stub().returns({}))

  const client = createClient({accessToken: 'accesstoken'})
  t.ok(createHttpClientStub.args[0][1].headers['Content-Type'], 'sets the content type')
  t.ok(client, 'returns a client')
  createClientRewireApi.__ResetDependency__('createHttpClient')
  createClientRewireApi.__ResetDependency__('wrapHttpClient')
  createClientRewireApi.__ResetDependency__('createContentfulApi')
  t.end()
})

test('Generate the correct User Agent Header', (t) => {
  createClientRewireApi.__Rewire__('axios', {create: sinon.stub()})

  const createHttpClientStub = sinon.stub()
  createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
  createClientRewireApi.__Rewire__('createContentfulApi', sinon.stub().returns({}))
  createClient({accessToken: 'accesstoken', application: 'myApplication/1.1.1', integration: 'myIntegration/1.0.0'})
  const headerParts = createHttpClientStub.args[0][1].headers['X-Contentful-User-Agent'].split('; ')
  t.equal(headerParts.length, 5)
  t.equal(headerParts[0], 'app myApplication/1.1.1')
  t.equal(headerParts[1], 'integration myIntegration/1.0.0')
  t.equal(headerParts[2], `sdk contentful-management.js/__VERSION__`)

  createClientRewireApi.__ResetDependency__('createHttpClient')
  createClientRewireApi.__ResetDependency__('wrapHttpClient')
  createClientRewireApi.__ResetDependency__('createContentfulApi')
  t.end()
})
