import {
    IsOptional,
    IsString,
    IsArray,
    IsNumber,
    IsInt,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UpdateCommunityDto {
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional({ type: String, format: 'binary' })
    @IsOptional()
    @IsString()
    image?: string;

    @ApiPropertyOptional({ type: [Number] })
    @IsOptional()
    @Transform(({ value }) => {
        if (Array.isArray(value)) return value.map(Number);
        if (typeof value === 'string') return value.split(',').map(Number);
        return [];
    })
    @IsArray()
    @IsInt({ each: true })
    reason_ids?: number[];

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @Transform(({ value }) => Number(value))
    @IsNumber()
    community_category_id?: number;
}
