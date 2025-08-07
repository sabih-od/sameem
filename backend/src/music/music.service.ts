import { Injectable , BadRequestException, NotFoundException} from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Music } from './entities/music.entity';
import { MusicCategory } from '../music-category/entities/music-category.entity';
import { CreateMusicDto } from './dto/create-music.dto';

@Injectable()
export class MusicService {
    constructor(
        @Inject('MUSIC_REPOSITORY')
        private musicRepo: Repository<Music>,

        @Inject('MUSIC_CATEGORY_REPOSITORY')
        private categoryRepo: Repository<MusicCategory>,
    ) {}

    async create(body: any, files: { image?: Express.Multer.File[]; audio?: Express.Multer.File[] }) {
        const { title, description, categoryId } = body;

        if (!title || !description || !categoryId) {
            throw new BadRequestException('Missing required fields');
        }

        // Check if music category exists
        const category = await this.categoryRepo.findOne({ where: { id: categoryId } });

        if (!category) {
            throw new NotFoundException(`Music category with ID ${categoryId} not found`);
        }

        const image = files.image?.[0]?.filename || null;
        const audio = files.audio?.[0]?.filename || null;

        const music = this.musicRepo.create({
            title,
            description,
            category,
            image,
            audio,
        });

        await this.musicRepo.save(music);

        return {
            message: 'Music uploaded successfully',
            data: music,
        };
    }

    findAll(): Promise<Music[]> {
        return this.musicRepo.find({ relations: ['category'] });
    }

    findOne(id: number): Promise<Music> {
        return this.musicRepo.findOne({
            where: { id },
            relations: ['category'],
        });
    }


    async getByCategory(categoryId: number) {
        const category = await this.categoryRepo.findOne({ where: { id: categoryId } });
        if (!category) throw new NotFoundException('Category not found');

        return this.musicRepo.find({
            where: { category: { id: categoryId } },
            relations: ['category'],
        });
    }

    async update(id: number, data: any, files: any) {
        const music = await this.musicRepo.findOne({ where: { id } });
        if (!music) throw new NotFoundException('Music not found');

        if (data.title) music.title = data.title;
        if (data.description) music.description = data.description;

        if (data.categoryId) {
            const category = await this.categoryRepo.findOne({
                where: { id: +data.categoryId },
            });
            if (!category) throw new NotFoundException('Category not found');
            music.category = category;
        }

        if (files.image?.[0]) music.image = files.image[0].filename;
        if (files.audio?.[0]) music.audio = files.audio[0].filename;

        return this.musicRepo.save(music);
    }

}
