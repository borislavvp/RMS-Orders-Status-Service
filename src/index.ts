import dotenv from 'dotenv';
import { GRPCServer } from './GRPC/GRPCServer';
import { SocketServer } from './WebSocket/SocketServer';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const socket = new SocketServer();
socket.start();
const grpc = new GRPCServer(socket);
grpc.start();
