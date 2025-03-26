import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { TypeOfPdf } from "../../types-of-pdfs/entities/type-of-pdf.entity";

@Entity('types')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar' })
    arb_title: string;
   
    @OneToMany(() => TypeOfPdf, (typeOfPdf) => typeOfPdf.type)
    typeOfPdfs: TypeOfPdf[];
}
