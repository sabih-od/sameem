import { Inject, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { ChatUser } from './entities/chat-user.entity';
import { ChatMessage } from './entities/chat-message.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { Community } from '../communities/entities/communities.entity';
import {CommunityJoin} from "../community-joins/entities/community-join.entity";

@Injectable()
export class ChatService {
    constructor(
        @Inject('CHANNEL_REPOSITORY')
        private readonly channelRepository: Repository<Channel>,

        @Inject('CHAT_USER_REPOSITORY')
        private readonly chatUserRepository: Repository<ChatUser>,

        @Inject('CHAT_MESSAGE_REPOSITORY')
        private readonly chatMessageRepository: Repository<ChatMessage>,

        @Inject('COMMUNITY_REPOSITORY')
        private readonly communityRepository: Repository<Community>,

        @Inject('COMMUNITY_JOIN_REPOSITORY')
        private readonly communityJoinRepository: Repository<CommunityJoin>,
    ) {}

    // async createChannel(dto: CreateChannelDto) {
    //     const channel = this.channelRepository.create({
    //         chatType: dto.chatType,
    //         community: dto.communityId ? { id: dto.communityId } : null,
    //         creator: { id: dto.participantIds?.[0] || 1 },
    //     });
    //
    //     const saved = await this.channelRepository.save(channel);
    //
    //     if (dto.chatType === 'private' && dto.participantIds) {
    //         const users = dto.participantIds.map(id => ({
    //             channel: saved,
    //             user: { id }
    //         }));
    //         const chatUsers = this.chatUserRepository.create(users);
    //         await this.chatUserRepository.save(chatUsers);
    //     }
    //
    //     return saved;
    // }

    async createChannel(dto: CreateChannelDto) {
        const channel = this.channelRepository.create({
            chatType: dto.chatType,
            community: dto.communityId ? { id: dto.communityId } : null,
            creator: { id: dto.participantIds?.[0] || 1 },
        });

        const saved = await this.channelRepository.save(channel);

        let usersToAdd = [];

        if (dto.chatType === 'private' && dto.participantIds) {
            usersToAdd = dto.participantIds.map(id => ({
                channel: saved,
                user: { id }
            }));
        }

        if (dto.chatType === 'community' && dto.communityId) {
            const joins = await this.communityJoinRepository.find({
                where: { community: { id: dto.communityId } },
                relations: ['user'],
            });

            usersToAdd = joins.map(join => ({
                channel: saved,
                user: { id: join.user.id }
            }));
        }

        if (usersToAdd.length) {
            const chatUsers = this.chatUserRepository.create(usersToAdd);
            await this.chatUserRepository.save(chatUsers);
        }

        return saved;
    }


    async getUserChannels(userId: number) {
        return this.chatUserRepository.find({
            where: { user: { id: userId } },
            relations: ['channel', 'channel.community'],
        });
    }

    async sendMessage(dto: SendMessageDto) {
        // const msg = this.chatMessageRepository.create({
        //     channel: { id: dto.channelId },
        //     sender: { id: dto.senderId },
        //     content: dto.content,
        // });
        //
        // return this.chatMessageRepository.save(msg);
        const channel = await this.channelRepository.findOne({ where: { id: dto.channelId } });
        if (!channel) throw new NotFoundException('Channel not found');

        const message = this.chatMessageRepository.create({
            channel,
            sender: { id: dto.senderId },
            content: dto.content,
        });

        return this.chatMessageRepository.save(message);
    }

    async getMessages(channelId: number, userId: number) {
        const channel = await this.channelRepository.findOne({
            where: { id: channelId },
        });

        if (!channel) {
            throw new NotFoundException('Channel not found.');
        }

        const isParticipant = await this.chatUserRepository.findOne({
            where: {
                user: { id: userId },
                channel: { id: channelId },
            },
            relations: ['user', 'channel'],
        });

        if (!isParticipant) {
            throw new ForbiddenException('You are not a participant in this channel.');
        }

        return this.chatMessageRepository.find({
            where: { channel: { id: channelId } },
            order: { createdAt: 'ASC' },
            relations: ['sender'],
        });
    }





}
