import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class CreateCommunityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'NestJS Developers' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'A group to learn and share NestJS content',
    required: false,
  })
  description?: string;

  @IsOptional()
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Community image file to upload',
    required: false,
  })
  image?: any;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @ApiProperty({
    example: 4,
    description: 'ID of the user creating the community',
    required: false,
  })
  created_by?: number;

  @IsOptional()
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value.map(Number);       // reason_ids[]=1&reason_ids[]=2
    if (typeof value === 'string') return value.split(',').map(Number); // reason_ids=1,2
    return [];
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty({
    example: [1, 3],
    description: 'Array of reason IDs',
    required: false,
    type: [Number],
  })
  reason_ids?: number[];

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @ApiProperty({
    example: 2,
    description: 'ID of the community category',
    required: false,
  })
  community_category_id?: number;
}
