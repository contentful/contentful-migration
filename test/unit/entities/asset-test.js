import test from 'tape'
import {assetMock, mockCollection} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapAsset, wrapAssetCollection} from '../../../lib/entities/asset'

function setup () {
  return {
    httpMock: setupHttpMock()
  }
}

test('Asset is wrapped', (t) => {
  const {httpMock} = setup()
  const wrappedAsset = wrapAsset(httpMock, assetMock)
  t.looseEqual(wrappedAsset.toPlainObject(), assetMock)
  t.end()
})

test('Asset collection is wrapped', (t) => {
  const {httpMock} = setup()
  const assetCollection = mockCollection(assetMock)
  const wrappedAsset = wrapAssetCollection(httpMock, assetCollection)
  t.looseEqual(wrappedAsset.toPlainObject(), assetCollection)
  t.end()
})
