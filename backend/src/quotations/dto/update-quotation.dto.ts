import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateQuotationDto } from './create-quotation.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateQuotationDto extends PartialType(CreateQuotationDto) {
    @ApiProperty({ example: 'Daily Quotation' })
    title: string;

    @ApiProperty({ example: '"Daily Quotation Description"' })
    description: string;

    @ApiProperty({ example: 'John Doe' })
    author: string;

    created_at: string;
}
