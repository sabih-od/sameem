import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
