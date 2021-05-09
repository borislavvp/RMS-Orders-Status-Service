import dotenv from 'dotenv';
import { ServerMessage } from './WebSocket/messages/server/ServerMessage';

import {SocketServer} from './WebSocket/utils/SocketServer';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const server = new SocketServer<ServerMessage,ServerMessage>();
server.start();
