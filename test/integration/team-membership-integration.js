export default function teamMembershipTests (t, organization) {
  t.test('Gets teamMemberships', (t) => {
    t.plan(3)
    return organization.getTeamMemberships('7pIEx2fMx53SSR1jd7C46M')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.ok(response.items[0].sys.type, 'TeamMembership')
      })
  })

  t.test('Gets teamMembership', (t) => {
    t.plan(3)
    return organization.getTeamMembership('7pIEx2fMx53SSR1jd7C46M', '1tzDxN5zD2JbUjwzntAlLW')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.sys.id, '1tzDxN5zD2JbUjwzntAlLW')
        t.ok(response.sys.type, 'TeamMembership')
      })
  })

  t.test('Create and delete teamMembership', (t) => {
    t.plan(4)
    return organization.createTeamMembership('7pIEx2fMx53SSR1jd7C46M', {
      admin: true, organizationMembershipId: '5mDCHGHvePI8NOzw0WaY2Z'
    })
      .then(async (teamMembership) => {
        t.ok(teamMembership.sys, 'sys')
        t.equal(teamMembership.admin, true)
        t.ok(teamMembership.sys.type, 'TeamMembership')
        await teamMembership.delete()
        t.pass('teamMembership was deleted')
      })
  })
}
