import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFaqDto {
    @IsNotEmpty()
    @ApiProperty({example: 'What is the capital of France?'})
    question: string

    @IsNotEmpty()
    @ApiProperty({example:'the capital of france is Paris'})
    answer:string

    created_at: string;

    last_updated: string;
}
