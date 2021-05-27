// package: orders
// file: orders/orders.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as orders_orders_pb from "../orders/orders_pb";

interface IrpcOrdersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    orderStatusChanged: IrpcOrdersService_IOrderStatusChanged;
    orderAvailable: IrpcOrdersService_IOrderAvailable;
}

interface IrpcOrdersService_IOrderStatusChanged extends grpc.MethodDefinition<orders_orders_pb.rpcOrderStatusChangedReqest, orders_orders_pb.rpcOrderStatusChangedResponse> {
    path: "/orders.rpcOrders/OrderStatusChanged";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_orders_pb.rpcOrderStatusChangedReqest>;
    requestDeserialize: grpc.deserialize<orders_orders_pb.rpcOrderStatusChangedReqest>;
    responseSerialize: grpc.serialize<orders_orders_pb.rpcOrderStatusChangedResponse>;
    responseDeserialize: grpc.deserialize<orders_orders_pb.rpcOrderStatusChangedResponse>;
}
interface IrpcOrdersService_IOrderAvailable extends grpc.MethodDefinition<orders_orders_pb.rpcOrderAvailableReqest, orders_orders_pb.rpcOrderAvailableResponse> {
    path: "/orders.rpcOrders/OrderAvailable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_orders_pb.rpcOrderAvailableReqest>;
    requestDeserialize: grpc.deserialize<orders_orders_pb.rpcOrderAvailableReqest>;
    responseSerialize: grpc.serialize<orders_orders_pb.rpcOrderAvailableResponse>;
    responseDeserialize: grpc.deserialize<orders_orders_pb.rpcOrderAvailableResponse>;
}

export const rpcOrdersService: IrpcOrdersService;

export interface IrpcOrdersServer {
    orderStatusChanged: grpc.handleUnaryCall<orders_orders_pb.rpcOrderStatusChangedReqest, orders_orders_pb.rpcOrderStatusChangedResponse>;
    orderAvailable: grpc.handleUnaryCall<orders_orders_pb.rpcOrderAvailableReqest, orders_orders_pb.rpcOrderAvailableResponse>;
}

export interface IrpcOrdersClient {
    orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
    orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
    orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
}

export class rpcOrdersClient extends grpc.Client implements IrpcOrdersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    public orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    public orderStatusChanged(request: orders_orders_pb.rpcOrderStatusChangedReqest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderStatusChangedResponse) => void): grpc.ClientUnaryCall;
    public orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
    public orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
    public orderAvailable(request: orders_orders_pb.rpcOrderAvailableReqest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_orders_pb.rpcOrderAvailableResponse) => void): grpc.ClientUnaryCall;
}
