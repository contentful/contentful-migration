'use strict'

import Bluebird from 'bluebird'
import { TagVisibility } from '../interfaces/api-tag'
import actionCreators from './action-creators'
import getFirstExternalCaller from './first-external-caller'
import Intent from '../intent'
import DispatchProxy from './dispatch-proxy'
import { omit } from 'lodash'
import ContentTransform from '../interfaces/content-transform'
import EntryDerive from '../interfaces/entry-derive'
import EntrySetTags from '../interfaces/entry-set-tags'
import TransformEntryToType from '../interfaces/entry-transform-to-type'
import { ClientConfig } from '../../bin/lib/config'
import { deprecatedMethod } from '../utils/deprecated'

const createInstanceIdManager = () => {
  const instanceCounts = {}

  return {
    getNew: (id): number => {
      let instanceId

      if ((typeof instanceCounts[id]) === 'undefined') {
        instanceId = 0
      } else {
        instanceId = instanceCounts[id] + 1
      }

      instanceCounts[id] = instanceId

      return instanceId
    }
  }
}

class Movement extends DispatchProxy { }

class Field extends DispatchProxy {
  public id: string

  constructor (id, props = {}, { dispatchUpdate }) {
    super({ dispatchUpdate })
    this.id = id

    // Initialize from second argument
    Object.keys(props).forEach((propertyName) => {
      this[propertyName](props[propertyName])
    })
  }
}

class ContentType extends DispatchProxy {
  public id: string
  public instanceId: string
  public fieldInstanceIds?

  constructor (id, instanceId, props = {}, dispatch) {
    const dispatchUpdate = (callsite, propertyName, propertyValue) => {
      dispatch(actionCreators.contentType.update(id, instanceId, callsite, propertyName, propertyValue))
    }
    super({ dispatchUpdate })

    this.id = id
    this.instanceId = instanceId
    this.dispatch = dispatch
    this.fieldInstanceIds = createInstanceIdManager()

    // Initialize from pros
    Object.keys(props).forEach((propertyName) => {
      this[propertyName](props[propertyName])
    })
  }

  public dispatch? (step: Intent): void

  createField (id, init) {
    const callsite = getFirstExternalCaller()
    const fieldInstanceId = this.fieldInstanceIds.getNew(id)

    this.dispatch(actionCreators.field.create(this.id, this.instanceId, id, fieldInstanceId, callsite))

    const updateField = actionCreators.field.update.bind(null, this.id, this.instanceId, id, fieldInstanceId)
    const field = new Field(id, init, {
      dispatchUpdate: (callsite, property, value) => {
        return this.dispatch(updateField(callsite, property, value))
      }
    })

    return field
  }

  editField (id, init) {
    const fieldInstanceId = this.fieldInstanceIds.getNew(id)

    const updateField = actionCreators.field.update.bind(null, this.id, this.instanceId, id, fieldInstanceId)
    const field = new Field(id, init, {
      dispatchUpdate: (callsite, property, value) => {
        return this.dispatch(updateField(callsite, property, value))
      }
    })

    return field
  }

  moveField (id) {
    const fieldInstanceId = this.fieldInstanceIds.getNew(id)

    const contentTypeId = this.id
    const contentTypeInstanceId = this.instanceId

    const movement = new Movement({
      dispatchUpdate: (callsite, property, value) => {
        const action = actionCreators.field.move(
          contentTypeId,
          contentTypeInstanceId,
          id,
          fieldInstanceId,
          callsite,
          { direction: property, pivot: value }
        )

        this.dispatch(action)
      }
    })

    return movement
  }

  deleteField (id) {
    const callsite = getFirstExternalCaller()
    const fieldInstanceId = this.fieldInstanceIds.getNew(id)

    this.dispatch(actionCreators.field.delete(this.id, this.instanceId, id, fieldInstanceId, callsite))
  }

  changeFieldId (oldId, newId) {
    const callsite = getFirstExternalCaller()
    const fieldInstanceId = this.fieldInstanceIds.getNew(oldId)
    this.dispatch(actionCreators.field.rename(
      this.id,
      this.instanceId,
      oldId,
      fieldInstanceId,
      callsite,
      newId
    ))
  }

  changeFieldControl (fieldId, widgetNamespace, widgetId, settings) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.changeEditorInterface(
      this.id,
      this.instanceId,
      callsite,
      fieldId,
      widgetId,
      settings,
      widgetNamespace
    ))
    return this
  }

  /** deprecated, use changeFieldControl instead */
  changeEditorInterface (fieldId, widgetId, settings, widgetNamespace) {
    deprecatedMethod('changeEditorInterface', 'changeFieldControl')
    return this.changeFieldControl(fieldId, widgetNamespace, widgetId, settings)
  }

  copyFieldControl (sourceFieldId, destinationFieldId) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.copyEditorInterface(
      this.id,
      this.instanceId,
      callsite,
      sourceFieldId,
      destinationFieldId
    ))
    return this
  }

  /** deprecated, use copyFieldControl instead */
  copyEditorInterface (sourceFieldId, destinationFieldId) {
    deprecatedMethod('copyEditorInterface', 'copyFieldControl')
    return this.copyFieldControl(sourceFieldId, destinationFieldId)
  }

  resetFieldControl (fieldId) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.resetEditorInterface(
      this.id,
      this.instanceId,
      callsite,
      fieldId
    ))
    return this
  }

  /** deprecated, use resetFieldControl instead */
  resetEditorInterface (fieldId) {
    deprecatedMethod('resetEditorInterface', 'resetFieldControl')
    return this.resetFieldControl(fieldId)
  }

  resetEntryEditor () {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.resetEntryEditor(
      this.id,
      this.instanceId,
      callsite
    ))
    return this
  }

  configureEntryEditor (widgetNamespace, widgetId, settings?) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.configureEntryEditor(
      this.id,
      this.instanceId,
      callsite,
      widgetNamespace,
      widgetId,
      settings
    ))
    return this
  }

  configureEntryEditors (editors) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.configureEntryEditors(
      this.id,
      this.instanceId,
      callsite,
      editors
    ))
    return this
  }

  addSidebarWidget (widgetNamespace, widgetId, settings = {}, insertBeforeWidgetId = null) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.addSidebarWidget(
      this.id,
      this.instanceId,
      callsite,
      widgetId,
      widgetNamespace,
      insertBeforeWidgetId,
      settings
    ))
    return this
  }

  updateSidebarWidget (widgetNamespace, widgetId, settings = {}) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.updateSidebarWidget(
      this.id,
      this.instanceId,
      callsite,
      widgetId,
      widgetNamespace,
      settings
    ))
    return this
  }

  removeSidebarWidget (widgetNamespace, widgetId) {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.removeSidebarWidget(
      this.id,
      this.instanceId,
      callsite,
      widgetId,
      widgetNamespace
    ))
    return this
  }

  resetSidebarToDefault () {
    const callsite = getFirstExternalCaller()
    this.dispatch(actionCreators.contentType.resetSidebarToDefault(
      this.id,
      this.instanceId,
      callsite
    ))
    return this
  }
}

class Tag extends DispatchProxy {
  public id: string
  public instanceId: string

  constructor (id, instanceId, props = {}, dispatch) {
    const dispatchUpdate = (callsite, propertyName, propertyValue) => {
      dispatch(actionCreators.tag.update(id, instanceId, callsite, propertyName, propertyValue))
    }
    super({ dispatchUpdate })

    this.id = id
    this.instanceId = instanceId
    this.dispatch = dispatch

    // Initialize from pros
    Object.keys(props).forEach((propertyName) => {
      this[propertyName](props[propertyName])
    })
  }

  public dispatch? (step: Intent): void
}

export async function migration (migrationCreator: Function, makeRequest: Function, config: ClientConfig): Promise<Intent[]> {
  const actions: Intent[] = []
  const instanceIdManager = createInstanceIdManager()

  const dispatch = (action: Intent) => actions.push(action)

  const migration = {
    createContentType: function (id, init) {
      const callsite = getFirstExternalCaller()
      const instanceId = instanceIdManager.getNew(id)

      dispatch(actionCreators.contentType.create(id, instanceId, callsite))

      return new ContentType(id, instanceId, init, dispatch)
    },

    editContentType: function (id, changes) {
      const instanceId = instanceIdManager.getNew(id)

      const ct = new ContentType(id, instanceId, changes, dispatch)

      return ct
    },

    deleteContentType: function (id) {
      const callsite = getFirstExternalCaller()
      const instanceId = instanceIdManager.getNew(id)
      dispatch(actionCreators.contentType.delete(id, instanceId, callsite))
    },

    transformEntries: function (transformation) {
      const callsite = getFirstExternalCaller()
      const id = transformation.contentType
      const stripped = omit(transformation, 'contentType') as ContentTransform
      const instanceId = instanceIdManager.getNew(id)

      dispatch(actionCreators.contentType.transformEntries(id, instanceId, stripped, callsite))
    },

    deriveLinkedEntries: function (transformation) {
      const callsite = getFirstExternalCaller()
      const id = transformation.contentType
      const stripped = omit(transformation, 'contentType') as EntryDerive
      const instanceId = instanceIdManager.getNew(id)

      dispatch(actionCreators.contentType.deriveLinkedEntries(id, instanceId, stripped, callsite))
    },

    transformEntriesToType: function (transformation): void {
      const callsite = getFirstExternalCaller()
      const stripped = omit(transformation, 'contentType') as TransformEntryToType
      const instanceId = instanceIdManager.getNew(transformation.sourceContentType)

      dispatch(actionCreators.contentType.transformEntriesToType(instanceId, stripped, callsite))
    },

    createTag: function (id, init, visibility: TagVisibility = 'private') {
      const callsite = getFirstExternalCaller()
      const instanceId = instanceIdManager.getNew(id)

      dispatch(actionCreators.tag.create(id, instanceId, callsite, visibility))

      return new Tag(id, instanceId, init, dispatch)
    },

    editTag: function (id, changes) {
      const instanceId = instanceIdManager.getNew(id)
      const ct = new Tag(id, instanceId, changes, dispatch)
      return ct
    },

    deleteTag: function (id) {
      const callsite = getFirstExternalCaller()
      const instanceId = instanceIdManager.getNew(id)
      dispatch(actionCreators.tag.delete(id, instanceId, callsite))
    },

    setTagsForEntries: function (transformation) {
      const callsite = getFirstExternalCaller()
      const id = transformation.contentType
      const stripped = omit(transformation, 'contentType') as EntrySetTags
      const instanceId = instanceIdManager.getNew(id)

      dispatch(actionCreators.contentType.setTagsForEntries(id, instanceId, stripped, callsite))
    }
  }

  // Create the migration
  await Bluebird.try(function () {
    return migrationCreator(migration, Object.assign({ makeRequest }, config))
  })

  return actions
}
