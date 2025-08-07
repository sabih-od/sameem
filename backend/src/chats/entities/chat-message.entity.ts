import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Chat } from './chat.entity';
import { User } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('chat_messages')
export class ChatMessage {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 4 })  
  @ManyToOne(() => Chat)
  @JoinColumn({ name: 'chat_id' })
  chat: Chat;

  @ApiProperty({ example: 2 })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ApiProperty({ example: 'Hello, how are you?' })
  @Column({ type: 'text' })
  content: string;

  @ApiProperty({ example: '2025-07-14T10:30:00Z' })
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
