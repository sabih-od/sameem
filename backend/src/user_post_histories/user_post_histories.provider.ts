import { DataSource } from 'typeorm';
import {UserPostHistory} from "./entities/user_post_history.entity";

export const userPostHistoryProviders = [
    {
        provide: 'USER_POST_HISTORY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserPostHistory),
        inject: ['DATA_SOURCE'],
    },
];
