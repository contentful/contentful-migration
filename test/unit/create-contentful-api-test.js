import test from 'blue-tape'
import sinon from 'sinon'

import {cloneMock} from './mocks'
import createContentfulApi, {__RewireAPI__ as createContentfulApiRewireApi} from '../../lib/create-contentful-api'

let entitiesMock

function setupWithData ({promise}) {
  entitiesMock = {
    space: {
      wrapSpace: sinon.stub(),
      wrapSpaceCollection: sinon.stub()
    }
  }
  createContentfulApiRewireApi.__Rewire__('entities', entitiesMock)
  const getStub = sinon.stub()
  const postStub = sinon.stub()
  const api = createContentfulApi({
    http: {
      get: getStub.returns(promise),
      post: postStub.returns(promise)
    }
  })
  return {api, getStub, postStub}
}

function teardown () {
  createContentfulApiRewireApi.__ResetDependency__('entities')
}

test('API call getSpaces', (t) => {
  t.plan(1)
  const data = {
    items: {
      sys: {
        id: 'id',
        type: 'Space'
      },
      name: 'name',
      locales: [ 'en-US' ]
    }
  }
  const {api} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.space.wrapSpaceCollection.returns(data)

  return api.getSpaces()
  .then((r) => {
    t.looseEqual(r, data)
    teardown()
  })
})

test('API call getSpaces fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setupWithData({
    promise: Promise.reject(error)
  })

  return api.getSpaces()
  .then(() => {}, (r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
})

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
  const error = cloneMock('error')
  const {api} = setupWithData({
    promise: Promise.reject(error)
  })

  return api.getSpace('spaceid')
  .then(() => {}, (r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
})

test('API call createSpace', (t) => {
  t.plan(3)
  const data = {
    sys: { id: 'id', type: 'Space' },
    name: 'name'
  }
  const {api, postStub} = setupWithData({
    promise: Promise.resolve({ data: data })
  })
  entitiesMock.space.wrapSpace.returns(data)

  return api.createSpace({name: 'name'}, 'orgid')
  .then((r) => {
    t.looseEqual(r, data, 'space is wrapped')
    t.looseEqual(postStub.args[0][1], {name: 'name'}, 'data is posted')
    t.equals(postStub.args[0][2].headers['X-Contentful-Organization'], 'orgid', 'orgid is specified in headers')
    teardown()
  })
})

test('API call createSpace fails', (t) => {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setupWithData({
    promise: Promise.reject(error)
  })

  return api.createSpace({})
  .then(() => {}, (r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
})
