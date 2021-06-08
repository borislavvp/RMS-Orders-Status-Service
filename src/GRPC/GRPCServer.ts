import grpc, { sendUnaryData } from '@grpc/grpc-js';

import services from './generated/orders/orders_grpc_pb';
import messages from './generated/orders/orders_pb';

import { SocketServer } from '../WebSocket/SocketServer';
import { OrderAvailableMessage, OrderProduct } from '../WebSocket/messages/server/OrderAvailableMessage';
import { OrderStatusChangeMessage, OrderStatus } from '../WebSocket/messages/server/OrderStatusChangeMessage';

import { validateClientToken } from '../shared/utils/validateClientToken';

export class GRPCServer {
  private _socketServer: SocketServer;

  constructor(socketServer: SocketServer) {
    this._socketServer = socketServer;
  }

  private mapGrpcOrderStatusToSocket(status: messages.rpcOrderStatus):OrderStatus {
    switch (status) {
      case messages.rpcOrderStatus.NEW:
        return OrderStatus.New
      case messages.rpcOrderStatus.PREPARING:
        return OrderStatus.Preparing
      case messages.rpcOrderStatus.PREPARED:
        return OrderStatus.Prepared
      case messages.rpcOrderStatus.DELIVERING:
        return OrderStatus.Delivering
      case messages.rpcOrderStatus.DELIVERED:
        return OrderStatus.Delivering
      default:
        return null;
    }
  }

  private mapGrpcProductsMessageToSocket(product: messages.rpcOrderProduct):OrderProduct {
    return {
      productId : product.getProductid(),
      imgUrl : product.getImageurl(),
      ingredients : product.getIngredients(),
      name : product.getName(),
      price : product.getPrice(),
      quantity : product.getQuantity()
    }
  }
  /**
   * Implements the orderAvailable RPC method.
   */
  public orderStatusChanged = (
    call: grpc.ServerUnaryCall<messages.rpcOrderStatusChangedReqest, messages.rpcOrderStatusChangedResponse>,
    callback: sendUnaryData<messages.rpcOrderStatusChangedResponse>) => {
    const reply = new messages.rpcOrderStatusChangedResponse();
    try {
      const token = `${call.metadata.get("authorization")}`
      if (token.startsWith("Bearer ") && validateClientToken(token.substring(7,token.length))) {
        this._socketServer.send(new OrderStatusChangeMessage({
          orderNumber: call.request.getOrdernumber(),
          orderStatus: this.mapGrpcOrderStatusToSocket(call.request.getStatus())
        }))
  
        reply.setSucceeded(true);
        callback(null,reply);
      } else {
        reply.setSucceeded(false);
        reply.setErrormessage("Invalid authorization token!")
        callback(null,reply);
      }
    } catch (error) {
      reply.setSucceeded(false);
      reply.setErrormessage("Something wen't wrong with informing the clients!")
      callback(null,reply);
    }
  }
  /**
   * Implements the orderAvailable RPC method.
   */
  public orderAvailable = (
    call: grpc.ServerUnaryCall<messages.rpcOrderAvailableReqest, messages.rpcOrderAvailableResponse>,
    callback: sendUnaryData<messages.rpcOrderAvailableResponse>) => {
    const reply = new messages.rpcOrderAvailableResponse();
    try {
      const token = `${call.metadata.get("authorization")}`
       if (token.startsWith("Bearer ") && validateClientToken(token.substring(7,token.length))) {
        this._socketServer.send(new OrderAvailableMessage({
          orderNumber : call.request.getNeworder().getOrdernumber(),
          customerName : call.request.getNeworder().getCustomername(),
          orderDate : call.request.getNeworder().getDate(),
          customerPhone : call.request.getNeworder().getCustomerphone(),
          location : call.request.getNeworder().getLocation(),
          amount : call.request.getNeworder().getAmount(),
          products : call.request.getNeworder().getProductsList().map(p => this.mapGrpcProductsMessageToSocket(p)),
        }))

        reply.setSucceeded(true);
        callback(null, reply);
      } else {
        reply.setSucceeded(false);
        reply.setErrormessage("Invalid authorization token!")
        callback(null,reply);
      }
    } catch (error) {
      reply.setSucceeded(false);
      reply.setErrormessage("Something wen't wrong with informing the clients!")
      callback(null,reply);
    }
  }
  
  /**
   * Starts an RPC server that receives requests for the Greeter service at the
   * sample server port
   */
  public start() {
    const server = new grpc.Server();
    server.addService(
      services.rpcOrdersService, {
        orderAvailable: this.orderAvailable,
        orderStatusChanged: this.orderStatusChanged,
      }
    );
    server.bindAsync('[::]:50051', grpc.ServerCredentials.createInsecure(), () => {
      server.start();
    });
    console.log("GRPC Started!")
  }

}
