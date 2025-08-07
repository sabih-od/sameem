import {Inject, Injectable} from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Media} from "./entities/media.entity";
import {deleteFileFromUploads} from "../helpers/helper";

@Injectable()
export class MediaService {
    constructor(
        @Inject('MEDIA_REPOSITORY')
        private mediaRepository: Repository<Media>,
    ) {}

    async create(createMediaDto: CreateMediaDto): Promise<any> {
        try {
            const media = await this.mediaRepository.create(createMediaDto);

            await this.mediaRepository.save(media);

            return await this.findOne(media.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, where_object = {}): Promise<any> {
        let [data, total] = await this.mediaRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                created_at: 'DESC'
            },
            ...where_object
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
            return await this.mediaRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Media Not Found'
                };
            }
        }
    }

    async update(id: number, updateMediaDto: UpdateMediaDto): Promise<any> {
        try {
            const media = await this.findOne(id);

            if (media.error) {
                return media;
            }

            await this.mediaRepository.update(media.id, updateMediaDto);

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
        const media = await this.findOne(id);

        if (media.error) {
            return media;
        }

        await deleteFileFromUploads(process.env.APP_URL + ':' + process.env.PORT, media.url);

        return await this.mediaRepository.delete(media.id);
    }
}
