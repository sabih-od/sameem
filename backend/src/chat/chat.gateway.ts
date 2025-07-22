// chat.gateway.ts
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@WebSocketGateway({
    cors: {
        origin: '*', // Set proper origin in production
    },
})
export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) {}

    afterInit(server: Server) {
        console.log('WebSocket initialized');
    }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(
        @MessageBody() dto: SendMessageDto,
        @ConnectedSocket() client: Socket,
    ) {
        const savedMessage = await this.chatService.sendMessage(dto);

        // Emit to all clients in the channel
        this.server.to(`channel_${dto.channelId}`).emit('new_message', savedMessage);
        return savedMessage;
    }

    @SubscribeMessage('join_channel')
    handleJoinChannel(
        @MessageBody() channelId: number,
        @ConnectedSocket() client: Socket,
    ) {
        client.join(`channel_${channelId}`);
        client.emit('joined_channel', channelId);
    }
}
