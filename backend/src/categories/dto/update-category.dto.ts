import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty({ example: 'Name' })
    name: string;

    @ApiProperty({ example: 1 })
    parent_id: number;
}
