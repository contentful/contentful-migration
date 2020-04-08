export default function organizationInvitationTests (t, organization) {
  t.test('Creates, gets an invitation in the organization and remove membership after test', (t) => {
    t.plan(5)
    return organization.createOrganizationInvitation({
      email: 'test.user@contentful.com',
      firstName: 'Test',
      lastName: 'User',
      role: 'developer'
    })
      .then((response) => organization.getOrganizationInvitation(response.sys.id))
      .then((invitation) => {
        t.equal(invitation.sys.type, 'Invitation', 'type')
        t.equal(invitation.sys.status, 'open', 'status')
        t.equal(invitation.sys.user, null, 'user')
        t.equal(invitation.sys.organizationMembership.sys.type, 'Link', 'type')
        t.equal(invitation.sys.organizationMembership.sys.linkType, 'OrganizationMembership', 'linkType')

        return organization.getOrganizationMembership(invitation.sys.organizationMembership.sys.id)
      })
      .then((membership) => {
        // delete membership means also delete the invitation for this user
        membership.delete()
      })
  })
}
