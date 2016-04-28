import {filter, map} from 'lodash/collection'

export default function entryTests (t, space) {
  t.test('Gets entry', (t) => {
    t.plan(2)
    return space.getEntry('5ETMRzkl9KM4omyMwKAOki')
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.fields, 'fields')
    })
  })

  t.test('Gets entries', (t) => {
    t.plan(1)
    return space.getEntries()
    .then((response) => {
      t.ok(response.items, 'items')
    })
  })

  t.test('Gets entries with a limit parameter', (t) => {
    t.plan(2)
    return space.getEntries({
      limit: 2
    })
    .then((response) => {
      t.ok(response.items, 'items')
      t.equal(response.items.length, 2)
    })
  })

  t.test('Gets entries with a skip parameter', (t) => {
    t.plan(2)
    return space.getEntries({
      skip: 2
    })
    .then((response) => {
      t.ok(response.items, 'items')
      t.equal(response.skip, 2)
    })
  })

  t.test('Gets entries with content type query param', (t) => {
    t.plan(2)
    return space.getEntries({content_type: 'cat'})
    .then((response) => {
      t.equal(response.total, 3)
      t.looseEqual(map(response.items, 'sys.contentType.sys.id'), ['cat', 'cat', 'cat'])
    })
  })

  t.test('Gets entries with equality query', (t) => {
    t.plan(2)
    return space.getEntries({'sys.id': 'nyancat'})
    .then((response) => {
      t.equal(response.total, 1)
      t.equal(response.items[0].sys.id, 'nyancat')
    })
  })

  t.test('Gets entries with inequality query', (t) => {
    t.plan(2)
    return space.getEntries({'sys.id[ne]': 'nyancat'})
    .then((response) => {
      t.ok(response.total > 0)
      t.equal(filter(response.items, ['sys.id', 'nyancat']).length, 0)
    })
  })

  t.test('Gets entries with array equality query', (t) => {
    t.plan(2)
    return space.getEntries({
      content_type: 'cat',
      'fields.likes': 'lasagna'
    })
    .then((response) => {
      t.equal(response.total, 1)
      t.equal(filter(response.items[0].fields.likes['en-US'], (i) => i === 'lasagna').length, 1)
    })
  })

  t.test('Gets entries with array inequality query', (t) => {
    t.plan(2)
    return space.getEntries({
      content_type: 'cat',
      'fields.likes[ne]': 'lasagna'
    })
    .then((response) => {
      t.ok(response.total > 0)
      t.equal(filter(response.items[0].fields.likes['en-US'], (i) => i === 'lasagna').length, 0)
    })
  })

  t.test('Gets entries with inclusion query', (t) => {
    t.plan(3)
    return space.getEntries({'sys.id[in]': 'finn,jake'})
    .then((response) => {
      t.equal(response.total, 2)
      t.equal(filter(response.items, ['sys.id', 'finn']).length, 1)
      t.equal(filter(response.items, ['sys.id', 'jake']).length, 1)
    })
  })

  t.test('Gets entries with exclusion query', (t) => {
    t.plan(3)
    return space.getEntries({
      content_type: 'cat',
      'fields.likes[nin]': 'rainbows,lasagna'
    })
    .then((response) => {
      t.ok(response.total > 0)
      t.equal(filter(response.items[0].fields.likes['en-US'], (i) => i === 'lasagna').length, 0)
      t.equal(filter(response.items[0].fields.likes['en-US'], (i) => i === 'rainbows').length, 0)
    })
  })

  t.test('Gets entries with exists query', (t) => {
    t.plan(1)
    return space.getEntries({
      content_type: 'cat',
      'fields.likes[exists]': 'true'
    })
    .then((response) => {
      t.equal(map(response.items, 'fields.likes').length, response.total)
    })
  })

  t.test('Gets entries with inverse exists query', (t) => {
    t.plan(1)
    return space.getEntries({
      content_type: 'cat',
      'fields.likes[exists]': 'false'
    })
    .then((response) => {
      t.equal(map(response.items, 'fields.likes').length, 0)
    })
  })

  t.test('Gets entries with field link query', (t) => {
    t.plan(1)
    return space.getEntries({
      content_type: 'cat',
      'fields.bestFriend.sys.id': 'happycat'
    })
    .then((response) => {
      t.equal(response.items[0].sys.id, 'nyancat', 'returned entry has link to specified linked entry')
    })
  })

  t.test('Gets entries with gte range query', (t) => {
    t.plan(1)
    return space.getEntries({
      'sys.updatedAt[gte]': '2013-01-01T00:00:00Z'
    })
    .then((response) => {
      t.ok(response.total > 0)
    })
  })

  t.test('Gets entries with lte range query', (t) => {
    t.plan(1)
    return space.getEntries({
      'sys.updatedAt[lte]': '2013-01-01T00:00:00Z'
    })
    .then((response) => {
      t.equal(response.total, 0)
    })
  })

  t.test('Gets entries with full text search query', (t) => {
    t.plan(1)
    return space.getEntries({
      query: 'bacon'
    })
    .then((response) => {
      t.ok(response.items[0].fields.description['en-US'].match(/bacon/))
    })
  })

  t.test('Gets entries with full text search query on field', (t) => {
    t.plan(1)
    return space.getEntries({
      content_type: 'dog',
      'fields.description[match]': 'bacon pancakes'
    })
    .then((response) => {
      t.ok(response.items[0].fields.description['en-US'].match(/bacon/))
    })
  })

  t.test('Gets entries with location proximity search', (t) => {
    t.plan(2)
    return space.getEntries({
      content_type: '1t9IbcfdCk6m04uISSsaIK',
      'fields.center[near]': '38,-122'
    })
    .then((response) => {
      t.ok(response.items[0].fields.center['en-US'].lat, 'has latitude')
      t.ok(response.items[0].fields.center['en-US'].lon, 'has longitude')
    })
  })

  t.test('Gets entries with location in bounding object', (t) => {
    t.plan(2)
    return space.getEntries({
      content_type: '1t9IbcfdCk6m04uISSsaIK',
      'fields.center[within]': '40,-124,36,-120'
    })
    .then((response) => {
      t.ok(response.items[0].fields.center['en-US'].lat, 'has latitude')
      t.ok(response.items[0].fields.center['en-US'].lon, 'has longitude')
    })
  })

  t.test('Gets entries by creation order', (t) => {
    t.plan(1)
    return space.getEntries({
      order: 'sys.createdAt'
    })
    .then((response) => {
      t.ok(response.items[0].sys.createdAt < response.items[1].sys.createdAt)
    })
  })

  t.test('Gets entries by inverse creation order', (t) => {
    t.plan(1)
    return space.getEntries({
      order: '-sys.createdAt'
    })
    .then((response) => {
      t.ok(response.items[0].sys.createdAt > response.items[1].sys.createdAt)
    })
  })

  /**
   * This test checks if entries can be ordered by two properties. The first
   * property (in this case version) takes priority. The test checks if two
   * entries with the same version are ordered by the second property, id.
   * It also checks if the entry which comes before these two has a lower version.
   *
   * It's a slightly fragile test as it can break if any of the entries are
   * updated and republished.
   */
  t.test('Gets entries by creation order and id order', (t) => {
    t.plan(5)
    return space.getEntries({
      order: 'sys.version,sys.id'
    })
    .then((response) => {
      t.ok(response.items[3].sys.version < response.items[4].sys.version, 'version of entry with index 4 is higher than the one of index 3')
      t.equal(response.items[4].sys.version, response.items[5].sys.version, 'entries of indexes 4 and 5 have the same version')
      t.equal(response.items[4].sys.version, 11, 'version for entry with index 4')
      t.equal(response.items[5].sys.version, 11, 'version for entry with index 5')
      t.ok(response.items[4].sys.id < response.items[5].sys.id, 'the entries with the same version are ordered by id')
    })
  })
}
