export default function teamTests (t, organization) {
  t.test('Gets teams', (t) => {
    t.plan(3)
    return organization.getTeams()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.equal(response.items[0].sys.type, 'Team')
      })
  })

  t.test('Gets team', (t) => {
    t.plan(4)
    return organization.getTeam('7pIEx2fMx53SSR1jd7C46M')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.equal(response.sys.id, '7pIEx2fMx53SSR1jd7C46M')
        t.equal(response.sys.type, 'Team')
        t.equal(response.name, 'SDK test team [DO NOT DELETE]')
      })
  })

  t.test('Create, update and delete team', (t) => {
    t.plan(8)
    return organization.createTeam({
      name: 'test team'
    })
      .then(async (team) => {
        t.ok(team.sys, 'sys')
        t.equal(team.name, 'test team')
        t.equal(team.sys.type, 'Team')
        team.description = 'test description'
        const updatedTeam = await team.update()
        t.ok(updatedTeam.sys, 'sys')
        t.equal(updatedTeam.name, 'test team')
        t.equal(updatedTeam.sys.type, 'Team')
        t.equal(updatedTeam.description, 'test description')
        await updatedTeam.delete()
        t.pass('team was deleted')
      })
  })
}
