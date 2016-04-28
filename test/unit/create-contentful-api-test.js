import test from 'blue-tape'
import sinon from 'sinon'

import createContentfulApi, {__RewireAPI__ as createContentfulApiRewireApi} from '../../lib/create-contentful-api'

let entitiesMock

function setupWithData ({promise}) {
  entitiesMock = {
    space: {
      wrapSpace: sinon.stub()
    }
  }
  createContentfulApiRewireApi.__Rewire__('entities', entitiesMock)
  const getStub = sinon.stub()
  const api = createContentfulApi({
    http: {
      get: getStub.returns(promise)
    }
  })
  return {api, getStub}
}

function teardown () {
  createContentfulApiRewireApi.__ResetDependency__('entities')
}

test('API call getSpace', (t) => {
  t.plan(1)
  const data = {
    sys: {
      id: 'id',
      type: 'Space'
    },
    name: 'name',
    locales: [ 'en-US' ]
  }
  const {api} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.space.wrapSpace.returns(data)

  return api.getSpace('spaceid')
  .then((r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getSpace fails', (t) => {
  t.plan(1)
  const data = 'error'
  const {api} = setupWithData({
    promise: Promise.reject(data)
  })

  return api.getSpace('spaceid')
  .then(() => {}, (r) => {
    t.looseEqual(r, data)
    teardown()
  })
})
