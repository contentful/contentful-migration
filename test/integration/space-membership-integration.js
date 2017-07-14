import generateRandomId from './generate-random-id'

export default function spaceMembershipTests (t, space) {
  t.test('Gets spaceMemberships', (t) => {
    t.plan(2)
    return space.getSpaceMemberships()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'fields')
      })
  })

  t.test('Create spaceMembership with id', (t) => {
    const id = generateRandomId('spaceMembership')
    const email = generateRandomId('js-cma-sdk-tests') + '@contentful.com'
    return space.getRoles()
      .then((roles) => {
        return space.createSpaceMembershipWithId(id, {
          admin: false,
          email: email,
          roles: [
            { sys: { type: 'Link', linkType: 'Role', id: roles.items[0].sys.id } }
          ]
        })
          .then((spaceMembership) => {
            t.equals(spaceMembership.sys.id, id, 'id')
            return spaceMembership.delete()
          })
      })
  })

  t.test('Create spaceMembership', (t) => {
    const email = generateRandomId('js-cma-sdk-tests') + '@contentful.com'
    return space.getRoles()
      .then((roles) => {
        return space.createSpaceMembership({
          admin: false,
          email: email,
          roles: [
            { sys: { type: 'Link', linkType: 'Role', id: roles.items[0].sys.id } }
          ]
        })
          .then((spaceMembership) => {
            t.ok(spaceMembership.user, 'user')
            t.notOk(spaceMembership.admin, 'admin')
            delete spaceMembership.user
            spaceMembership.admin = true
            spaceMembership.update()
              .then((updatedSpaceMembership) => {
                t.ok(spaceMembership.admin, 'admin')
                return updatedSpaceMembership.delete()
              })
          })
      })
  })
}
