import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapUiExtension, wrapUiExtensionCollection} from '../../../lib/entities/ui-extension'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('uiExtension')
  }
}

test('UiExtension is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapUiExtension
  })
})

test('UiExtension collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapUiExtensionCollection
  })
})

test('UiExtension update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapUiExtension
  })
})

test('UiExtension update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapUiExtension,
    actionMethod: 'update'
  })
})

test('UiExtension delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapUiExtension
  })
})

test('UiExtension delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapUiExtension,
    actionMethod: 'delete'
  })
})
