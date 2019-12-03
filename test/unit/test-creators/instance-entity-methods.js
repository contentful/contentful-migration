import { cloneMock, mockCollection } from '../mocks/entities'
import sinon from 'sinon'

export function entityWrappedTest (t, setup, { wrapperMethod }) {
  const { httpMock, entityMock } = setup()
  const entity = wrapperMethod(httpMock, entityMock)
  t.looseEqual(entity.toPlainObject(), entityMock)
  t.end()
}

export function entityCollectionWrappedTest (t, setup, { wrapperMethod }) {
  const { httpMock, entityMock } = setup()
  const collection = mockCollection(entityMock)
  const entity = wrapperMethod(httpMock, collection)
  t.looseEqual(entity.toPlainObject(), collection)
  t.end()
}

export function entityUpdateTest (t, setup, { wrapperMethod }) {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapperMethod(httpMock, entityMock)
  entity.name = 'updatedname'
  return entity.update()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][1].name, 'updatedname', 'data is sent')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
      return {httpMock, entityMock, response}
    })
}

export function entityCollectionActionTest (t, setup, { wrapperMethod, actionMethod }) {
  t.plan(1)
  const { httpMock, entityMock } = setup(Promise.resolve({ data: { items: [] } }))
  const entity = wrapperMethod(httpMock, entityMock)
  return entity[actionMethod]()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
    })
}

export function entityActionTest (t, setup, { wrapperMethod, actionMethod }) {
  t.plan(1)
  const { httpMock, entityMock } = setup()
  const entity = wrapperMethod(httpMock, entityMock)
  return entity[actionMethod]()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
    })
}

export function entityDeleteTest (t, setup, { wrapperMethod }) {
  t.plan(1)
  const { httpMock, entityMock } = setup()
  const entity = wrapperMethod(httpMock, entityMock)
  return entity.delete()
    .then((response) => {
      t.pass('entity was deleted')
    })
}

export function entityPublishTest (t, setup, { wrapperMethod }) {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  entityMock.sys.version = 2
  const entity = wrapperMethod(httpMock, entityMock)
  return entity.publish()
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][2].headers['X-Contentful-Version'], 2, 'version header is sent')
    })
}

export function failingActionTest (t, setup, { wrapperMethod, actionMethod }) {
  t.plan(1)
  const error = cloneMock('error')
  const { httpMock, entityMock } = setup(Promise.reject(error))
  const entity = wrapperMethod(httpMock, entityMock)

  return entity[actionMethod]()
    .catch((r) => {
      t.equals(r.name, '404 Not Found')
    })
}
export function failingVersionActionTest (t, setup, { wrapperMethod, actionMethod }) {
  t.plan(1)
  const error = cloneMock('error')
  const { httpMock, entityMock } = setup(Promise.reject(error))
  entityMock.sys.version = 2
  const entity = wrapperMethod(httpMock, entityMock)

  return entity[actionMethod]()
    .catch((r) => {
      t.equals(r.name, '404 Not Found')
    })
}

export function isPublishedTest (t, setup, { wrapperMethod }) {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  const unpublishedEntity = wrapperMethod(httpMock, entityMock)
  t.notOk(unpublishedEntity.isPublished(), 'entity initially unpublished')
  entityMock.sys.publishedVersion = 2
  const publishedEntity = wrapperMethod(httpMock, entityMock)
  t.ok(publishedEntity.isPublished(), 'entity is now published')
}

export function isUpdatedTest (t, setup, { wrapperMethod }) {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  const unpublishedEntity = wrapperMethod(httpMock, entityMock)
  t.notOk(unpublishedEntity.isUpdated(), 'entity not published')
  entityMock.sys.publishedVersion = 2
  entityMock.sys.version = 3
  const unchangedEntity = wrapperMethod(httpMock, entityMock)
  t.notOk(unchangedEntity.isUpdated(), 'entity initially unchanged')
  entityMock.sys.version = 5
  const changedEntity = wrapperMethod(httpMock, entityMock)
  t.ok(changedEntity.isUpdated(), 'entity is now updated')
}

export function isDraftTest (t, setup, { wrapperMethod }) {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  const unpublishedEntity = wrapperMethod(httpMock, entityMock)
  t.ok(unpublishedEntity.isDraft(), 'entity is in draft mode')
  entityMock.sys.publishedVersion = 2
  entityMock.sys.version = 3
  const unchangedEntity = wrapperMethod(httpMock, entityMock)
  t.notOk(unchangedEntity.isDraft(), 'entity is now published')
}

export function isArchivedTest (t, setup, { wrapperMethod }) {
  t.plan(2)
  const { httpMock, entityMock } = setup()
  const unarchivedEntity = wrapperMethod(httpMock, entityMock)
  t.notOk(unarchivedEntity.isArchived(), 'entity initially unarchived')
  entityMock.sys.archivedVersion = 2
  const archivedEntity = wrapperMethod(httpMock, entityMock)
  t.ok(archivedEntity.isArchived(), 'entity is now archived')
}

export function omitAndDeleteFieldTest (t, setup, { wrapperMethod }) {
  t.plan(3)
  const { httpMock, entityMock } = setup()
  entityMock.fields = [
    {
      id: 'title',
      name: 'Title',
      value: 'myTitle',
      omitted: false,
      deleted: false
    }
  ]
  /* Since this method calls update() 2x, first call needs to return a properly wrapped entity. */
  const plainEntity = wrapperMethod(httpMock, entityMock)
  httpMock.put = sinon.stub().returns(Promise.resolve({data: plainEntity}))
  const entity = wrapperMethod(httpMock, entityMock)
  return entity.omitAndDeleteField('title')
    .then((response) => {
      t.ok(response.toPlainObject, 'response is wrapped')
      t.equals(httpMock.put.args[0][1].fields.find(field => field.id === 'title').omitted, true, 'omitted was set to true in the first update')
      t.equals(httpMock.put.args[1][1].fields.find(field => field.id === 'title').deleted, true, 'deleted was set to true in the first update')
    })
}

export function failingOmitAndDeleteFieldTest (t, setup, { wrapperMethod }) {
  t.plan(1)
  const { httpMock, entityMock } = setup()
  const entity = wrapperMethod(httpMock, entityMock)
  return entity.omitAndDeleteField('doesntExist').catch(r => {
    t.ok(r, 'throws an error when field doesn\'t exist')
  })
}
