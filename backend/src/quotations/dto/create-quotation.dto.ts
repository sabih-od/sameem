import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateQuotationDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Daily Quotation' })
    title: string;

    @IsNotEmpty()
    @ApiProperty({ example: '"Daily Quotation Description"' })
    description: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'John Doe' })
    author: string;

    @ApiProperty({ example: 'https://localhost/quotations/audios/audio.wav' })
    audio: string;

    created_at: string;
}
