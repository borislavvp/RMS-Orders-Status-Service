import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";
interface OrderAvailablePayload {
  orderNumber:number
}
export default class OrderAvailableMessage implements Message {
  type = ServerMessageType.ORDER_AVAILABLE;
  payload: OrderAvailablePayload;
  constructor(payload: OrderAvailablePayload) {
    this.payload = payload;
  }
}
