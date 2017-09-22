'use strict';

const stripAnsi = require('strip-ansi');
const { expect } = require('chai');

module.exports = {
  errors: {
    field: {
      invalidPropertyWithSuggestion: function (invalid, valid) {
        return function (result) {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`"${invalid}" is not a valid property name for a field. Did you mean "${valid}"?`);
        };
      }
    },
    contentType: {
      invalidPropertyWithSuggestion: function (invalid, valid) {
        return function (result) {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`"${invalid}" is not a valid property name for a content type. Did you mean "${valid}"?`);
        };
      }
    }
  }
};
