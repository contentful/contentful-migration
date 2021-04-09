'use strict'

import { expect } from 'chai'
import * as Joi from 'joi'
import sinon from 'sinon'
import * as configModule from '../../../../src/bin/lib/config';
import getFieldValidations from '../../../../src/lib/offline-api/validator/schema/field-validations-schema'

describe('makeFieldValidations', function () {
  const hasAlphaHeaderStub = sinon.stub(configModule, "hasAlphaHeader")
  describe('with the assembly-types alpha header defined', () => {
    it('should include the relationshipType validation', () => {
      hasAlphaHeaderStub.returns(true)
      const schema = getFieldValidations()
      expect(Joi.validate({ relationshipType: ['Composition'] }, schema).error).eq(null)
      expect(Joi.validate({ relationshipType: ['invalid'] }, schema).error).not.to.eq(null)
    })
  })
  describe('without the assembly-types alpha header defined', () => {
    it('should not include the relationshipType validation', () => {
      hasAlphaHeaderStub.returns(false)
      const schema = getFieldValidations()
      expect(Joi.validate({ relationshipType: ['Composition'] }, schema).error).not.to.eq(null)
    })
  })
})
