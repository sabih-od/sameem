import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommunityCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'abc' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'url' })
  image: string;
}
