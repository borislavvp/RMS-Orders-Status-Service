import dotenv from 'dotenv';
import { GRPCServer } from './GRPC/GRPCServer';
import { ServerMessage } from './WebSocket/messages/server/ServerMessage';

import {SocketServer} from './WebSocket/utils/SocketServer';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const socket = new SocketServer();
socket.start();
const grpc = new GRPCServer();
grpc.start();
