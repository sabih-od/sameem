import { DataSource } from 'typeorm';
import { MusicCategory } from './entities/music-category.entity';

export const musicCategoryProviders = [
    {
        provide: 'MUSIC_CATEGORY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(MusicCategory),
        inject: ['DATA_SOURCE'],
    },
];