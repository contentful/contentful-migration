import stripAnsi from 'strip-ansi'
import { expect } from 'vitest'

export default {
  errors: {
    recovery: (result: any) => {
      const withoutAnsiCodes = stripAnsi(result.stdout)
      expect(withoutAnsiCodes).toContain('Catching Error')
      expect(withoutAnsiCodes).toContain('Cleaning Up')
    },
    field: {
      invalidPropertyWithSuggestion: function (invalid: string, valid: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `"${invalid}" is not a valid property name for a field. Did you mean "${valid}"?`
          )
        }
      },
      invalidTypeForProperty(property: string, invalid: string, valid: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `"${invalid}" is not a valid type for the field property "${property}". Expected "${valid}"`
          )
        }
      }
    },
    contentType: {
      invalidPropertyWithSuggestion: function (invalid: string, valid: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `"${invalid}" is not a valid property name for a content type. Did you mean "${valid}"?`
          )
        }
      },
      duplicateCreate: function (line: number, id: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `Line ${line}: Content type with id "${id}" cannot be created more than once.`
          )
        }
      },
      invalidProperty: function (line: number, invalid: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `Line ${line}: You cannot set a property on content type "${invalid}" because it does not exist.`
          )
        }
      },
      alreadyExist: function (line: number, id: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(
            `Line ${line}: Content type with id "${id}" already exists.`
          )
        }
      }
    },
    entriesTransform: function (id: string, message: string) {
      return (result: any) => {
        expect(result.code).toEqual(1)

        const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
        expect(withoutAnsiCodes).toContain(id)
        expect(withoutAnsiCodes).toContain(message)
        expect(withoutAnsiCodes).toContain('Please check the errors log for details:')
      }
    }
  },
  plans: {
    contentType: {
      create: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Create Content Type ${id}`)
          if (params != null) {
            Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      update: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Update Content Type ${id}`)
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      delete: function (id: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Delete Content Type ${id}`)
        }
      }
    },
    editorInterface: {
      change: function (contentTypeId: string, fieldId: string, widgetId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)
          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Update field controls for Content Type ${contentTypeId}`
          )
          expect(withoutAnsiCodes).toContain(`widgetId: "${widgetId}"`)
        }
      }
    },
    editorLayout: {
      create: function (ctId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Create editor layout for content type ${ctId}`)
        }
      },
      changeFieldGroupId: function (oldFieldGroupId: string, newFieldGroupId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Change field group id from ${oldFieldGroupId} to ${newFieldGroupId}`
          )
        }
      },
      createFieldGroup: function (fieldGroupId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Create field group ${fieldGroupId}`)
        }
      },
      createFieldGroupInParent: function (fieldGroupId: string, parentFieldGroupId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Create field group ${fieldGroupId} in field group ${parentFieldGroupId}`
          )
        }
      },
      delete: function (ctId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Delete editor layout for content type ${ctId}`)
        }
      },
      deleteFieldGroup: function (fieldGroupId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Delete field group ${fieldGroupId}`)
        }
      },
      moveFieldToTheFirstPositionInFieldGroup: function (fieldId: string, pivot?: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Move field ${fieldId} to the first position ${
              pivot ? `of group ${pivot}` : 'of its group'
            }`
          )
        }
      },
      moveFieldToTheLastPositionInFieldGroup: function (fieldId: string, pivot?: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Move field ${fieldId} to the last position ${
              pivot ? `of group ${pivot}` : 'of its group'
            }`
          )
        }
      },
      moveFieldAfterField: function (fieldId: string, pivot: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Move field ${fieldId} after field ${pivot}`)
        }
      },
      moveFieldBeforeField: function (fieldId: string, pivot: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Move field ${fieldId} before field ${pivot}`)
        }
      },
      moveFieldAfterFieldGroup: function (fieldId: string, pivot: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Move field ${fieldId} after field group ${pivot}`)
        }
      },
      moveFieldBeforeFieldGroup: function (fieldId: string, pivot: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Move field ${fieldId} before field group ${pivot}`)
        }
      },
      update: function (ctId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Update editor layout for content type ${ctId}`)
        }
      },
      updateFieldGroup: function (fieldGroupId: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Update field group ${fieldGroupId}`)
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      updateGroupControls: function (
        fieldGroupId: string,
        widgetNamespace: string,
        widgetId: string,
        settings?: any
      ) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(
            `Update group controls for field group ${fieldGroupId}`
          )
          expect(withoutAnsiCodes).toContain(`- widgetId: ${JSON.stringify(widgetId)}`)
          expect(withoutAnsiCodes).toContain(
            `- widgetNamespace: ${JSON.stringify(widgetNamespace)}`
          )
          if (settings) {
            expect(withoutAnsiCodes).toContain(`- settings: ${JSON.stringify(settings)}`)
          }
        }
      }
    },
    field: {
      create: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)

          expect(withoutAnsiCodes).toContain(`Create field ${id}`)
          if (params != null) {
            Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      update: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Update field ${id}`)
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      move: function (position: string, first: string, second: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          if (position === 'top') {
            expect(withoutAnsiCodes).toContain(`Move field ${first} to the first position`)
          } else if (position === 'bottom') {
            expect(withoutAnsiCodes).toContain(`Move field ${first} to the last position`)
          } else {
            expect(withoutAnsiCodes).toContain(`Move field ${first} ${position} field ${second}`)
          }
        }
      },
      rename: function (id: string, newId: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Rename field ${id} to ${newId}`)
        }
      },
      delete: function (id: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)

          expect(withoutAnsiCodes).toContain(`Delete field ${id}`)
        }
      }
    },
    actions: {
      abort: function () {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)
          const withoutAnsiCodes = stripAnsi(result.stdout)
          const errorWithoutAnsiCodes = stripAnsi(result.stderr)
          expect(withoutAnsiCodes).toContain(`The following migration has been planned`)
          expect(withoutAnsiCodes).toContain(`? Do you want to apply the migration No`)
          expect(errorWithoutAnsiCodes).toContain(`Migration aborted`)
        }
      },
      apply: function () {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)
          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`The following migration has been planned`)
          expect(withoutAnsiCodes).toContain(`? Do you want to apply the migration Yes`)
          expect(withoutAnsiCodes).toContain(`Migration successful`)
        }
      }
    },
    entriesTransform: function (id: string) {
      return (result: any) => {
        const withoutAnsiCodes = stripAnsi(result.stdout)
        expect(withoutAnsiCodes).toContain(`Transform entries for ${id}`)
      }
    },
    entriesDerive: function (id: string) {
      return (result: any) => {
        expect(result.stdout).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stdout)
        expect(withoutAnsiCodes).toContain(`Derive entries from ${id}`)
      }
    },
    entriesSetTags: function (id: string) {
      return (result: any) => {
        expect(result.stdout).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stdout)
        expect(withoutAnsiCodes).toContain(`Updating tags on entries for ${id}`)
      }
    },

    tag: {
      create: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)
          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Create Tag ${id}`)
          if (params != null) {
            Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      update: function (id: string, params?: any) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Update Tag ${id}`)
          if (params != null) {
            return Object.keys(params).forEach((param) => {
              expect(withoutAnsiCodes).toContain(`- ${param}: ${JSON.stringify(params[param])}`)
            })
          }
        }
      },
      delete: function (id: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)
          expect(withoutAnsiCodes).toContain(`Delete Tag ${id}`)
        }
      }
    },
    annotation: {
      assign: function (id: string) {
        return (result: any) => {
          expect(result.stdout).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(result.stdout)

          expect(withoutAnsiCodes).toContain(`Assign annotation ${id}`)
        }
      }
    }
  },
  help: {
    message: function () {
      return (result: any) => {
        let stdtype = result.stdout
        if (result.code === 1) {
          stdtype = result.stderr
        }

        expect(stdtype).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(stdtype)
        expect(withoutAnsiCodes).toContain(
          `Usage: contentful-migration [args] <path-to-script-file>`
        )
      }
    },
    wrongArgsWithSuggestion: function () {
      return (result: any) => {
        expect(result.code).toEqual(1)
        expect(result.stderr).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stderr)
        expect(withoutAnsiCodes).toContain(`Missing required argument: space-id`)
        expect(withoutAnsiCodes).toContain(`Please provide a space ID`)
      }
    },
    noArgsWithSuggestion: function () {
      return (result: any) => {
        expect(result.code).toEqual(1)
        expect(result.stderr).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stderr)
        expect(withoutAnsiCodes).toContain(
          `Please provide the file containing the migration script.`
        )
      }
    },
    nonExistingMigrationScript: function (filePath: string) {
      return (result: any) => {
        expect(result.code).toEqual(1)
        expect(result.stderr).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stderr)
        expect(withoutAnsiCodes).toContain(`Cannot find file ${filePath}.`)
      }
    }
  },
  confirmation: {
    noConfirmationMessage: function () {
      return (result: any) => {
        const stdtype = result.stdout

        expect(result.code).toEqual(0)
        expect(stdtype).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(stdtype)
        expect(withoutAnsiCodes).not.toContain('Do you want to apply the migration')
        expect(withoutAnsiCodes).toContain('Migration successful')
      }
    }
  },
  logs: {
    helpMessage: function () {
      return (result: any) => {
        let stdtype = result.stdout
        if (result.code === 1) {
          stdtype = result.stderr
        }
        expect(stdtype).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(stdtype)
        expect(withoutAnsiCodes).toContain(`--quiet, -q`)
      }
    }
  },
  payload: {
    notDefined: function (method: string) {
      return (result: any) => {
        expect(result.code).toEqual(1)
        expect(result.stdout).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stdout)
        expect(withoutAnsiCodes).toContain(`${method} is not defined`)
      }
    },
    syntaxError: function (script: string, line: number, message: string) {
      return (result: any) => {
        expect(result.code).toEqual(0)
        expect(result.stdout).not.toHaveLength(0)

        const withoutAnsiCodes = stripAnsi(result.stdout)
        expect(withoutAnsiCodes).toContain(
          `script could not be parsed, as it seems to contain syntax errors.`
        )
        expect(withoutAnsiCodes).toContain(`${script}:${line}`)
        expect(withoutAnsiCodes).toContain(`SyntaxError: ${message}`)
      }
    }
  },
  validations: {
    contentType: {
      requiredProperty: function (path: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: The property "${path}" is required on a content type.`
          )
        }
      },
      nonExistentDisplayField: function (displayField: string, ctId: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: Cannot set "${displayField}" as displayField on content type "${ctId}" because it does not exist`
          )
        }
      },
      deleteDisplayField: function (displayField: string, ctId: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: Cannot delete field "${displayField}" on content type "${ctId}" because it is set as the display field`
          )
        }
      }
    },
    field: {
      requiredProperty: function (prop: string, id: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: The property "${prop}" is required on the field "${id}".`
          )
        }
      },
      propertyOneOf: function (prop: string, id: string) {
        return (result: any) => {
          const oneOf =
            '["Symbol", "Text", "Integer", "Number", "Date", "Boolean", "Object", "Link", "Array", "Location", "RichText", "ResourceLink"]'
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: The property "${prop}" on the field "${id}" must be one of ${oneOf}.`
          )
        }
      },
      noDeleteWithoutOmit: function (fieldId: string, ctId: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: Cannot set "deleted" to "true" on field "${fieldId}" on content type "${ctId}". It needs to be omitted first. Consider using "deleteField".`
          )
        }
      },
      noTypeChange: function (
        fieldId: string,
        ctId: string,
        parentFieldType: string,
        fieldType: string
      ) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: Cannot change the type of field "${fieldId}" on content type "${ctId}" from "${parentFieldType}" to "${fieldType}". Field types cannot be changed.`
          )
        }
      },
      idMustMatchSchema: function (newId: string, fieldId: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: The new ID "${newId}" for the field "${fieldId}" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
          )
        }
      }
    },
    validations: {
      duplicatedValidation: function (duplicatedValue: any) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: A field can't have duplicates in the validations array. Duplicate: "${JSON.stringify(
              duplicatedValue
            )}"`
          )
        }
      },
      invalidValidationProperty: function (propName: string) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: A field can't have "${propName}" as a validation.`
          )
        }
      },
      invalidValidationParameter: function (
        propName: string,
        expectedType: string,
        actualType: string
      ) {
        return (result: any) => {
          expect(result.code).toEqual(1)
          expect(result.stdout).not.toHaveLength(0)
          expect(result.stderr).not.toHaveLength(0)

          const withoutAnsiCodes = stripAnsi(`${result.stdout} ${result.stderr}`)
          expect(withoutAnsiCodes).toContain(
            `Error: "${propName}" validation expected to be "${expectedType}", but got "${actualType}"`
          )
        }
      }
    }
  }
}
