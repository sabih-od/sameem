import { DataSource } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { ChatUser } from './entities/chat-user.entity';
import { ChatMessage } from './entities/chat-message.entity';
import {CommunityJoin} from "../community-joins/entities/community-join.entity";

export const chatProviders = [
    {
        provide: 'CHANNEL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Channel),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'CHAT_USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ChatUser),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'CHAT_MESSAGE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ChatMessage),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'COMMUNITY_JOIN_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CommunityJoin),
        inject: ['DATA_SOURCE'],
    },
];
