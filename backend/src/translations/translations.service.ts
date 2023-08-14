import {Inject, Injectable} from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Translation} from "./entities/translation.entity";

@Injectable()
export class TranslationsService {
    constructor(
        @Inject('TRANSLATION_REPOSITORY')
        private translationRepository: Repository<Translation>
    ) {}

    async create(createTranslationDto: CreateTranslationDto): Promise<any> {
        try {
            const translation = await this.translationRepository.create(createTranslationDto);

            await this.translationRepository.save(translation);

            return await this.findOne(translation.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, args = {}): Promise<any> {
        let [data, total] = await this.translationRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            ...args
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };
    }

    async findOne(id: number): Promise<any> {
        try {
            return await this.translationRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Post Not Found'
                };
            }
        }
    }

    async findOneWhere(args: {}): Promise<any> {
        try {
            return await this.translationRepository.findOneOrFail({
                ...args
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Translation Not Found'
                };
            }
        }
    }

    async update(id: number, updateTranslationDto: UpdateTranslationDto): Promise<any> {
        try {
            const translation = await this.findOne(id);

            if (translation.error) {
                return translation;
            }

            await this.translationRepository.update(id, updateTranslationDto);

            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async remove(id: number): Promise<any> {
        const translation = await this.findOne(id);

        if (translation.error) {
            return translation;
        }

        return await this.translationRepository.delete(id);
    }
}
