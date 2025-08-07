import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Faq {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    question: string;

    @Column({ type: 'text', nullable: true })
    answer: string;

    @Column({ type: 'text', nullable: true })
    created_at: string;
}
