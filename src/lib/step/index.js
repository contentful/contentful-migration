'use strict';

const CONTENT_TRANSFORM = 'contentType/transformContent';

const FIELD_CREATE = 'field/create';
const FIELD_UPDATE = 'field/update';
const FIELD_RENAME = 'field/rename';
const FIELD_DELETE = 'field/delete';
const FIELD_MOVE = 'field/move';

const CONTENT_TYPE_UPDATE = 'contentType/update';
const CONTENT_TYPE_CREATE = 'contentType/create';

class Step {
  constructor (rawStep) {
    Object.assign(this, {
      _type: rawStep.type,
      _meta: rawStep.meta,
      _payload: rawStep.payload
    });
  }

  isContentTypeUpdate () {
    return this._type === CONTENT_TYPE_UPDATE;
  }

  isContentTypeCreate () {
    return this._type === CONTENT_TYPE_CREATE;
  }

  isFieldCreate () {
    return this._type === FIELD_CREATE;
  }

  isFieldUpdate () {
    return this._type === FIELD_UPDATE;
  }

  isFieldDelete () {
    return this._type === FIELD_DELETE;
  }

  isFieldRename () {
    return this._type === FIELD_RENAME;
  }

  isFieldMove () {
    return this._type === FIELD_MOVE;
  }

  isContentTransform () {
    return this._type === CONTENT_TRANSFORM;
  }

  get contentTypeId () {
    return this._payload.contentTypeId;
  }

  hasProps () {
    return (
      this.isFieldUpdate() ||
      this.isFieldRename() ||
      this.isContentTypeUpdate()
    );
  }

  toRaw () {
    return {
      type: this._type,
      meta: this._meta,
      payload: this._payload
    };
  }
}

module.exports = Step;
