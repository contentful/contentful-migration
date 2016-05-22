export default function assetTests (t, space) {
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

  t.test('Create, process, update, publish, unpublish, archive, unarchive and delete asset', (t) => {
    t.plan(7)

    return space.createAsset({fields: {
      title: {'en-US': 'this is the title'},
      file: {'en-US': {
        contentType: 'image/jpeg',
        fileName: 'shiba-stuck.jpg',
        upload: 'http://shiba.fr/wp-content/uploads/shiba-stuck-bush.jpg'
      }}
    }})
    .then((asset) => {
      t.equals(asset.fields.title['en-US'], 'this is the title', 'original title')
      return asset.processForLocale('en-US')
      .then((processedAsset) => {
        t.ok(processedAsset.fields.file['en-US'].url, 'file was uploaded')
        processedAsset.fields.title['en-US'] = 'title has changed'
        return processedAsset.update()
        .then((updatedAsset) => {
          t.equals(updatedAsset.fields.title['en-US'], 'title has changed', 'updated title')
          return updatedAsset.publish()
          .then((publishedAsset) => {
            t.ok(publishedAsset.sys.publishedVersion, 'has published version')
            return publishedAsset.unpublish()
            .then((unpublishedAsset) => {
              t.notOk(unpublishedAsset.sys.publishedVersion, 'published version is gone')
              return unpublishedAsset.archive()
              .then((archivedAsset) => {
                t.ok(archivedAsset.sys.archivedVersion, 'has archived version')
                return archivedAsset.unarchive()
                .then((unarchivedAsset) => {
                  t.notOk(unarchivedAsset.sys.archivedVersion, 'archived version is gone')
                  return unarchivedAsset.delete()
                })
              })
            })
          })
        })
      })
    })
  })

  // TODO make sure locale is created beforehand
  t.test('Create and process asset with multiple locales', (t) => {
    t.plan(2)

    return space.createAsset({fields: {
      title: {'en-US': 'this is the title'},
      file: {
        'en-US': {
          contentType: 'image/jpeg',
          fileName: 'shiba-stuck.jpg',
          upload: 'http://shiba.fr/wp-content/uploads/shiba-stuck-bush.jpg'
        },
        'de-DE': {
          contentType: 'image/jpeg',
          fileName: 'shiba-stuck.jpg',
          upload: 'http://shiba.fr/wp-content/uploads/shiba-stuck-bush.jpg'
        }
      }
    }})
    .then((asset) => {
      return asset.processForAllLocales()
      .then((processedAsset) => {
        t.ok(processedAsset.fields.file['en-US'].url, 'file en-US was uploaded')
        t.ok(processedAsset.fields.file['de-DE'].url, 'file de-DE was uploaded')
      })
    })
  })
}
