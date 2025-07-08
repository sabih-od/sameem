import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Reason } from 'src/reasons/entities/reason.entity';
import { CommunityCategory } from './community-category.entity';

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'longtext' })
  description: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  created_by: User;

  @ManyToMany(() => Reason, { nullable: true })
  @JoinTable({
    name: 'community_reasons',
    joinColumn: { name: 'community_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'reason_id', referencedColumnName: 'id' },
  })
  reasons: Reason[];

  @ManyToOne(() => CommunityCategory, { nullable: true })
  @JoinColumn({ name: 'community_category_id' })
  community_category: CommunityCategory;
}
