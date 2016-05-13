import test from 'tape'
import {assetMock, mockCollection} from '../utils/mocks'
import {wrapAsset, wrapAssetCollection} from '../../../lib/entities/asset'

test('Asset is wrapped', (t) => {
  const wrappedAsset = wrapAsset(assetMock)
  t.looseEqual(wrappedAsset.toPlainObject(), assetMock)
  t.end()
})

test('Asset collection is wrapped', (t) => {
  const assetCollection = mockCollection(assetMock)
  const wrappedAsset = wrapAssetCollection(assetCollection)
  t.looseEqual(wrappedAsset.toPlainObject(), assetCollection)
  t.end()
})
