import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateFaqDto } from './create-faq.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateFaqDto extends PartialType(CreateFaqDto) {

    @IsNotEmpty()
    @ApiProperty({example:'What is the capital of France?'})
    question: string

    @IsNotEmpty()
    @ApiProperty({example:'the capital of france is Paris'})
    answer: string
}
