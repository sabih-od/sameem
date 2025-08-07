import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty({ example: 'Name' })
    name: string;

    @ApiProperty({ example: 'اسم' })
    name_ar: string;

    @ApiProperty({ example: 1 })
    parent_id: number;

    @ApiProperty({ example: 'Image File?' })
    image: string;

    @ApiProperty({ example: 1 })
    is_active: number;
}
