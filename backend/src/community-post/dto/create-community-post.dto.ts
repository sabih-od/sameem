import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommunityPostDto {
  @IsNumber()
  @ApiProperty({ example: 1 })
  community_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'This is a sample post' })
  text: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'image.jpg', required: false })
  image?: string;
}
