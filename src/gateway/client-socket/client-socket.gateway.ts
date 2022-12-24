import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: ['http://localhost:5123', 'http://localhost:5123/'],
  },
})
export class ClientSocketGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection(client: any, ...args: any[]) {
    console.log('Connected');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
