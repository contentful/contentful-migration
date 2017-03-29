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
  createClientRewireApi.__Rewire__('version', 'version')
  createClientRewireApi.__Rewire__('axios', {create: sinon.stub()})

  const createHttpClientStub = sinon.stub()
  createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
  createClientRewireApi.__Rewire__('createContentfulApi', sinon.stub().returns({}))

  const client = createClient({accessToken: 'accesstoken'})
  t.ok(createHttpClientStub.args[0][1].headers['Content-Type'], 'sets the content type')
  t.equals(createHttpClientStub.args[0][1].headers['X-Contentful-User-Agent'], 'contentful-management.js/version', 'sets the user agent header')
  t.ok(client, 'returns a client')
  createClientRewireApi.__ResetDependency__('createHttpClient')
  createClientRewireApi.__ResetDependency__('wrapHttpClient')
  createClientRewireApi.__ResetDependency__('createContentfulApi')
  t.end()
})
