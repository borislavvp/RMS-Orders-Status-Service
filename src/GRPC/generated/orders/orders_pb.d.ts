// package: orders
// file: orders/orders.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class rpcOrderProduct extends jspb.Message { 
    getProductid(): number;
    setProductid(value: number): rpcOrderProduct;
    getName(): string;
    setName(value: string): rpcOrderProduct;
    getIngredients(): string;
    setIngredients(value: string): rpcOrderProduct;
    getPrice(): number;
    setPrice(value: number): rpcOrderProduct;
    getQuantity(): number;
    setQuantity(value: number): rpcOrderProduct;
    getImageurl(): string;
    setImageurl(value: string): rpcOrderProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcOrderProduct.AsObject;
    static toObject(includeInstance: boolean, msg: rpcOrderProduct): rpcOrderProduct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcOrderProduct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcOrderProduct;
    static deserializeBinaryFromReader(message: rpcOrderProduct, reader: jspb.BinaryReader): rpcOrderProduct;
}

export namespace rpcOrderProduct {
    export type AsObject = {
        productid: number,
        name: string,
        ingredients: string,
        price: number,
        quantity: number,
        imageurl: string,
    }
}

export class rpcOrder extends jspb.Message { 
    getOrdernumber(): number;
    setOrdernumber(value: number): rpcOrder;
    getStatus(): rpcOrderStatus;
    setStatus(value: rpcOrderStatus): rpcOrder;
    getDate(): string;
    setDate(value: string): rpcOrder;
    getCustomername(): string;
    setCustomername(value: string): rpcOrder;
    getLocation(): string;
    setLocation(value: string): rpcOrder;
    getCustomerphone(): string;
    setCustomerphone(value: string): rpcOrder;
    getAmount(): number;
    setAmount(value: number): rpcOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcOrder.AsObject;
    static toObject(includeInstance: boolean, msg: rpcOrder): rpcOrder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcOrder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcOrder;
    static deserializeBinaryFromReader(message: rpcOrder, reader: jspb.BinaryReader): rpcOrder;
}

export namespace rpcOrder {
    export type AsObject = {
        ordernumber: number,
        status: rpcOrderStatus,
        date: string,
        customername: string,
        location: string,
        customerphone: string,
        amount: number,
    }
}

export class rpcOrderStatusChangedReqest extends jspb.Message { 
    getOrdernumber(): number;
    setOrdernumber(value: number): rpcOrderStatusChangedReqest;
    getStatus(): rpcOrderStatus;
    setStatus(value: rpcOrderStatus): rpcOrderStatusChangedReqest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcOrderStatusChangedReqest.AsObject;
    static toObject(includeInstance: boolean, msg: rpcOrderStatusChangedReqest): rpcOrderStatusChangedReqest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcOrderStatusChangedReqest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcOrderStatusChangedReqest;
    static deserializeBinaryFromReader(message: rpcOrderStatusChangedReqest, reader: jspb.BinaryReader): rpcOrderStatusChangedReqest;
}

export namespace rpcOrderStatusChangedReqest {
    export type AsObject = {
        ordernumber: number,
        status: rpcOrderStatus,
    }
}

export class rpcOrderAvailableReqest extends jspb.Message { 

    hasNeworder(): boolean;
    clearNeworder(): void;
    getNeworder(): rpcOrder | undefined;
    setNeworder(value?: rpcOrder): rpcOrderAvailableReqest;
    clearProductsList(): void;
    getProductsList(): Array<rpcOrderProduct>;
    setProductsList(value: Array<rpcOrderProduct>): rpcOrderAvailableReqest;
    addProducts(value?: rpcOrderProduct, index?: number): rpcOrderProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcOrderAvailableReqest.AsObject;
    static toObject(includeInstance: boolean, msg: rpcOrderAvailableReqest): rpcOrderAvailableReqest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcOrderAvailableReqest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcOrderAvailableReqest;
    static deserializeBinaryFromReader(message: rpcOrderAvailableReqest, reader: jspb.BinaryReader): rpcOrderAvailableReqest;
}

export namespace rpcOrderAvailableReqest {
    export type AsObject = {
        neworder?: rpcOrder.AsObject,
        productsList: Array<rpcOrderProduct.AsObject>,
    }
}

export class rpcOrderReadyForPickupReqest extends jspb.Message { 

    hasNeworder(): boolean;
    clearNeworder(): void;
    getNeworder(): rpcOrder | undefined;
    setNeworder(value?: rpcOrder): rpcOrderReadyForPickupReqest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcOrderReadyForPickupReqest.AsObject;
    static toObject(includeInstance: boolean, msg: rpcOrderReadyForPickupReqest): rpcOrderReadyForPickupReqest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcOrderReadyForPickupReqest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcOrderReadyForPickupReqest;
    static deserializeBinaryFromReader(message: rpcOrderReadyForPickupReqest, reader: jspb.BinaryReader): rpcOrderReadyForPickupReqest;
}

export namespace rpcOrderReadyForPickupReqest {
    export type AsObject = {
        neworder?: rpcOrder.AsObject,
    }
}

export class rpcRequestResult extends jspb.Message { 
    getSucceeded(): boolean;
    setSucceeded(value: boolean): rpcRequestResult;
    getErrormessage(): string;
    setErrormessage(value: string): rpcRequestResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): rpcRequestResult.AsObject;
    static toObject(includeInstance: boolean, msg: rpcRequestResult): rpcRequestResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: rpcRequestResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): rpcRequestResult;
    static deserializeBinaryFromReader(message: rpcRequestResult, reader: jspb.BinaryReader): rpcRequestResult;
}

export namespace rpcRequestResult {
    export type AsObject = {
        succeeded: boolean,
        errormessage: string,
    }
}

export enum rpcOrderStatus {
    UNKNOWN = 0,
    NEW = 1,
    PREPARING = 2,
    PREPARED = 3,
    DELIVERING = 4,
    DELIVERED = 5,
}
