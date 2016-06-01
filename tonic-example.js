var contentful = require('contentful-management')
var client = contentful.createClient({
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'YOUR_ACCESS_TOKEN'
})
// This API call will request a space with the specified ID
var space = await client.getSpace('spaceId')
// Now that we have a space, we can get entries from that space
await space.getEntries()
