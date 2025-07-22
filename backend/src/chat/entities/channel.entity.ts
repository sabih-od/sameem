import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Community } from '../../communities/entities/communities.entity';
import { ChatUser } from './chat-user.entity';
import { ChatMessage } from './chat-message.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Channel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: ['private', 'community'] })
    chatType: 'private' | 'community';

    @ManyToOne(() => Community, { nullable: true })
    community: Community;

    @ManyToOne(() => User)
    creator: User; // 👈 this was missing!

    @OneToMany(() => ChatUser, (cu) => cu.channel)
    participants: ChatUser[];

    @OneToMany(() => ChatMessage, (msg) => msg.channel)
    messages: ChatMessage[];
}
