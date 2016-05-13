import test from 'tape'
import {contentTypeMock, mockCollection} from '../utils/mocks'
import {wrapContentType, wrapContentTypeCollection} from '../../../lib/entities/content-type'

test('ContentType is wrapped', (t) => {
  const wrappedContentType = wrapContentType(contentTypeMock)
  t.looseEqual(wrappedContentType.toPlainObject(), contentTypeMock)
  t.end()
})

test('ContentType collection is wrapped', (t) => {
  const contentTypeCollection = mockCollection(contentTypeMock)
  const wrappedContentType = wrapContentTypeCollection(contentTypeCollection)
  t.looseEqual(wrappedContentType.toPlainObject(), contentTypeCollection)
  t.end()
})
