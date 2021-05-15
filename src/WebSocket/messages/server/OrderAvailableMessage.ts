import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

interface OrderProduct {
  id: number, 
  img: string, 
  name: string, 
  description: string,
  products: string,
  price:number
}

interface OrderAvailablePayload {
  orderNumber: number;
  orderDate: string,
  customerName: string,
  customerPhone: string,
  location: string,
  amount: number,
  products: OrderProduct[]
}

export class OrderAvailableMessage implements Message {
  type = ServerMessageType.ORDER_AVAILABLE;
  payload: OrderAvailablePayload;
  constructor(payload: OrderAvailablePayload) {
    this.payload = payload;
  }
}
