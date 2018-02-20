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
    },
    entriesTransform: function (id, message) {
      return result => {
        expect(result.code).to.eql(1);
        expect(result.stdout).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(id);
        expect(withoutAnsiCodes).to.include(message);
        expect(withoutAnsiCodes).to.include('Please check the errors log for details:');
      };
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
              expect(withoutAnsiCodes).to.include(`- ${param}: ${JSON.stringify(params[param])}`);
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
              expect(withoutAnsiCodes).to.include(`- ${param}: ${JSON.stringify(params[param])}`);
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
              expect(withoutAnsiCodes).to.include(`- ${param}: ${JSON.stringify(params[param])}`);
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
              expect(withoutAnsiCodes).to.include(`- ${param}: ${JSON.stringify(params[param])}`);
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
      },
      rename: function (id, newId) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Rename field ${id} to ${newId}`);
        };
      },
      delete: function (id) {
        return result => {
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);

          expect(withoutAnsiCodes).to.include(`Delete field ${id}`);
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
    },
    entriesTransform: function (id) {
      return result => {
        expect(result.stdout).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`Transform entries for ${id}`);
      };
    },
    entriesDerive: function (id) {
      return result => {
        expect(result.stdout).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`Derive entries from ${id}`);
      };
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
    },
    nonExistingMigrationScript: function (filePath) {
      return result => {
        expect(result.code).to.eql(1);
        expect(result.stderr).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(result.stderr);
        expect(withoutAnsiCodes).to.include(`Cannot find file ${filePath}.`);
      };
    }
  },
  confirmation: {
    noConfirmationMessage: function () {
      return result => {
        const stdtype = result.stdout;

        expect(result.code).to.eql(0);
        expect(stdtype).not.to.be.empty();

        const withoutAnsiCodes = stripAnsi(stdtype);
        expect(withoutAnsiCodes).to.not.include('Do you want to apply the migration');
        expect(withoutAnsiCodes).to.include('Migration successful');
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
  },
  validations: {
    contentType: {
      requiredProperty: function (path) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: The property "${path}" is required on a content type.`);
        };
      },
      nonExistentDisplayField: function (displayField, ctId) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: Cannot set "${displayField}" as displayField on content type "${ctId}" because it does not exist`);
        };
      },
      deleteDisplayField: function (displayField, ctId) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: Cannot delete field "${displayField}" on content type "${ctId}" because it is set as the display field`);
        };
      }
    },
    field: {
      requiredProperty: function (prop, id) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: The property "${prop}" is required on the field "${id}".`);
        };
      },
      propertyOneOf: function (prop, id) {
        return result => {
          const oneOf = '["Symbol", "Text", "Integer", "Number", "Date", "Boolean", "Object", "Link", "Array", "Location"]';
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: The property "${prop}" on the field "${id}" must be one of ${oneOf}.`);
        };
      },
      noDeleteWithoutOmit: function (fieldId, ctId) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: Cannot set "deleted" to "true" on field "${fieldId}" on content type "${ctId}". It needs to be omitted first. Consider using "deleteField".`);
        };
      },
      noTypeChange: function (fieldId, ctId, parentFieldType, fieldType) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: Cannot change the type of field "${fieldId}" on content type "${ctId}" from "${parentFieldType}" to "${fieldType}". Field types cannot be changed.`);
        };
      },
      idMustMatchSchema: function (newId, fieldId) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: The new ID "${newId}" for the field "${fieldId}" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`);
        };
      }
    },
    validations: {
      duplicatedValidation: function (duplicatedValue) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: A field can't have duplicates in the validations array. Duplicate: "${JSON.stringify(duplicatedValue)}"`);
        };
      },
      invalidValidationProperty: function (propName) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: A field can't have "${propName}" as a validation.`);
        };
      },
      invalidValidationParameter: function (propName, expectedType, actualType) {
        return result => {
          expect(result.code).to.eql(1);
          expect(result.stdout).not.to.be.empty();

          const withoutAnsiCodes = stripAnsi(result.stdout);
          expect(withoutAnsiCodes).to.include(`Error: "${propName}" validation expected to be "${expectedType}", but got "${actualType}"`);
        };
      }
    }
  },
  history: {
    previouslyCompleted: function (date) {
      return result => {
        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`Migration previously completed at ${date || ''}`);
      };
    },
    failedBeforeCompletion: function (date) {
      return result => {
        const withoutAnsiCodes = stripAnsi(result.stdout);
        expect(withoutAnsiCodes).to.include(`Migration failed before completion at ${date || ''}`);
      };
    }
  }
};
