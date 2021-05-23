// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var orders_orders_pb = require('../orders/orders_pb.js');

function serialize_orders_rpcOrderAvailableReqest(arg) {
  if (!(arg instanceof orders_orders_pb.rpcOrderAvailableReqest)) {
    throw new Error('Expected argument of type orders.rpcOrderAvailableReqest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcOrderAvailableReqest(buffer_arg) {
  return orders_orders_pb.rpcOrderAvailableReqest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orders_rpcOrderAvailableResponse(arg) {
  if (!(arg instanceof orders_orders_pb.rpcOrderAvailableResponse)) {
    throw new Error('Expected argument of type orders.rpcOrderAvailableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcOrderAvailableResponse(buffer_arg) {
  return orders_orders_pb.rpcOrderAvailableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orders_rpcOrderStatusChangedReqest(arg) {
  if (!(arg instanceof orders_orders_pb.rpcOrderStatusChangedReqest)) {
    throw new Error('Expected argument of type orders.rpcOrderStatusChangedReqest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcOrderStatusChangedReqest(buffer_arg) {
  return orders_orders_pb.rpcOrderStatusChangedReqest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orders_rpcOrderStatusChangedResponse(arg) {
  if (!(arg instanceof orders_orders_pb.rpcOrderStatusChangedResponse)) {
    throw new Error('Expected argument of type orders.rpcOrderStatusChangedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcOrderStatusChangedResponse(buffer_arg) {
  return orders_orders_pb.rpcOrderStatusChangedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var rpcOrdersService = exports.rpcOrdersService = {
  orderStatusChanged: {
    path: '/orders.rpcOrders/OrderStatusChanged',
    requestStream: false,
    responseStream: false,
    requestType: orders_orders_pb.rpcOrderStatusChangedReqest,
    responseType: orders_orders_pb.rpcOrderStatusChangedResponse,
    requestSerialize: serialize_orders_rpcOrderStatusChangedReqest,
    requestDeserialize: deserialize_orders_rpcOrderStatusChangedReqest,
    responseSerialize: serialize_orders_rpcOrderStatusChangedResponse,
    responseDeserialize: deserialize_orders_rpcOrderStatusChangedResponse,
  },
  orderAvailable: {
    path: '/orders.rpcOrders/OrderAvailable',
    requestStream: false,
    responseStream: false,
    requestType: orders_orders_pb.rpcOrderAvailableReqest,
    responseType: orders_orders_pb.rpcOrderAvailableResponse,
    requestSerialize: serialize_orders_rpcOrderAvailableReqest,
    requestDeserialize: deserialize_orders_rpcOrderAvailableReqest,
    responseSerialize: serialize_orders_rpcOrderAvailableResponse,
    responseDeserialize: deserialize_orders_rpcOrderAvailableResponse,
  },
};

exports.rpcOrdersClient = grpc.makeGenericClientConstructor(rpcOrdersService);
