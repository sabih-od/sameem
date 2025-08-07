import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Name' })
    name: string;

    @ApiProperty({ example: 'اسم' })
    name_ar: string;

    @ApiProperty({ example: 1 })
    parent_id: number;

    @ApiProperty({ example: 1 })
    is_active: number;

    @ApiProperty({ example: 'Image File?' })
    image: string;

    created_at: string;
}
