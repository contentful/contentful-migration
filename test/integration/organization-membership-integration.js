export default function organizationMembershipTests (t, organization) {
  t.test('Gets organizationMemberships', (t) => {
    t.plan(2)
    return organization.getOrganizationMemberships()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'fields')
      })
  })

  t.test('Gets organizationMembership', (t) => {
    t.plan(3)
    return organization.getOrganizationMembership('3ugleZJgHKk89I1P5MSDuY')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.sys.id, '3ugleZJgHKk89I1P5MSDuY')
        t.ok(response.sys.type, 'OrganizationMembership')
      })
  })
}
