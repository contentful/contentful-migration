import { MAX_FIELD_SETS, MAX_TABS, MIN_GROUPS } from '../../utils/editor-layout'
import { MAX_ALLOWED_RESOURCES, MAX_RESOURCE_LINKS } from '../../utils/resource-links'

const errors = {
  contentType: {
    REQUIRED_PROPERTY: (path) => {
      return `The property "${path}" is required on a content type.`
    },
    TOO_MANY_FIELDS: (id, maxFields) => {
      return `Content type "${id}" cannot have more than ${maxFields} fields.`
    },
    NON_EXISTENT_DISPLAY_FIELD: (displayField, ctId) => {
      return `Cannot set "${displayField}" as displayField on content type "${ctId}" because it does not exist`
    },
    DELETE_DISPLAY_FIELD: (displayField, ctId) => {
      return `Cannot delete field "${displayField}" on content type "${ctId}" because it is set as the display field`
    },
    TOO_MANY_RESOURCE_LINK_FIELDS: (id) => {
      return `Content type "${id}" cannot have more than ${MAX_RESOURCE_LINKS} resource link fields.`
    }
  },
  field: {
    REQUIRED_DEPENDENT_PROPERTY: (prop, id, dependentProp, dependentValue) => {
      return `The property "${prop}" is required on the field "${id}" because "${dependentProp}" is "${dependentValue}".`
    },
    REQUIRED_PROPERTY: (prop, id) => {
      return `The property "${prop}" is required on the field "${id}".`
    },
    FORBIDDEN_DEPENDENT_PROPERTY: (prop, id, dependentProp, dependentValue) => {
      return `The property "${prop}" is forbidden on the field "${id}" because "${dependentProp}" is not "${dependentValue}".`
    },
    FORBIDDEN_PROPERTY: (prop, id) => {
      return `The property "${prop}" is forbidden on the field "${id}".`
    },
    PROPERTY_MUST_BE_ONE_OF: (prop, id, validOptions) => {
      const typeStrings = validOptions.map((valid) => `"${valid}"`)
      const oneOf = `[${typeStrings.join(', ')}]`

      return `The property "${prop}" on the field "${id}" must be one of ${oneOf}.`
    },
    NO_DELETE_WITHOUT_OMIT: (fieldId, ctId) => {
      return `Cannot set "deleted" to "true" on field "${fieldId}" on content type "${ctId}". It needs to be omitted first. Consider using "deleteField".`
    },
    NO_TYPE_CHANGE: (fieldId, ctId, parentFieldType, fieldType) => {
      return `Cannot change the type of field "${fieldId}" on content type "${ctId}" from "${parentFieldType}" to "${fieldType}". Field types cannot be changed.`
    },
    ID_MUST_MATCH_SCHEMA: (fieldId, newId) => {
      return `The new ID "${newId}" for the field "${fieldId}" does not match the requirements. IDs must be between 1 and 64 characters long, start with a letter, and contain only alphanumeric characters as well as underscores.`
    },
    ID_MUST_BE_DIFFERENT: (fieldId) => {
      return `The new ID for the field "${fieldId}" contains the same value as the existing ID. The new ID must be different from the old.`
    },
    validations: {
      DUPLICATED_VALIDATION: (duplicatedValue) => {
        return `A field can't have duplicates in the validations array. Duplicate: "${JSON.stringify(
          duplicatedValue
        )}"`
      },
      INVALID_VALIDATION_PROPERTY: (propName) => {
        return `A field can't have "${propName}" as a validation.`
      },
      INVALID_VALIDATION_PROPERTY_COMBINATION: (keys) => {
        const wrappedKeys = keys.map((key) => `"${key}"`)
        const list = wrappedKeys.slice(0, -1)
        const [last] = wrappedKeys.slice(-1)

        const commaSeparatedKeys = list.join(', ')
        const formattedCombination = `${commaSeparatedKeys} and ${last}`

        return `A field can't have the combination ${formattedCombination} as a validation.`
      },
      INVALID_VALIDATION_PARAMETER: (propName, expectedType, actualType) => {
        return `"${propName}" validation expected to be "${expectedType}", but got "${actualType}"`
      }
    },
    allowedResources: {
      DUPLICATE_SOURCE: (fieldId, source, prop) => {
        return `The property "${prop}" on the field "${fieldId}" contains duplicate source "${source}".`
      },
      INVALID_RESOURCE: (fieldId, index, actualType) => {
        return `Allowed resource at index ${index} on the field "${fieldId}" expected to be "object", but got "${actualType}".`
      },
      INVALID_RESOURCE_PROPERTY: (fieldId, index, error) => {
        return `Allowed resource at index ${index} on the field "${fieldId}" has an invalid property: ${error}.`
      },
      TOO_FEW_ITEMS: (fieldId, prop) => {
        return `The property "${prop}" on the field "${fieldId}" must not be empty.`
      },
      TOO_MANY_ITEMS: (fieldId, prop) => {
        return `The property "${prop}" on the field "${fieldId}" must have at most ${MAX_ALLOWED_RESOURCES} items.`
      }
    },
    defaultValue: {
      TYPE_MISMATCH: (fieldId, valueType, locale, fieldType) => {
        return `Cannot set default value of type "${valueType}" for locale "${locale}" on field "${fieldId}". The default value must match the field type "${fieldType}".`
      },
      DATE_TYPE_MISMATCH: (fieldId, valueType, value, locale, fieldType) => {
        return `Cannot set default value of type "${valueType}" to "${value}" for locale "${locale}" on field "${fieldId}". The default value must match the field type "${fieldType}" using a valid ISO date.`
      },
      INVALID_LOCALE: (fieldId, locale) => {
        return `Cannot set default value for locale "${locale}" on field "${fieldId}". The locale does not exist.`
      },

      UNSUPPORTED_FIELD_TYPE: (fieldId, key, fieldType) => {
        return `Cannot set "${key}" in field "${fieldId}" because it is not supported by field type "${fieldType}".`
      },
      UNSUPPORTED_ARRAY_ITEMS_TYPE: (fieldId, key, itemsType) => {
        return `Cannot set "${key}" in field "${fieldId}" because it is not supported by field type "Array" with items type "${itemsType}".`
      }
    }
  },
  editorLayout: {
    TOO_MANY_TABS: () => {
      return `Editor layout cannot have more than ${MAX_TABS} tabs`
    },
    TAB_CONTROL_INVALID: (groupId) => {
      return `Editor layout tab "${groupId}" requires a "topLevelTab" widget group control`
    },
    FIELD_SET_CONTROL_INVALID: (groupId) => {
      return `Editor layout field set "${groupId}" cannot have a "topLevelTab" widget group control`
    },
    FIELD_GROUP_LEVEL_TOO_DEEP: () => {
      return 'Editor layout cannot have more than 2 levels of depth'
    },
    TOO_FEW_FIELD_GROUPS: () => {
      return `Editor layout cannot have less than ${MIN_GROUPS} groups`
    },
    TOO_MANY_FIELD_SETS: () => {
      return `Editor layout cannot have more than ${MAX_FIELD_SETS} field sets`
    }
  },
  entry: {
    REQUIRED_PROPERTY: (path) => {
      return `The property "${path}" is required on an entry.`
    },
    TAGS_DO_NOT_EXIST: (entryId) => {
      return `You cannot update tags on entry "${entryId}" because some of the tags do not exist.`
    }
  },
  tag: {
    REQUIRED_PROPERTY: (path) => {
      return `The property "${path}" is required on a tag.`
    }
  }
}

export default errors
