import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reason {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  description: string;
}
