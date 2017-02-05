/**
 * listen
 * Created by dcorns on 2/4/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import * as net from 'net';
const server: net.Server = net.createServer((sk: net.Socket) => {
  console.log('client connected');
  sk.on('end', () => {
    console.log('client disconnected');
  });
  sk.write('hello\r\n');
  sk.pipe(sk);
});

server.on('error', (err: Error) => {
  throw err;
});

server.listen(8000, () => {
  console.log('server bound');
});