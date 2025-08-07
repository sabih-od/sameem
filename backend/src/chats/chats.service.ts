import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { ChatMessage } from './entities/chat-message.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { ChatType } from './dto/create-chat.dto';
import { User } from 'src/users/entities/user.entity';
import { Community } from 'src/communities/entities/communities.entity';

@Injectable()
export class ChatsService {
  constructor(
    @Inject('CHAT_REPOSITORY') private readonly chatRepo: Repository<Chat>,
    @Inject('CHAT_MESSAGE_REPOSITORY') private readonly messageRepo: Repository<ChatMessage>,
  ) {}

  async createChat(dto: CreateChatDto) {
    const chat = this.chatRepo.create({
      type: dto.type,
      community: dto.community_id ? { id: dto.community_id } : null,
    });

    return await this.chatRepo.save(chat);
  }

  async createMessage(dto: CreateChatMessageDto) {
    const message = this.messageRepo.create({
      chat: { id: dto.chat_id },
      sender: { id: dto.sender_id },
      content: dto.content,
    });

    return await this.messageRepo.save(message);
  }

  async getMessagesByChat(chatId: number) {
    return await this.messageRepo.find({
      where: { chat: { id: chatId } },
      relations: ['sender'],
      order: { created_at: 'ASC' },
    });
  }

  async findAllChats() {
    return this.chatRepo.find({
      relations: ['community'],
    });
  }
}
