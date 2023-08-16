import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entities/post.entity";

@Entity()
export class Translation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    module: string;

    @Column({ type: 'int' })
    module_id: number;

    @Column({ type: 'int' })
    language_id: number;

    @Column({ type: 'text' })
    key: string;

    @Column({ type: 'text' })
    value: string;

    @ManyToOne(() => Post, post => post.translations)
    @JoinColumn({ name: 'module_id', referencedColumnName: 'id' }) // specify the join column
    module_relation: Post;
}
