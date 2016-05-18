import test from 'tape'
import {cloneMock, mockCollection} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapContentType, wrapContentTypeCollection} from '../../../lib/entities/content-type'

function setup () {
  return {
    httpMock: setupHttpMock()
  }
}

test('ContentType is wrapped', (t) => {
  const {httpMock} = setup()
  const wrappedContentType = wrapContentType(httpMock, contentTypeMock)
  t.looseEqual(wrappedContentType.toPlainObject(), contentTypeMock)
  t.end()
})

test('ContentType collection is wrapped', (t) => {
  const {httpMock} = setup()
  const contentTypeCollection = mockCollection(contentTypeMock)
  const wrappedContentType = wrapContentTypeCollection(httpMock, contentTypeCollection)
  t.looseEqual(wrappedContentType.toPlainObject(), contentTypeCollection)
  t.end()
})
