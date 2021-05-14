import {OrderStatusChangeMessage} from "./OrderStatusChangeMessage";
import {OrderAvailableMessage} from "./OrderAvailableMessage";

export type ServerMessage = OrderAvailableMessage | OrderStatusChangeMessage