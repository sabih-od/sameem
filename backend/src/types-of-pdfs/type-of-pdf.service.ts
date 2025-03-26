import { Inject, Injectable } from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError, Repository } from "typeorm";
import { TypeOfPdf } from "./entities/type-of-pdf.entity";
import { CreateTypeOfPDFDto } from "./dto/type-of-pdf.dto";

@Injectable()
export class TypeOfPdfService {
    constructor(
        @Inject('TYPE_OF_PDF_REPOSITORY')
        private typeOfPdfRepository: Repository<TypeOfPdf>,
    ) { }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        let [data, total] = await this.typeOfPdfRepository.findAndCount({
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

    async create(createFaqDto: CreateTypeOfPDFDto): Promise<any> {
        try {
            const type = await this.typeOfPdfRepository.create(createFaqDto);

            await this.typeOfPdfRepository.save(type);

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
            return await this.typeOfPdfRepository.findOneOrFail({
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