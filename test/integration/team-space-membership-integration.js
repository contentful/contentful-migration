export default function teamSpaceMembershipTests (t, space) {
  t.test('Create, update and delete teamSpaceMembership', (t) => {
    t.plan(3)
    // create space membership for existing team
    return space.createTeamSpaceMembership('5vllqmpyrhlgaz0xb2S90C', {
      admin: false,
      roles: [
        {
          sys: {
            type: 'Link',
            linkType: 'Role',
            id: '6YFO0dKMUjeXB5OPoWnoNm' // role developer
          }
        }
      ]
    })
      .then((response) => space.getTeamSpaceMembership(response.sys.id))
      .then(teamMembership => {
        teamMembership.roles = [
          {
            sys: {
              type: 'Link',
              linkType: 'Role',
              id: '6YFc9mw7PREXh5FQ1lKSN6' // change role to author
            }
          }
        ]
        teamMembership.update()
        return teamMembership
      })
      .then((teamMembership) => {
        t.equal(teamMembership.sys.type, 'TeamSpaceMembership', 'type')
        t.ok(teamMembership.sys.team, 'team')
        t.ok(teamMembership.roles, 'roles')
        return space.getTeamSpaceMembership(teamMembership.sys.id)
      })
      .then((membership) => {
        // delete team space membership
        membership.delete()
      })
  })
}
