import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    category_id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', nullable: true })
    url: string;

    @Column({ type: 'varchar', nullable: true })
    date: string;

    @Column({ type: 'varchar', nullable: true })
    time: string;

    @Column({ type: 'text', nullable: true })
    video: string;

    @Column({ type: 'text', nullable: true })
    audio: string;

    @Column({ type: 'text', nullable: true })
    image: string;

    @Column({ type: 'text', nullable: true })
    pdf: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
