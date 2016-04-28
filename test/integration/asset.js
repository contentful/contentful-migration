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
}
