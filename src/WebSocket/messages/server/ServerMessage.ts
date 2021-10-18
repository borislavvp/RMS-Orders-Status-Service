import {OrderStatusChangeMessage} from "./OrderStatusChangeMessage";
import {OrderAvailableMessage} from "./OrderAvailableMessage";
import { OrderReadyForPickuMessage } from "./OrderReadyForPickupMessage";

export type ServerMessage = OrderAvailableMessage | OrderStatusChangeMessage | OrderReadyForPickuMessage