import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateCommunityDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  created_by?: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  reason_ids?: number[];

  @IsOptional()
  @IsNumber()
  community_category_id?: number;
}
