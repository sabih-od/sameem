import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Chat } from './entities/chat.entity';
import { ChatMessage } from './entities/chat-message.entity';

@ApiTags('Chats')
@Controller('chats')
export class ChatsController {
  constructor(private readonly service: ChatsService) {}

  @Post()
  @ApiOkResponse({ description: 'Create new chat', type: Chat })
  createChat(@Body() dto: CreateChatDto) {
    return this.service.createChat(dto);
  }

  @Post('message')
  @ApiOkResponse({ description: 'Send a message in a chat', type: ChatMessage })
  sendMessage(@Body() dto: CreateChatMessageDto) {
    return this.service.createMessage(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all chats', type: Chat, isArray: true })
  getAllChats() {
    return this.service.findAllChats();
  }

  @Get(':chatId/messages')
  @ApiOkResponse({
    description: 'Get messages by chat ID',
    type: ChatMessage,
    isArray: true,
  })
  getMessages(@Param('chatId') chatId: string) {
    return this.service.getMessagesByChat(+chatId);
  }
}
