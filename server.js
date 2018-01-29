'use strict';
const LocalWebServer = require('local-web-server');

const PORT = process.env.PORT || 80;
const PROXY_TO = process.env.PROXY_TO || '';

const localWebServer = new LocalWebServer();
const server = localWebServer.listen({
  port: PORT,
  rewrite: `/* -> ${ PROXY_TO }/$1`,
});
