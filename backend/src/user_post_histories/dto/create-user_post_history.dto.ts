import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserPostHistoryDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    post_id: number;

    created_at: string;
}
