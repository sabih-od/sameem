import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MusicCategory } from '../../music-category/entities/music-category.entity';

@Entity()
export class Music {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text' })
    image: string; // Could be a file path or URL

    @Column({ type: 'text' })
    audio: string; // File path or URL to audio file

    @ManyToOne(() => MusicCategory, category => category.musics, { eager: true })
    category: MusicCategory;
}
