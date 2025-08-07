import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCommunityPostDto {
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ example: 1 })
  community_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'This is a sample post' })
  text: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({ example: 'image.jpg', required: false })
  // image?: string;

  @IsOptional()
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Community Post image file to upload',
    required: false,
  })
  image?: any;
}
