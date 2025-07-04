'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = import('chai-as-promised')

;(async () => {
  chai.use(sinonChai)
  chai.use(dirtyChai)
  chai.use(await chaiAsPromised)
})()
