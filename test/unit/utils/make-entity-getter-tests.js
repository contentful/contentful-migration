import {upperFirst} from 'lodash/string'
import {cloneMock} from './mocks'

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

export function makeGetEntityFailingTest (t, setup, teardown, {methodToTest}) {
  t.plan(1)
  const error = cloneMock('error')
  const {api} = setup(Promise.reject(error))

  return api[methodToTest]('eid')
  .then(() => {}, (r) => {
    t.equals(r.name, '404 Not Found')
    teardown()
  })
}
