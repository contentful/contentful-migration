import { Intent as IntentInterface } from '../interfaces/intent'
import { Action as ActionInterface } from '../interfaces/action'
import { RawStep, RawStepMeta, RawStepPayload} from '../interfaces/raw-step'

const CONTENT_TRANSFORM = 'contentType/transformContent';

const FIELD_CREATE = 'field/create';
const FIELD_UPDATE = 'field/update';
const FIELD_RENAME = 'field/rename';
const FIELD_DELETE = 'field/delete';
const FIELD_MOVE = 'field/move';

const CONTENT_TYPE_UPDATE = 'contentType/update';
const CONTENT_TYPE_CREATE = 'contentType/create';

abstract class Intent implements IntentInterface {
  protected type: string
  protected meta: RawStepMeta
  protected payload: RawStepPayload

  constructor (rawStep: RawStep) {
    this.type = rawStep.type
    this.meta = rawStep.meta
    this.payload = rawStep.payload
  }

  isContentTypeUpdate () {
    return this.type === CONTENT_TYPE_UPDATE;
  }

  isContentTypeCreate () {
    return this.type === CONTENT_TYPE_CREATE;
  }

  isFieldCreate () {
    return this.type === FIELD_CREATE;
  }

  isFieldUpdate () {
    return this.type === FIELD_UPDATE;
  }

  isFieldDelete () {
    return this.type === FIELD_DELETE;
  }

  isFieldRename () {
    return this.type === FIELD_RENAME;
  }

  isFieldMove () {
    return this.type === FIELD_MOVE;
  }

  isContentTransform () {
    return this.type === CONTENT_TRANSFORM;
  }

  abstract toActions (): void

  toRaw (): RawStep {
    return {
      type: this.type,
      meta: this.meta,
      payload: this.payload
    };
  }
}

export {
  Intent as default,
  Intent
}