export function environmentTests (t, space, waitForEnvironmentToBeReady) {
  t.test('creates an environment', (t) => {
    t.plan(2)
    return space.createEnvironment({name: 'test-env'})
      .then((response) => {
        t.ok(response.sys.type, 'Environment', 'env is created')
        t.ok(response.name, 'test-env', 'env is created with name')
      })
  })

  t.test('creates an enviroment with an id', (t) => {
    t.plan(2)
    return space.createEnvironmentWithId('myId', {name: 'myId'})
      .then((response) => {
        t.equals(response.name, 'myId', 'env was created with correct name')
        t.equals(response.sys.id, 'myId', 'env was created with id')
      })
  })

  t.test('env is created with master as source when no source id is provided', (t) => {
    t.plan(4)
    return space.createContentTypeWithId('testEntity', {name: 'testEntity'})
      .then((contentType) => contentType.publish())
      .then(() => space.createEnvironmentWithId('newEnv', {name: 'newEnv'}))
      .then((environment) => {
        t.equals(environment.name, 'newEnv', 'env is created with correct name')
        t.equals(environment.sys.id, 'newEnv', 'env is created with correct id')
        return waitForEnvironmentToBeReady(space, environment)
      })
      .then((readyEnv) => readyEnv.getContentType('testEntity'))
      .then((testCts) => {
        t.ok(testCts)
        t.equals(testCts.sys.id, 'testEntity', 'new env still has content type, created from master')
      })
  })

  t.test('creates environment from given source environment', (t) => {
    t.plan(2)
    let fromMasterCtCount = 0
    // create an env from master, note how many contentTypes it has
    return space.createEnvironmentWithId('fromMaster', {name: 'fromMaster'})
      .then((environment) => waitForEnvironmentToBeReady(space, environment))
      .then((readyEnvironment) => readyEnvironment.getContentTypes())
      .then((contentTypes) => {
        fromMasterCtCount = contentTypes.items.length
      })
      // write something to master
      .then(() => space.createContentTypeWithId('myNewEntity', {name: 'myNewEntity'}))
      .then((contentType) => contentType.publish())
      // confirm num cts in master
      .then(() => space.getContentTypes())
      .then((masterCts) => {
        t.notEquals(masterCts, fromMasterCtCount, 'master has more content types than "fromMaster" env')
      })
      // create a new env with "fromMaster" as the source
      .then(() => space.createEnvironmentWithId('newEmptyEnv', {name: 'newEmptyEnv'}, 'fromMaster'))
      .then((newEnv) => waitForEnvironmentToBeReady(space, newEnv))
      .then((readyNewEnv) => readyNewEnv.getContentTypes())
      // expect cts to be same as "fromMaster"
      .then((cts) => {
        t.equals(cts.items.length, fromMasterCtCount, 'new env with non-master source has correct num content types')
      })
  })
}
