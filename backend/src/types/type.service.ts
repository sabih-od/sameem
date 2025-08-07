import { Inject, Injectable } from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError, Repository } from "typeorm";
import { Type } from "./entities/type.entity";
import { CreateTypeDto } from "./dto/create-type.dto";

@Injectable()
export class TypeService {
    constructor(
        @Inject('TYPE_REPOSITORY')
        private typeRepository: Repository<Type>,
    ) { }

    async findAll(page: number = 1, limit: number = 10,args: {} = {order: {created_at: 'DESC'}}): Promise<any> {
        let [data, total] = await this.typeRepository.findAndCount({
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

    async create(createFaqDto: CreateTypeDto): Promise<any> {
        try {
            const type = await this.typeRepository.create(createFaqDto);

            await this.typeRepository.save(type);

            return await this.findOne(type.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findOne(id: number): Promise<any> {
        try {
            return await this.typeRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Type Not Found'
                };
            }
        }
    }
}