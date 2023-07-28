import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    module: string;

    @Column({type: 'int'})
    module_id: number;

    @Column({type: 'varchar', nullable: true})
    sub_module: string;

    @Column({type: 'text'})
    url: string;

    @Column({type: 'varchar', nullable: true})
    created_at: string;
}
