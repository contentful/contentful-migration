export default function teamMembershipTests (t, organization) {
  t.test('Gets teamMemberships for team', (t) => {
    t.plan(3)
    return organization.getTeamMemberships({teamId: '7pIEx2fMx53SSR1jd7C46M'})
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.ok(response.items[0].sys.type, 'TeamMembership')
      })
  })

  t.test('Gets one teamMembership', (t) => {
    t.plan(3)
    return organization.getTeamMembership('7pIEx2fMx53SSR1jd7C46M', '1tzDxN5zD2JbUjwzntAlLW')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.sys.id, '1tzDxN5zD2JbUjwzntAlLW')
        t.ok(response.sys.type, 'TeamMembership')
      })
  })

  t.test('Create, update and delete teamMembership', (t) => {
    t.plan(7)
    return organization.createTeamMembership('7pIEx2fMx53SSR1jd7C46M', {
      admin: true, organizationMembershipId: '5mDCHGHvePI8NOzw0WaY2Z'
    })
      .then(async (teamMembership) => {
        t.ok(teamMembership.sys, 'sys')
        t.equal(teamMembership.admin, true)
        t.ok(teamMembership.sys.type, 'TeamMembership')
        teamMembership.admin = false
        const updatedTeamMembership = await teamMembership.update()
        t.ok(updatedTeamMembership.sys, 'sys')
        t.equal(updatedTeamMembership.admin, false)
        t.ok(updatedTeamMembership.sys.type, 'TeamMembership')
        await updatedTeamMembership.delete()
        t.pass('teamMembership was deleted')
      })
  })

  t.test('Gets teamMemberships for organization', (t) => {
    t.plan(3)
    return organization.getTeamMemberships()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.ok(response.items[0].sys.type, 'TeamMembership')
      })
  })

  t.test('Gets teamMemberships for organization with query', (t) => {
    t.plan(4)
    return organization.getTeamMemberships({query: {limit: 1}})
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.equal(response.items.length, 1)
        t.ok(response.items[0].sys.type, 'TeamMembership')
      })
  })
}
