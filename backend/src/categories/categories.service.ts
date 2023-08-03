import {Inject, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Category} from "./entities/category.entity";

@Injectable()
export class CategoriesService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>,
    ) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<any> {
        try {
            const category = await this.categoryRepository.create(createCategoryDto);

            await this.categoryRepository.save(category);

            return await this.findOne(category.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, args: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        const [data, total] = await this.categoryRepository.findAndCount({
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
            return await this.categoryRepository.findOneOrFail({
                where: {
                    id: id
                },
                relations: ['posts', 'parent', 'children']
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Category Not Found'
                };
            }
        }
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
        try {
            const category = await this.findOne(id);

            if (category.error) {
                return category;
            }

            await this.categoryRepository.update(category.id, updateCategoryDto);

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
        const category = await this.findOne(id);

        if (category.error) {
            return category;
        }

        return await this.categoryRepository.delete(category.id);
    }
}
