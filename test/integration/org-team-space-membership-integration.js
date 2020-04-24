export default function orgTeamSpaceMembershipTests (t, organization) {
  t.test('Get a single Team Space Membership', (t) => {
    t.plan(3)
    // create space membership for existing team
    return organization.getTeamSpaceMembership('6KPB2kockewetUV71cryiw')
      .then((response) => {
        t.equal(response.sys.type, 'TeamSpaceMembership', 'type')
        t.ok(response.sys.team, 'team')
        t.ok(response.roles, 'roles')
      })
  })

  t.test('Gets all Team Space Memberships in organization', (t) => {
    t.plan(3)
    return organization.getTeamSpaceMemberships()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.equals(response.items[0].sys.type, 'TeamSpaceMembership')
      })
  })

  t.test('Gets all Team Space Memberships in a team', (t) => {
    t.plan(3)
    return organization.getTeamSpaceMemberships({teamId: '6mjkr732nwCxRTDuh2vWHn'})
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.equals(response.items[0].sys.type, 'TeamSpaceMembership')
      })
  })
}
