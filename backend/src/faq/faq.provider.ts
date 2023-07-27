import { DataSource } from 'typeorm';
import {Faq} from "./entities/faq.entity";

export const faqProviders = [
    {
        provide: 'FAQ_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Faq),
        inject: ['DATA_SOURCE'],
    },
];
