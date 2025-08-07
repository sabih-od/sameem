import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Quotation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'varchar'})
    author: string;

    @Column({ type: 'text', nullable: true })
    audio: string;

    @Column({type: 'varchar', nullable: true})
    created_at: string;
}
