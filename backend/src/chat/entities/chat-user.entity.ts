import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Channel } from './channel.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class ChatUser {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Channel)
    channel: Channel;

    @ManyToOne(() => User)
    user: User;
}
