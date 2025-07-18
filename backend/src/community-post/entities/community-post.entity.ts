import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Community } from 'src/communities/entities/communities.entity';

@Entity('community_posts')
export class CommunityPost {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Community)
  @ManyToOne(() => Community, (community) => community.community_posts)
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column('longtext')
  text: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
