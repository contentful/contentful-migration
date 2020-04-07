export default function spaceMembersTests (t, space) {
  t.test('Gets spaceMembers', t => {
    t.plan(4)
    return space.getSpaceMembers().then(response => {
      t.ok(response.sys, 'sys')
      t.ok(response.sys.type, 'Array')
      t.ok(response.items, 'items')
      t.ok(response.items[0].sys.type, 'SpaceMember')
    })
  })
  t.test('Gets spaceMember', t => {
    t.plan(3)
    return space.getSpaceMember('0PCYk22mt1xD7gTKZhHycN').then(response => {
      t.ok(response.sys, 'sys')
      t.equal(response.sys.type, 'SpaceMember')
      t.ok(response.sys.id, 'w6xueg32zr68-0PCYk22mt1xD7gTKZhHycN')
    })
  })
}
