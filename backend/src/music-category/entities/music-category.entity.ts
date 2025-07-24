import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Music } from '../../music/entities/music.entity';

@Entity()
export class MusicCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column({ nullable: true })
    // description?: string;

    @Column({ type: 'text', nullable: true })
    image?: string;
    
    @OneToMany(() => Music, music => music.category)
    musics: Music[];
}
