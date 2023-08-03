import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Media} from "../../media/entities/media.entity";
import {Category} from "../../categories/entities/category.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

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

    //relations
    @OneToMany(type => Media, media => media.post)
    images: Media[];

    @ManyToMany(type => Category, category => category.posts)
    @JoinTable({
        name: 'category_posts',
    })
    categories: Category[];
}
