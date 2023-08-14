import { DataSource } from 'typeorm';
import {Translation} from "./entities/translation.entity";

export const translationProviders = [
    {
        provide: 'TRANSLATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Translation),
        inject: ['DATA_SOURCE'],
    },
];
