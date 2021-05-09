// package: messages
// file: messages.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as messages_pb from "./messages_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloServiceService_ISayHello;
}

interface IHelloServiceService_ISayHello extends grpc.MethodDefinition<messages_pb.HelloReq, messages_pb.HelloResponse> {
    path: "/messages.HelloService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.HelloReq>;
    requestDeserialize: grpc.deserialize<messages_pb.HelloReq>;
    responseSerialize: grpc.serialize<messages_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    sayHello: grpc.handleUnaryCall<messages_pb.HelloReq, messages_pb.HelloResponse>;
}

export interface IHelloServiceClient {
    sayHello(request: messages_pb.HelloReq, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: messages_pb.HelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: messages_pb.HelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: messages_pb.HelloReq, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: messages_pb.HelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: messages_pb.HelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
