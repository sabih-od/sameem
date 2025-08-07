import {Inject, Injectable} from '@nestjs/common';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { UpdateQuotationDto } from './dto/update-quotation.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {Quotation} from "./entities/quotation.entity";

@Injectable()
export class QuotationsService {
    constructor(
        @Inject('QUOTATION_REPOSITORY')
        private quotationRepository: Repository<Quotation>,
    ) {}

    async create(createQuotationDto: CreateQuotationDto): Promise<any> {
        try {
            const quotation = await this.quotationRepository.create(createQuotationDto);

            await this.quotationRepository.save(quotation);

            return await this.findOne(quotation.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10, args: {} = {}): Promise<any> {
        const [data, total] = await this.quotationRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {created_at: 'DESC'},
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

    async findOne(id: number, args: {} = {}): Promise<any> {
        try {
            return await this.quotationRepository.findOneOrFail({
                where: {
                    id: id
                },
                ...args
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Quotation Not Found'
                };
            }
        }
    }

    async update(id: number, updateQuotationDto: UpdateQuotationDto): Promise<any> {
        try {
            const quotation = await this.findOne(id);

            if (quotation.error) {
                return quotation;
            }

            await this.quotationRepository.update(quotation.id, updateQuotationDto);

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
        const quotation = await this.findOne(id);

        if (quotation.error) {
            return quotation;
        }

        return await this.quotationRepository.delete(quotation.id);
    }
}
