import { DataSource } from 'typeorm';
import {Stream} from "./entities/stream.entity";

export const streamProviders = [
    {
        provide: 'STREAM_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Stream),
        inject: ['DATA_SOURCE'],
    },
];
