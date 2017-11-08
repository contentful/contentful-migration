'use strict';

const stripAnsi = require('strip-ansi');
const { expect } = require('chai');

module.exports = {
  errors: {
    field: {
      invalidPropertyWithSuggestion: function (invalid, valid) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`"${invalid}" is not a valid property name for a field. Did you mean "${valid}"?`);
        };
      },
      invalidTypeForProperty (property, invalid, valid) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`"${invalid}" is not a valid type for the field property "${property}". Expected "${valid}"`);
        };
      }
    },
    contentType: {
      invalidPropertyWithSuggestion: function (invalid, valid) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`"${invalid}" is not a valid property name for a content type. Did you mean "${valid}"?`);
        };
      },
      duplicateCreate: function (line, id) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Line ${line}: Content type with id "${id}" cannot be created more than once.`);
        };
      },
      invalidProperty: function (line, invalid) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Line ${line}: You cannot set a property on content type "${invalid}" because it does not exist.`);
        };
      },
      alreadyExist: function (line, id) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Line ${line}: Content type with id "${id}" already exists.`);
        };
      }
    }
  },
  plans: {
    contentType: {
      create: function (id, params) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Create Content Type ${id}`);
          if (params != null) {
            Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).to.include(`- ${param}: ${params[param]}`);
            });
          }
        };
      },
      update: function (id, params) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Update Content Type ${id}`);
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).to.include(`- ${param}: ${params[param]}`);
            });
          }
        };
      },
      delete: function (id) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Delete Content Type ${id}`);
        };
      }
    },
    field: {
      create: function (id, params) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);

          expect(withoutAnsiCodes).to.include(`Create field ${id}`);
          if (params != null) {
            Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).to.include(`- ${param}: ${params[param]}`);
            });
          }
        };
      },
      update: function (id, params) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Update field ${id}`);
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).to.include(`- ${param}: ${params[param]}`);
            });
          }
        };
      },
      move: function (position, first, second) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          if (position === 'top') {
            expect(withoutAnsiCodes).to.include(`Move field ${first} to the first position`);
          } else if (position === 'bottom') {
            expect(withoutAnsiCodes).to.include(`Move field ${first} to the last position`);
          } else {
            expect(withoutAnsiCodes).to.include(`Move field ${first} ${position} field ${second}`);
          }
        };
      }
    },
    actions: {
      abort: function () {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`The following migration has been planned`);
          expect(withoutAnsiCodes).to.include(`? Do you want to apply the migration No`);
          expect(withoutAnsiCodes).to.include(`Migration aborted`);
        };
      },
      apply: function () {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`The following migration has been planned`);
          expect(withoutAnsiCodes).to.include(`? Do you want to apply the migration Yes`);
          expect(withoutAnsiCodes).to.include(`Migration successful`);
        };
      }
    }
  },
  help: {
    message: function () {
      return result => {
        let stdtype = result.stdout;
        if (result.code === 1) {
          stdtype = result.stderr;
        };
        expect(stdtype).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(stdtype);
        expect(withoutAnsiCodes).to.include(`Usage: contentful-migration [args] <path-to-script-file>`);
      };
    },
    wrongArgsWithSuggestion: function () {
      return result => {
        expect(result.code).to.eql(1);
        expect(result.stderr).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stderr);
        expect(withoutAnsiCodes).to.include(`Missing required argument: space-id`);
        expect(withoutAnsiCodes).to.include(`Please provide a space ID`);
      };
    },
    noArgsWithSuggestion: function () {
      return result => {
        expect(result.code).to.eql(1);
        expect(result.stderr).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stderr);
        expect(withoutAnsiCodes).to.include(`Please provide the file containing the migration script.`);
      };
    }
  },
  payload: {
    notDefined: function (method) {
      return result => {
        expect(result.code).to.eql(1);
        expect(result.stdout).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`${method} is not defined`);
      };
    },
    syntaxError: function (script, line, message) {
      return result => {
        expect(result.code).to.eql(0);
        expect(result.stdout).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`script could not be parsed, as it seems to contain syntax errors.`);
        expect(withoutAnsiCodes).to.include(`${script}:${line}`);
        expect(withoutAnsiCodes).to.include(`SyntaxError: ${message}`);
      };
    }
  }
};
