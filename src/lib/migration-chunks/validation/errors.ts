interface ErrorGroup {
  [identifier: string]: (id, ...args: any[]) => string
}

interface ErrorCreators {
  field: {
    [groupIdentifier: string]: ErrorGroup
  }
  contentType: {
    [groupIdentifier: string]: ErrorGroup
  }
  entry: {
    [groupIdentifier: string]: ErrorGroup
  }
  tag: {
    [groupIdentifier: string]: ErrorGroup
  },
  generic: ErrorGroup,
}

const errorCreators: ErrorCreators = {
  field: {
    create: {
      FIELD_ALREADY_CREATED: (id) => {
        return `Field with id "${id}" cannot be created more than once.`
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot create a field with id "${id}" on content type "${ctId}" because it does not exist.`
      }
    },
    delete: {
      FIELD_ALREADY_DELETED: (id) => {
        return `Field with id "${id}" cannot be deleted because it has already been deleted.`
      },
      FIELD_DOES_NOT_EXIST: (id) => {
        return `Field with id "${id}" cannot be deleted because it does not exist.`
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot delete the field with id "${id}" on content type "${ctId}" because the content type does not exist.`
      }
    },
    update: {
      FIELD_ALREADY_DELETED: (id) => {
        return `You cannot edit field "${id}" because it has already been deleted.`
      },
      FIELD_DOES_NOT_EXIST: (id) => {
        return `You cannot edit field "${id}" because it does not exist.`
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot edit field "${id}" on content type "${ctId}" because it does not exist.`
      }
    },
    move: {
      FIELD_DELETED: (id) => {
        return `You cannot move the field with id "${id}" because it has already been deleted.`
      },
      FIELD_DOES_NOT_EXIST: (id) => {
        return `You cannot move the field with id "${id}" because it does not exist.`
      },
      FIELD_ALREADY_MOVED: (id) => {
        return `You cannot move the field with id "${id}" more than once per migration.`
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (_, ctId) => {
        return `You cannot move a field on content type "${ctId}" because it does not exist.`
      },
      PIVOT_FIELD_DOES_NOT_EXIST: (id, direction) => {
        return `You cannot move a field ${direction} the field "${id}" because it doesn't exist`
      },
      PIVOT_FIELD_DELETED: (id, direction) => {
        return `You cannot move a field ${direction} the field "${id}" because it has been already deleted`
      }
    },
    changeId: {
      REFERENCE_TO_OLD_ID: (oldId, newId) => {
        return `You cannot edit the field "${oldId}" because its ID was changed to "${newId}" earlier in the migration.`
      },
      ID_ALREADY_EXISTS: (oldId, newId, ctId) => {
        return `Cannot rename field "${oldId}" to "${newId}" because a field with this ID already exists on content type "${ctId}".`
      },
      ID_MUST_BE_DIFFERENT: (fieldId) => {
        return `The new ID for the field "${fieldId}" contains the same value as the existing ID. The new ID must be different from the old.`
      },
      NO_MULTIPLE_ID_CHANGES: (oldId) => {
        return `The ID of "${oldId}" was already changed in this migration. You cannot change the ID of a field more than once.`
      }
    }
  },
  contentType: {
    create: {
      CONTENT_TYPE_ALREADY_CREATED: (id) => {
        return `Content type with id "${id}" cannot be created more than once.`
      },
      CONTENT_TYPE_ALREADY_EXISTS: (id) => {
        return `Content type with id "${id}" already exists.`
      }
    },
    update: {
      CONTENT_TYPE_NOT_YET_CREATED: (id) => {
        return `You cannot set a property on content type "${id}" because it has not yet been created.`
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id) => {
        return `You cannot set a property on content type "${id}" because it does not exist.`
      }
    },
    delete: {
      CONTENT_TYPE_DOES_NOT_EXIST: (id) => {
        return `You cannot delete content type "${id}" because it does not exist.`
      },
      CONTENT_TYPE_ALREADY_DELETED: (id) => {
        return `Content type with id "${id}" cannot be deleted more than once.`
      },
      EDIT_AFTER_DELETE: (id) => {
        return `Content type with id "${id}" cannot be edited because it was deleted before.`
      },
      HAS_ENTRIES: (id) => {
        return `Content type "${id}" cannot be deleted because it has entries.`
      }
    },
    transformEntries: {
      CONTENT_TYPE_DOES_NOT_EXIST: (id) => {
        return `You cannot transform entries for content type "${id}" because it does not exist.`
      },
      TRANSFORM_AFTER_CONTENT_TYPE_DELETE: (id) => {
        return `You cannot transform entries for content type "${id}" because it was deleted.`
      },
      TRANSFORM_BEFORE_CONTENT_TYPE_CREATE: (id) => {
        return `You cannot transform entries for content type "${id}" because it has not yet been created.`
      }
    },
    deriveEntries: {
      CONTENT_TYPE_DOES_NOT_EXIST: (id) => {
        return `You cannot derive entries for content type "${id}" because it does not exist.`
      },
      DERIVE_AFTER_CONTENT_TYPE_DELETE: (id) => {
        return `You cannot derive entries for content type "${id}" because it was deleted.`
      },
      DERIVE_BEFORE_CONTENT_TYPE_CREATE: (id) => {
        return `You cannot derive entries for content type "${id}" because it has not yet been created.`
      }
    }
  },
  entry: {
    transformation: {
      NON_EXISTING_FIELDS: (id, fields): string => {
        const stringifiedFields = fields.map((f) => `"${f}"`).join(', ')

        return `You cannot transform entries for content type "${id}" because ${stringifiedFields} can't be found on it.`
      }
    },
    derivation: {
      NON_EXISTING_SOURCE_FIELDS: (id: string, fields: string[]): string => {
        const stringifiedFields = fields.map((f) => `"${f}"`).join(', ')

        return `You cannot derive entries from content type "${id}" because source fields ${stringifiedFields} can't be found on it.`
      },
      NON_EXISTING_REFERENCE_FIELD: (id: string, field: string): string => {
        return `You cannot derive entries from content type "${id}" because reference field "${field}" can't be found on it.`
      },
      NON_EXISTING_DESTINATION_FIELDS: (id: string, fields: string[]): string => {
        const stringifiedFields = fields.map((f) => `"${f}"`).join(', ')

        return `You cannot derive entries to content type "${id}" because destination fields ${stringifiedFields} can't be found on it.`
      }
    }
  },
  tag: {
    create: {
      TAG_ALREADY_CREATED: (id) => {
        return `Tag with id "${id}" cannot be created more than once.`
      },
      TAG_ALREADY_EXISTS: (id) => {
        return `Tag with id "${id}" already exists.`
      }
    }
  },
  generic: {
    DUPLICATE_PROP: (prop, type, id) => {
      return `You are setting the property "${prop}" on ${type} "${id}" more than once. Please set it only once.`
    }
  }
}

export default errorCreators
