import {Inject, Injectable} from '@nestjs/common';
import { CreateUserPostHistoryDto } from './dto/create-user_post_history.dto';
import { UpdateUserPostHistoryDto } from './dto/update-user_post_history.dto';
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";
import {UserPostHistory} from "./entities/user_post_history.entity";

@Injectable()
export class UserPostHistoriesService {
    constructor(
        @Inject('USER_POST_HISTORY_REPOSITORY')
        private userPostHistoryRepository: Repository<UserPostHistory>,
    ) {}
    async create(createUserPostHistoryDto: CreateUserPostHistoryDto): Promise<any> {
        try {
            const user_post_history = await this.userPostHistoryRepository.create(createUserPostHistoryDto);

            await this.userPostHistoryRepository.save(user_post_history);

            return await this.findOne(user_post_history.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {
        const [data, total] = await this.userPostHistoryRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC'
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

    async findOne(id: number): Promise<any> {
        try {
            return await this.userPostHistoryRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'User Post History Not Found'
                };
            }
        }
    }

    async update(id: number, updateUserPostHistoryDto: UpdateUserPostHistoryDto): Promise<any> {
        try {
            const user_post_history = await this.findOne(id);

            if (user_post_history.error) {
                return user_post_history;
            }

            await this.userPostHistoryRepository.update(user_post_history.id, updateUserPostHistoryDto);

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
        const user_post_history = await this.findOne(id);

        if (user_post_history.error) {
            return user_post_history;
        }

        return await this.userPostHistoryRepository.delete(user_post_history.id);
    }
}
