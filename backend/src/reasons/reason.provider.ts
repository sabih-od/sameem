import { DataSource } from 'typeorm';
import { Reason } from './entities/reason.entity';


export const reasonProviders = [
    {
        provide: 'REASON_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Reason),
        inject: ['DATA_SOURCE'],
    },
];
