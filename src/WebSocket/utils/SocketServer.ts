import ws from 'ws';
import jwt from 'jsonwebtoken';
import { Message } from '../messages/Message';
import Messager from './Messager';

export class SocketServer<ServerMessage extends Message,ClientMessage extends Message> {
    private server!: ws.Server;
    private messager: Messager<ClientMessage["type"],ClientMessage>;
    private serverMessagessBuffer: ServerMessage[];

    constructor() {
        this.messager = new Messager<ClientMessage["type"], ClientMessage>();
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
        
        this.server.on("connection", (socket: ws.Server) => {
            console.log(`App socket open at port ${JSON.stringify(this.server.options.port)}`);
            this.serverMessagessBuffer.forEach(m => this.send(m));
            this.serverMessagessBuffer = [];
            socket.on("message", (e: any) => {
                const message = JSON.parse(e.data) as ClientMessage;
                this.messager.publish(message.type, message);
                console.log(`[Client connected] `);
            });

            socket.on("close", (e: any) => {
                console.log(
                    "Socket is closed. Reconnect will be attempted in 2 seconds.",
                    e.reason
                );
            });
            socket.on("error", (e: any) => {
                console.error("Socket encountered error: Closing socket");
            });
        });
    }

    public send(message: ServerMessage) {
        this.server.clients.forEach(client => client.send(message))
    }
    
    private verifyClientToken(token: string | null) {
        if (token) {
            const decoded = jwt.decode(token) as {[key:string]:any} ;
            return decoded["iss"] === process.env.TOKEN_ISSUER;
        }
        return false;
    }
}
