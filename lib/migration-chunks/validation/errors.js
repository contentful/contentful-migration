'use strict';

module.exports = {
  field: {
    create: {
      FIELD_ALREADY_CREATED: (id) => {
        return `Field with id "${id}" cannot be created more than once.`;
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot create a field with id "${id}" on content type "${ctId}" because it does not exist.`;
      }
    },
    delete: {
      FIELD_ALREADY_DELETED: (id) => {
        return `Field with id "${id}" cannot be deleted because it has already been deleted.`;
      },
      FIELD_DOES_NOT_EXIST: (id) => {
        return `Field with id "${id}" cannot be deleted because it does not exist.`;
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot delete the field with id "${id}" on content type "${ctId}" because it does not exist.`;
      }
    },
    update: {
      FIELD_ALREADY_DELETED: (id) => {
        return `You cannot set a property on field with id "${id}" because it has already been deleted.`;
      },
      FIELD_DOES_NOT_EXIST: (id) => {
        return `You cannot set a property on field with id "${id}" because it does not exist.`;
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id, ctId) => {
        return `You cannot set a property on field with id "${id}" on content type "${ctId}" because it does not exist.`;
      }
    }
  },
  contentType: {
    create: {
      CONTENT_TYPE_ALREADY_CREATED: (id) => {
        return `Content type with id "${id}" cannot be created more than once.`;
      },
      CONTENT_TYPE_ALREADY_EXISTS: (id) => {
        return `Content type with id "${id}" already exists.`;
      }
    },
    update: {
      CONTENT_TYPE_NOT_YET_CREATED: (id) => {
        return `You cannot set a property on content type "${id}" because it has not yet been created.`;
      },
      CONTENT_TYPE_DOES_NOT_EXIST: (id) => {
        return `You cannot set a property on content type "${id}" because it does not exist.`;
      }
    }
  }
};
