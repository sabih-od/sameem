import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streams')
export class Stream {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  stream_name: string;

  @Column({ type: 'text', nullable: true })
  stream_description: string;

  @Column({ type: 'text', nullable: true })
  auth_token: string;

  @Column({ length: 255, nullable: true })
  stream_url: string;

  @Column({ length: 255, nullable: true })
  stream_sharing_url: string;

  @Column({ length: 255, nullable: true })
  created_at: string;

  @Column({ type: 'int', nullable: true })
  broad_cast_id: string;

  @Column({ length: 255, nullable: true })
  youtube_api_key: string;

  @Column({ length: 255, nullable: true })
  youtube_channel_id: string;
}
