import grpc, { sendUnaryData } from '@grpc/grpc-js';

import services from './generated/messages_grpc_pb';
import messages from './generated/messages_pb';

import { SocketServer } from '../WebSocket/utils/SocketServer';

export class GRPCServer {
  private _socketServer: SocketServer;

  constructor(socketServer: SocketServer) {
    this._socketServer = socketServer;
  }

  /**
   * Implements the SayHello RPC method.
   */
  public sayHello(call: grpc.ServerUnaryCall<messages.HelloReq, messages.HelloResponse>, callback: sendUnaryData<messages.HelloResponse>) {
    var reply = new messages.HelloResponse();
    reply.setMessage('Hello ' + call.request.getName());
    callback(null,reply);
  }
  
  /**
   * Starts an RPC server that receives requests for the Greeter service at the
   * sample server port
   */
  public start() {
    var server = new grpc.Server();
    server.addService(services.HelloServiceService, {sayHello: this.sayHello});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
      server.start();
    });
    console.log("GRPC Started!")
  }

}
