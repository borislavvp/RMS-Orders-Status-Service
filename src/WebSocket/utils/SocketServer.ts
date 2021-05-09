import ws from 'ws';
import jwt from 'jsonwebtoken';
import Messager from './Messager';
import OrderAvailableMessage from '../messages/server/OrderAvailableMessage';
import { ServerMessage } from '../messages/server/ServerMessage';
import debounce from './debounce';

export class SocketServer {
    private server!: ws.Server;
    private messager: Messager<ServerMessage["type"],ServerMessage>;
    private serverMessagessBuffer: ServerMessage[];

    constructor() {
        this.messager = new Messager<ServerMessage["type"], ServerMessage>();
        this.serverMessagessBuffer = [];
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
        
        console.log(`App socket open at port ${JSON.stringify(this.server.options.port)}`);
        this.serverMessagessBuffer.push(new OrderAvailableMessage({orderNumber:1234}))
        
        this.server.on("connection", (_, req) => {
            console.log(`Client - ${req.headers.origin} connected!`);
            this.flushServerMessages();
        });

        this.server.on("message", (e: any) => {
            const message = JSON.parse(e.data) as ServerMessage;
            this.messager.publish(message.type, message);
            console.log(`[Client connected] `);
        });

        this.server.on("close", (e: any) => {
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
        this.server.clients.forEach(client => {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify(message))
            }
        })
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
