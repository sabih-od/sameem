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
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Reason } from 'src/reasons/entities/reason.entity';
import { CommunityCategory } from './community-category.entity';

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'NestJS Developers' })
  name: string;

  @Column({ nullable: true, type: 'longtext' })
  @ApiProperty({ example: 'A community for learning NestJS and sharing knowledge', required: false })
  description: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'nestjs-community.png', required: false })
  image: string;

  @CreateDateColumn()
  @ApiProperty({ example: '2025-07-12T10:00:00.000Z' })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: '2025-07-12T12:00:00.000Z' })
  updated_at: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  @ApiProperty({
    example: { id: 7, name: 'Arabella' },
    description: 'User who created this community',
    required: false,
  })
  created_by: User;

  @ManyToMany(() => Reason, { nullable: true })
  @JoinTable({
    name: 'community_reasons',
    joinColumn: { name: 'community_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'reason_id', referencedColumnName: 'id' },
  })
  @ApiProperty({
    example: [
      { id: 1, description: 'Learning Purpose' },
      { id: 2, description: 'Interest Group' },
    ],
    required: false,
  })
  reasons: Reason[];

  @ManyToOne(() => CommunityCategory, { nullable: true })
  @JoinColumn({ name: 'community_category_id' })
  @ApiProperty({
    example: { id: 3, name: 'Education' },
    description: 'Category of the community',
    required: false,
  })
  community_category: CommunityCategory;
}
