import { ApiProperty } from '@nestjs/swagger';

export class CreateMusicCategoryDto {
    @ApiProperty({ type: String, description: 'Category name' })
    name: string;

    // @ApiProperty({ type: String, required: false })
    // description?: string;

    @ApiProperty({
        type: 'string',
        format: 'binary',
        required: false,
    })
    image?: any;
}
