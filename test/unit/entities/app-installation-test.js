import test from 'blue-tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapAppInstallation, wrapAppInstallationCollection} from '../../../lib/entities/app-installation'

import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  failingVersionActionTest,
  entityDeleteTest,
  failingActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('appInstallation')
  }
}

test('AppInstallation is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapAppInstallation
  })
})

test('AppInstallation collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapAppInstallationCollection
  })
})

test('AppInstallation update', (t) => {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapAppInstallation(httpMock, entityMock)
  entity.name = 'updatedname'
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][1].name, 'updatedname', 'data is sent')
      return {httpMock, entityMock, response}
    })
})

test('AppInstallation update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapAppInstallation,
    actionMethod: 'update'
  })
})

test('AppInstallation delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapAppInstallation
  })
})

test('AppInstallation delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapAppInstallation,
    actionMethod: 'delete'
  })
})
