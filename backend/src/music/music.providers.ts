import { DataSource } from 'typeorm';
import { Music } from './entities/music.entity';
import {MusicCategory} from "../music-category/entities/music-category.entity";

export const musicProviders = [
    {
        provide: 'MUSIC_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Music),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'MUSIC_CATEGORY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(MusicCategory),
        inject: ['DATA_SOURCE'],
    },
];
