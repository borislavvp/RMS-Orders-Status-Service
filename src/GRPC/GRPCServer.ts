import * as services from './generated/messages_grpc_pb';
import * as messages from './generated/messages_pb';

import grpc from '@grpc/grpc-js';

export class GRPCServer {
  /**
   * Implements the SayHello RPC method.
   */
  public sayHello(call:any, callback:any) {
    var reply = new messages.HelloReq();
    reply.setName('Hello ' + call.request.getName());
    callback(null, reply);
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
