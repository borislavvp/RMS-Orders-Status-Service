import ws from 'ws';
import jwt from 'jsonwebtoken';
import { OrderStatus,OrderStatusChangeMessage} from './messages/server/OrderStatusChangeMessage';
import { ServerMessage } from './messages/server/ServerMessage';
import debounce from './utils/debounce';
import { ServerState } from './types/ServerState';
import { ServerMessageType } from './messages/server/ServerMessageType';
import { OrderAvailableMessage } from './messages/server/OrderAvailableMessage';
interface Client{
    [key:string]:ws
}
export class SocketServer {
    private server!: ws.Server;
    private serverMessagessBuffer: ServerMessage[];
    private serverState: ServerState;
    private clients: {
        byOrigin: {
            [key:string]:ws[]
        };
    }
    constructor() {
        this.serverMessagessBuffer = [];
        this.serverState = ServerState.CLOSED;
        this.clients = { byOrigin: {}};
    }
    
    public start() {
        this.server = new ws.Server(
            {
                port: 3333,
                verifyClient: (info: any) => {
                    const token = new URL(info.origin + info.req.url).searchParams.get("token");
                    return this.verifyClientToken(token)
                }
            });
        this.serverState = ServerState.OPEN;

        console.log(`App socket open at port ${JSON.stringify(this.server.options.port)}`);

        this.serverMessagessBuffer.push(new OrderAvailableMessage(
            {
                orderNumber: 123123,
                amount: 11,
                customerName: "Bobi",
                location: "Bomanshof 131",
                orderDate: "Tue May 11 2021"
            }))
        
        this.server.on("connection", (client, req) => {
            console.log(`Client - ${req.headers.origin} connected!`);
            this.clients.byOrigin = {
                ...this.clients.byOrigin,
                [req.headers.origin!]:
                    this.clients.byOrigin[req.headers.origin!]
                        ? [...this.clients.byOrigin[req.headers.origin!], client]
                        : [client]
            };
            this.flushServerMessages();
        });

        this.server.on("close", (e: any) => {
            this.serverState = ServerState.CLOSED;
            console.log(
                "Socket is closed. Reconnect will be attempted in 2 seconds.",
                e.reason
            );
            this.start();
        });
        this.server.on("error", (e: any) => {
            console.error("Socket encountered error: Closing socket");
            this.server.close();
        });
    }

    public send(message: ServerMessage) {
        if (this.serverState === ServerState.OPEN) {
            if (message.type === ServerMessageType.ORDER_AVAILABLE) {
                this.clients.byOrigin[process.env.RESTAURANT_APPLICATION_ORIGIN!]
                    ?.forEach(restaurantClient => {
                        if (restaurantClient.readyState === restaurantClient.OPEN) {
                            restaurantClient.send(JSON.stringify(message))
                        }
                    })
            } else {
                this.server.clients.forEach(client => {
                    if (client.readyState === client.OPEN) {
                        client.send(JSON.stringify(message))
                    }
                })
            }
        } else {
        this.serverMessagessBuffer.push(message);
            console.warn(
                `Server connection state is: ${
                 this.serverState}, placing ${JSON.stringify(message)} in queue.`
            );
        }
       
    }
    private flushServerMessages = debounce(() => {
                this.serverMessagessBuffer.forEach(m => this.send(m));
                this.serverMessagessBuffer = [];
            },1000);

    private verifyClientToken(token: string | null) {
        if (token) {
            const decoded = jwt.decode(token) as {[key:string]:any} ;
            return decoded["iss"] === process.env.TOKEN_ISSUER;
        }
        return false;
    }
}
