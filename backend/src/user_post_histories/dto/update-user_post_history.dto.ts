import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserPostHistoryDto } from './create-user_post_history.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateUserPostHistoryDto extends PartialType(CreateUserPostHistoryDto) {
    @ApiProperty({ example: 1 })
    user_id: number;

    @ApiProperty({ example: 1 })
    post_id: number;

    created_at: string;
}
