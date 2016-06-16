import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapEditorInterface} from '../../../lib/entities/editor-interface'
import {
  entityWrappedTest,
  entityUpdateTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('editorInterface')
  }
}

test('Editor Interface is wrapped', (t) => {
  return entityWrappedTest(t, setup, {
    wrapperMethod: wrapEditorInterface
  })
})

test('ContentType update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapEditorInterface
  })
})

test('EditorInterface getControlForField with an existing fieldId', (t) => {
  t.plan(5)
  const {httpMock, entityMock} = setup()
  const editorInterface = wrapEditorInterface(httpMock, entityMock)
  const control = editorInterface.getControlForField('fieldId')
  t.ok(control, 'control object sould be there')
  t.ok(control.fieldId, 'should have a fieldId')
  t.ok(control.widgetId, 'should have a widgetId')
  t.equals(control.fieldId, 'fieldId')
  t.equals(control.widgetId, 'singleLine')
})

test('EditorInterface getControlForField without an existing fieldId', (t) => {
  t.plan(1)
  const {httpMock, entityMock} = setup()
  const editorInterface = wrapEditorInterface(httpMock, entityMock)
  const control = editorInterface.getControlForField('notThere')
  t.equals(control, null)
})
