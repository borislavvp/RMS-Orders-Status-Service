import dotenv from 'dotenv';

import {SocketServer} from './WebSocket/SocketServer';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const server = new SocketServer();
server.start();
