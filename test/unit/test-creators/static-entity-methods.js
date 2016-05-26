import upperFirst from 'lodash/upperFirst'
import {cloneMock} from '../mocks/entities'

export function makeGetEntityTest (t, setup, teardown, {entityType, mockToReturn, methodToTest, wrapperSuffix = ''}) {
  t.plan(1)
  const {api, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock[entityType][`wrap${upperFirst(entityType)}${wrapperSuffix}`]
  .returns(mockToReturn)

  return api[methodToTest]('eid')
  .then((r) => {
    t.looseEqual(r, mockToReturn)
    teardown()
  })
}

export function makeGetCollectionTest (t, setup, teardown, {entityType, mockToReturn, methodToTest}) {
  makeGetEntityTest(t, setup, teardown, {
    entityType: entityType,
    mockToReturn: {
      total: 100,
      skip: 0,
      limit: 10,
      items: [mockToReturn]
    },
    methodToTest: methodToTest,
    wrapperSuffix: 'Collection'
  })
}

export function makeEntityMethodFailingTest (t, setup, teardown, {methodToTest}) {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api[methodToTest]('eid')
  .then(() => {}, (r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
}

export function makeCreateEntityTest (t, setup, teardown, {entityType, mockToReturn, methodToTest}) {
  t.plan(2)
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock[entityType][`wrap${upperFirst(entityType)}`]
  .returns(mockToReturn)

  return api[methodToTest](mockToReturn)
  .then((r) => {
    t.looseEqual(r, mockToReturn)
    t.looseEqual(httpMock.post.args[0][1], mockToReturn, 'data is sent')
    teardown()
  })
}

export function makeCreateEntityWithIdTest (t, setup, teardown, {entityType, entityPath, mockToReturn, methodToTest}) {
  t.plan(3)
  const id = 'entityId'
  const {api, httpMock, entitiesMock} = setup(Promise.resolve({}))
  entitiesMock[entityType][`wrap${upperFirst(entityType)}`]
  .returns(mockToReturn)

  return api[methodToTest](id, mockToReturn)
  .then((r) => {
    t.looseEqual(r, mockToReturn)
    t.equals(httpMock.put.args[0][0], entityPath + '/' + id, 'specified id is sent')
    t.looseEqual(httpMock.put.args[0][1], mockToReturn, 'data is sent')
    teardown()
  })
}
