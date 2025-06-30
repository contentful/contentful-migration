const _ = require('lodash')
const Bluebird = require('bluebird')
const { makeRequest } = require('../helpers/client')
const { expect } = require('chai')
const record = require('../record')
const recorder = record('contentful-migration-integration')
const co = Bluebird.coroutine
before(recorder.before)
after(recorder.after)
const Fetcher = require('../../built/lib/fetcher').default

const ENVIRONMENT_ID = 'env-integration' + Date.now()

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('the fetcher', function () {
  this.timeout(30000)
  let request

  before(
    co(function* () {
      this.timeout(30000)
      request = makeRequest.bind(null, SOURCE_TEST_SPACE, ENVIRONMENT_ID)
    })
  )

  it(
    'gets the orginanization id from the space',
    co(function* () {
      const fetcher = new Fetcher(request, 100, SOURCE_TEST_SPACE)
      fetcher.getOrganizationIdFromSpace().then((orgId) => {
        expect(orgId).to.be.a('string')
        expect(orgId).to.have.length.above(0)
      })
    })
  )
})
