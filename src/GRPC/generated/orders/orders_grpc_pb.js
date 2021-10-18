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

function serialize_orders_rpcOrderReadyForPickupReqest(arg) {
  if (!(arg instanceof orders_orders_pb.rpcOrderReadyForPickupReqest)) {
    throw new Error('Expected argument of type orders.rpcOrderReadyForPickupReqest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcOrderReadyForPickupReqest(buffer_arg) {
  return orders_orders_pb.rpcOrderReadyForPickupReqest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_orders_rpcRequestResult(arg) {
  if (!(arg instanceof orders_orders_pb.rpcRequestResult)) {
    throw new Error('Expected argument of type orders.rpcRequestResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_rpcRequestResult(buffer_arg) {
  return orders_orders_pb.rpcRequestResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var rpcOrdersService = exports.rpcOrdersService = {
  orderStatusChanged: {
    path: '/orders.rpcOrders/OrderStatusChanged',
    requestStream: false,
    responseStream: false,
    requestType: orders_orders_pb.rpcOrderStatusChangedReqest,
    responseType: orders_orders_pb.rpcRequestResult,
    requestSerialize: serialize_orders_rpcOrderStatusChangedReqest,
    requestDeserialize: deserialize_orders_rpcOrderStatusChangedReqest,
    responseSerialize: serialize_orders_rpcRequestResult,
    responseDeserialize: deserialize_orders_rpcRequestResult,
  },
  orderAvailable: {
    path: '/orders.rpcOrders/OrderAvailable',
    requestStream: false,
    responseStream: false,
    requestType: orders_orders_pb.rpcOrderAvailableReqest,
    responseType: orders_orders_pb.rpcRequestResult,
    requestSerialize: serialize_orders_rpcOrderAvailableReqest,
    requestDeserialize: deserialize_orders_rpcOrderAvailableReqest,
    responseSerialize: serialize_orders_rpcRequestResult,
    responseDeserialize: deserialize_orders_rpcRequestResult,
  },
  orderReadyForPickup: {
    path: '/orders.rpcOrders/OrderReadyForPickup',
    requestStream: false,
    responseStream: false,
    requestType: orders_orders_pb.rpcOrderReadyForPickupReqest,
    responseType: orders_orders_pb.rpcRequestResult,
    requestSerialize: serialize_orders_rpcOrderReadyForPickupReqest,
    requestDeserialize: deserialize_orders_rpcOrderReadyForPickupReqest,
    responseSerialize: serialize_orders_rpcRequestResult,
    responseDeserialize: deserialize_orders_rpcRequestResult,
  },
};

exports.rpcOrdersClient = grpc.makeGenericClientConstructor(rpcOrdersService);
