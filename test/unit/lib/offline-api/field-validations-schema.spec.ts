'use strict'

import { expect } from 'chai'
import * as Joi from 'joi'
import sinon from 'sinon'
import * as configModule from '../../../../src/bin/lib/config'
import getFieldValidations from '../../../../src/lib/offline-api/validator/schema/field-validations-schema'

describe('makeFieldValidations', function () {
  const hasAlphaHeaderStub = sinon.stub(configModule, 'hasAlphaHeader')
  describe('with the assembly-types alpha header defined', () => {
    it('should include the relationshipType validation', () => {
      hasAlphaHeaderStub.returns(true)
      const schema = getFieldValidations()
      expect(schema.validate({ relationshipType: ['Composition'] }).error).eq(undefined)
      expect(schema.validate({ relationshipType: ['invalid'] }).error).not.to.eq(undefined)
    })
  })
  describe('without the assembly-types alpha header defined', () => {
    it('should not include the relationshipType validation', () => {
      hasAlphaHeaderStub.returns(false)
      const schema = getFieldValidations()
      expect(schema.validate({ relationshipType: ['Composition'] }).error).not.to.eq(undefined)
    })
  })
})
