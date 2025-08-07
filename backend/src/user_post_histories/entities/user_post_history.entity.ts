import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserPostHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', nullable: true})
    user_id: number;

    @Column({type: 'int', nullable: true})
    post_id: number;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
