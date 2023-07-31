import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string;

    @Column({ type: 'int', nullable: true })
    parent_id: number;

    @Column({ type: 'text', nullable: true })
    created_at: string;

    //relations
    @OneToMany(type => Category, category => category.parent)
    children: Category[];

    @ManyToOne(type => Category, category => category.children)
    @JoinColumn({ name: "parent_id" })
    parent: Category;

    @ManyToMany(type => Post, post => post.categories)
    @JoinTable({
        name: 'category_posts',
    })
    posts: Post[];
}
