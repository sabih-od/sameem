import {Inject, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {Media} from "../media/entities/media.entity";
import {Category} from "../categories/entities/category.entity";

@Injectable()
export class PostsService {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<Post>,
        @Inject('MEDIA_REPOSITORY')
        private mediaRepository: Repository<Media>,
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) {}

    async create(createPostDto: CreatePostDto): Promise<any> {
        try {
            const post = await this.postRepository.create(createPostDto);

            await this.postRepository.save(post);

            return await this.findOne(post.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, args = {}): Promise<any> {
        let [data, total] = await this.postRepository.findAndCount({
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
            return await this.postRepository.findOneOrFail({
                where: {
                    id: id
                },
                relations: ['images']
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Post Not Found'
                };
            }
        }
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<any> {
        try {
            const post = await this.findOne(id);

            if (post.error) {
                return post;
            }

            await this.postRepository.update(id, updatePostDto);

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
        const post = await this.findOne(id);

        if (post.error) {
            return post;
        }

        return await this.postRepository.delete(id);
    }

    async findAllByCategory(id: number, page: number = 1, limit: number = 10, args = {}): Promise<any> {

        let [data, total] = await this.postRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                categories: {
                    id: id
                }
            }
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };
    }
}
