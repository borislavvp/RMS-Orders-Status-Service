import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

interface OrderReadyForPickuPayload {
  orderNumber: number;
  orderDate: string,
  customerName: string,
  customerPhone: string,
  location: string,
  amount: number,
}

export class OrderReadyForPickuMessage implements Message {
  type = ServerMessageType.ORDER_READY_FOR_PICKUP;
  payload: OrderReadyForPickuPayload;
  constructor(payload: OrderReadyForPickuPayload) {
    this.payload = payload;
  }
}
