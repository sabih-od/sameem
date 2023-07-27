import {Inject, Injectable} from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {Faq} from "./entities/faq.entity";
import {EntityNotFoundError, Not, QueryFailedError, Repository} from "typeorm";


@Injectable()
export class FaqService {
  constructor(
      @Inject('FAQ_REPOSITORY')
      private faqRepository: Repository<Faq>

  ) {
  }


  // async create(createFaqDto: CreateFaqDto): Promise<{ error: string | null, faq: Faq | null }> {
  //   try {
  //     // Your code to save the FAQ to the database
  //     const faq = await this.faqRepository.save(createFaqDto);
  //     return { error: null, faq };
  //   } catch (error) {
  //     return { error: 'An error occurred while creating the FAQ.', faq: null };
  //   }
  // }
  async create(createFaqDto: CreateFaqDto): Promise<{ error: string | null, faq: Faq | null }> {
    try {
      const faq = await this.faqRepository.save(createFaqDto);
      console.log('FAQ saved:', faq); // Add this log to check the saved FAQ data
      return { error: null, faq };
    } catch (error) {
      console.error('Error while creating FAQ:', error); // Add this log to check for any errors
      return { error: 'An error occurred while creating the FAQ.', faq: null };
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
          error: 'FAQ Not Found'
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
      return { success: false, message: faq.error, data: [] };
    }

    try {
      await this.faqRepository.delete(id);
      return { success: true, message: 'Faq deleted successfully!', data: [] };
    } catch (error) {
      return { success: false, message: 'An error occurred while deleting the Faq.', data: [] };
    }
  }
}















