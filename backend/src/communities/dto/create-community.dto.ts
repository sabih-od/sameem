import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommunityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'NestJS Developers' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'A group to learn and share NestJS content', required: false })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'nestjs-community.jpg', required: false })
  image?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 4, description: 'ID of the user creating the community', required: false })
  created_by?: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty({ example: [1, 3], description: 'Array of reason IDs', required: false })
  reason_ids?: number[];

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 2, description: 'ID of the community category', required: false })
  community_category_id?: number;
}
