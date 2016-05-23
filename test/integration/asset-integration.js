const TEST_IMAGE_SOURCE_URL = 'https://raw.githubusercontent.com/contentful/contentful-management.js/next/test/integration/fixtures/shiba-stuck-bush.jpg'

export function assetReadOnlyTests (t, space) {
  t.test('Gets assets with only images', (t) => {
    t.plan(1)
    return space.getAssets({
      mimetype_group: 'image'
    })
    .then((response) => {
      t.ok(response.items[0].fields.file['en-US'].contentType.match(/image/))
    })
  })

  t.test('Gets asset', (t) => {
    t.plan(2)
    return space.getAsset('1x0xpXu4pSGS4OukSyWGUK')
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.fields, 'fields')
    })
  })

  t.test('Gets assets', (t) => {
    t.plan(1)
    return space.getAssets()
    .then((response) => {
      t.ok(response.items, 'items')
    })
  })
}

export function assetWriteTests (t, space) {
  t.test('Create, process, update, publish, unpublish, archive, unarchive and delete asset', (t) => {
    t.plan(10)

    return space.createAsset({fields: {
      title: {'en-US': 'this is the title'},
      file: {'en-US': {
        contentType: 'image/jpeg',
        fileName: 'shiba-stuck.jpg',
        upload: TEST_IMAGE_SOURCE_URL
      }}
    }})
    .then((asset) => {
      t.equals(asset.fields.title['en-US'], 'this is the title', 'original title')
      return asset.processForLocale('en-US', {processingCheckWait: 1000})
      .then((processedAsset) => {
        t.ok(asset.isDraft(), 'asset is in draft')
        t.ok(processedAsset.fields.file['en-US'].url, 'file was uploaded')
        return processedAsset.publish()
        .then((publishedAsset) => {
          t.ok(publishedAsset.isPublished(), 'asset is published')
          publishedAsset.fields.title['en-US'] = 'title has changed'
          return publishedAsset.update()
          .then((updatedAsset) => {
            t.ok(updatedAsset.isUpdated(), 'asset is updated')
            t.equals(updatedAsset.fields.title['en-US'], 'title has changed', 'updated title')
            return updatedAsset.unpublish()
            .then((unpublishedAsset) => {
              t.ok(unpublishedAsset.isDraft(), 'asset is back in draft')
              return unpublishedAsset.archive()
              .then((archivedAsset) => {
                t.ok(archivedAsset.isArchived(), 'asset is archived')
                return archivedAsset.unarchive()
                .then((unarchivedAsset) => {
                  t.notOk(unarchivedAsset.isArchived(), 'asset is not archived anymore')
                  t.ok(unarchivedAsset.isDraft(), 'asset is back in draft')
                  return unarchivedAsset.delete()
                })
              })
            })
          })
        })
      })
    })
  })

  t.test('Create and process asset with multiple locales', (t) => {
    t.plan(2)

    return space.createAsset({fields: {
      title: {'en-US': 'this is the title'},
      file: {
        'en-US': {
          contentType: 'image/jpeg',
          fileName: 'shiba-stuck.jpg',
          upload: TEST_IMAGE_SOURCE_URL
        },
        'de-DE': {
          contentType: 'image/jpeg',
          fileName: 'shiba-stuck.jpg',
          upload: TEST_IMAGE_SOURCE_URL
        }
      }
    }})
    .then((asset) => {
      return asset.processForAllLocales({processingCheckWait: 1000})
      .then((processedAsset) => {
        t.ok(processedAsset.fields.file['en-US'].url, 'file en-US was uploaded')
        t.ok(processedAsset.fields.file['de-DE'].url, 'file de-DE was uploaded')
      })
    })
  })
}
