import test from 'blue-tape'

import {spaceMock, setupEntitiesMock} from './mocks/entities'
import setupHttpMock from './mocks/http'
import createContentfulApi, {__RewireAPI__ as createContentfulApiRewireApi} from '../../lib/create-contentful-api'
import {makeGetEntityTest, makeGetCollectionTest, makeEntityMethodFailingTest} from './test-creators/static-entity-methods'

function setup (promise) {
  const entitiesMock = setupEntitiesMock(createContentfulApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const api = createContentfulApi({ http: httpMock })
  return {
    api,
    httpMock,
    entitiesMock
  }
}

function teardown () {
  createContentfulApiRewireApi.__ResetDependency__('entities')
}

test('API call getSpaces', (t) => {
  makeGetCollectionTest(t, setup, teardown, {
    entityType: 'space',
    mockToReturn: spaceMock,
    methodToTest: 'getSpaces'
  })
})

test('API call getSpaces fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getSpaces'
  })
})

test('API call getSpace', (t) => {
  makeGetEntityTest(t, setup, teardown, {
    entityType: 'space',
    mockToReturn: spaceMock,
    methodToTest: 'getSpace'
  })
})

test('API call getSpace fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'getSpace'
  })
})

test('API call createSpace', (t) => {
  t.plan(3)
  const data = {
    sys: { id: 'id', type: 'Space' },
    name: 'name'
  }
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({ data: data }))
  entitiesMock.space.wrapSpace.returns(data)

  return api.createSpace({name: 'name'}, 'orgid')
  .then((r) => {
    t.looseEqual(r, data, 'space is wrapped')
    t.looseEqual(httpMock.post.args[0][1], {name: 'name'}, 'data is sent')
    t.equals(httpMock.post.args[0][2].headers['X-Contentful-Organization'], 'orgid', 'orgid is specified in headers')
    teardown()
  })
})

test('API call createSpace fails', (t) => {
  makeEntityMethodFailingTest(t, setup, teardown, {
    methodToTest: 'createSpace'
  })
})
