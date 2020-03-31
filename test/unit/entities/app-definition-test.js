import test from 'blue-tape'
import {wrapAppDefinition, wrapAppDefinitionCollection} from '../../../lib/entities/app-definition'
import setupHttpMock from '../mocks/http'
import {cloneMock} from '../mocks/entities'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  failingVersionActionTest,
  entityDeleteTest,
  failingActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('apiKey')
  }
}

test('AppDefinition is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapAppDefinition
  })
})

test('AppDefinition collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapAppDefinitionCollection
  })
})

test('AppDefinition update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapAppDefinition
  })
})

test('AppDefinition update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapAppDefinition,
    actionMethod: 'update'
  })
})

test('AppDefinition delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapAppDefinition
  })
})

test('AppDefinition delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapAppDefinition,
    actionMethod: 'delete'
  })
})
