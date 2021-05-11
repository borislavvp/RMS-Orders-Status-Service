import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

export enum OrderStatus {
    NEW,
    PREPARED,
    PICKED,
    DELIVERED
}

interface OrderStatusChangePayload {
  orderNumber: number;
  orderStatus: OrderStatus
}

export class OrderStatusChangeMessage implements Message {
  type = ServerMessageType.ORDER_STATUS_CHANGE;
  payload: OrderStatusChangePayload;
  constructor(payload: OrderStatusChangePayload) {
    this.payload = payload;
  }
}
