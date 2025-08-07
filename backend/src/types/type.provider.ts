import { DataSource } from 'typeorm';
import {Type} from "./entities/type.entity";

export const typeProviders = [
    {
        provide: 'TYPE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Type),
        inject: ['DATA_SOURCE'],
    },
];
