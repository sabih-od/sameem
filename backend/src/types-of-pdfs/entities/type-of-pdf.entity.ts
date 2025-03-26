import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Type } from "../../types/entities/type.entity";
@Entity('type_of_pdfs')
export class TypeOfPdf {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar' })
    arb_title: string;
   
    @Column({ type: 'text', nullable: true })
    pdf_url: string;

    @Column({ type: 'int', nullable: true })
    type_id: number;

    @ManyToOne(() => Type, (type) => type.typeOfPdfs, { onDelete: "CASCADE" })
    @JoinColumn({ name: "type_id" }) 
    type: Type;
}
