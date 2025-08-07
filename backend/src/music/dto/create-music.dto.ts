import { ApiProperty } from '@nestjs/swagger';

export class CreateMusicDto {
    @ApiProperty({ example: 'Let It Be' })
    title: string;

    @ApiProperty({ example: 'A classic Beatles song released in 1970.' })
    description: string;

    @ApiProperty({
        type: 'string',
        format: 'binary',
        description: 'Upload image file',
    })
    image: any;

    @ApiProperty({
        type: 'string',
        format: 'binary',
        description: 'Upload audio file',
    })
    audio: any;

    @ApiProperty({ example: 1 })
    categoryId: number;
}
