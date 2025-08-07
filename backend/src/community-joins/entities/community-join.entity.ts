import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
  ManyToOne, JoinColumn
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Community } from 'src/communities/entities/communities.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('community_joins')
export class CommunityJoin {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ example: { id: 5, name: 'Arabella' }, description: 'User who joined the community' })
  user: User;

  @ManyToOne(() => Community)
  @JoinColumn({ name: 'community_id' })
  @ApiProperty({ example: { id: 3, name: 'NestJS Devs' }, description: 'Community being joined' })
  community: Community;

  @CreateDateColumn()
  @ApiProperty({ example: '2025-07-12T10:00:00.000Z' })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: '2025-07-12T11:00:00.000Z' })
  updated_at: Date;
}