import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Community } from 'src/communities/entities/communities.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('chats')
export class Chat {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'individual', enum: ['individual', 'community'] })
  @Column()
  type: 'individual' | 'community';

  @ApiProperty({ example: 2, nullable: true, description: 'Only for community chats' })
  @ManyToOne(() => Community, { nullable: true })
  @JoinColumn({ name: 'community_id' })
  community?: Community;
}
