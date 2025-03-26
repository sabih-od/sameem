import { DataSource } from 'typeorm';
import {TypeOfPdf} from "./entities/type-of-pdf.entity";

export const typeProviders = [
    {
        provide: 'TYPE_OF_PDF_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeOfPdf),
        inject: ['DATA_SOURCE'],
    },
];
