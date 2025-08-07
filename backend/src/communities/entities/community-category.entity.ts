import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CommunityCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;
}
