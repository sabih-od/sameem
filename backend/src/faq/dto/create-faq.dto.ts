import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFaqDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Is this an example question?' })
    question: string;

    @ApiProperty({ example: 'This is an example answer' })
    answer: string;

    created_at: string;
}
