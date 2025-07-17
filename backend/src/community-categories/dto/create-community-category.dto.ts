import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommunityCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'abc' })
  name: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image file for the community category',
  })
  image: any;
}
