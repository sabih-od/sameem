import { DataSource } from 'typeorm';
import {Quotation} from "./entities/quotation.entity";

export const quotationProviders = [
    {
        provide: 'QUOTATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Quotation),
        inject: ['DATA_SOURCE'],
    },
];
