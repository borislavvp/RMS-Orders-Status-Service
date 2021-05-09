// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var messages_pb = require('./messages_pb.js');

function serialize_messages_HelloReq(arg) {
  if (!(arg instanceof messages_pb.HelloReq)) {
    throw new Error('Expected argument of type messages.HelloReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_HelloReq(buffer_arg) {
  return messages_pb.HelloReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_HelloResponse(arg) {
  if (!(arg instanceof messages_pb.HelloResponse)) {
    throw new Error('Expected argument of type messages.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_HelloResponse(buffer_arg) {
  return messages_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  sayHello: {
    path: '/messages.HelloService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.HelloReq,
    responseType: messages_pb.HelloResponse,
    requestSerialize: serialize_messages_HelloReq,
    requestDeserialize: deserialize_messages_HelloReq,
    responseSerialize: serialize_messages_HelloResponse,
    responseDeserialize: deserialize_messages_HelloResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
