import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

interface OrderAvailablePayload {
    orderNumber: number;
    orderDate: string,
    customerName: string,
    location: string,
    amount:number
}

export class OrderAvailableMessage implements Message {
  type = ServerMessageType.ORDER_AVAILABLE;
  payload: OrderAvailablePayload;
  constructor(payload: OrderAvailablePayload) {
    this.payload = payload;
  }
}
