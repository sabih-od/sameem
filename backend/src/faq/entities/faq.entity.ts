import {Column,Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Faq {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    question: string;

    @Column({type: 'text'})
    answer: string;
}
