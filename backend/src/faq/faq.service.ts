import {Inject, Injectable} from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Faq} from "./entities/faq.entity";

@Injectable()
export class FaqService {
    constructor(
        @Inject('FAQ_REPOSITORY')
        private faqRepository: Repository<Faq>,
    ) {}

    async create(createFaqDto: CreateFaqDto): Promise<any> {
        try {
            const faq = await this.faqRepository.create(createFaqDto);

            await this.faqRepository.save(faq);

            return await this.findOne(faq.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        let [data, total] = await this.faqRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
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
            return await this.faqRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Faq Not Found'
                };
            }
        }
    }

    async update(id: number, updateFaqDto: UpdateFaqDto): Promise<any> {
        try {
            const faq = await this.findOne(id);

            if (faq.error) {
                return faq;
            }

            await this.faqRepository.update(id, updateFaqDto);

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
        const faq = await this.findOne(id);

        if (faq.error) {
            return faq;
        }

        return await this.faqRepository.delete(id);
    }
}
