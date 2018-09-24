const talkback = require('talkback');

const bodyMatcher = (tape, req) => {
  const tapeBody = tape.req.body;
  const reqBody = req.body;
  return tapeBody === reqBody;
};

const opts = {
  host: '',
  bodyMatcher,
  port: 3333,
  path: './recordings',
  ignoreHeaders: [
    'x-contentful-user-agent', 'authorization', 'user-agent', 'content-length', 'accept-encoding', 'connection'
  ]
};
const server = talkback(opts);
server.start(() => console.log(`Talkback Started.`));
