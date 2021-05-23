import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

export interface OrderProduct{
  productId: number, 
  name: string, 
  ingredients: string,
  price:number,
  quantity:number
  imgUrl: string, 
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
