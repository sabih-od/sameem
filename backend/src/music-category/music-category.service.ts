// src/music-category/music-category.service.ts
import { Inject, Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MusicCategory } from './entities/music-category.entity';
import { CreateMusicCategoryDto } from './dto/create-music-category.dto';

@Injectable()
export class MusicCategoryService {
    constructor(
        @Inject('MUSIC_CATEGORY_REPOSITORY')
        private categoryRepo: Repository<MusicCategory>,
    ) {}

    async create(dto: CreateMusicCategoryDto): Promise<MusicCategory> {
        console.log('Service DTO:', dto);

        if (!dto.name) {
            throw new BadRequestException('Category name is required');
        }

        const category = this.categoryRepo.create({
            name: dto.name,
            // description: dto.description,
            image: dto.image, // This will be the filename
        });

        return this.categoryRepo.save(category);
    }



    findAll(): Promise<MusicCategory[]> {
        return this.categoryRepo.find({ relations: ['musics'] });
    }

    async findOne(id: number): Promise<MusicCategory> {
        const category = await this.categoryRepo.findOne({
            where: { id },
            relations: ['musics'],
        });

        if (!category) {
            throw new NotFoundException(`Music category with ID ${id} not found`);
        }

        return category;
    }
}
