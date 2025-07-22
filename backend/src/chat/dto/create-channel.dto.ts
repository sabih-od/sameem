import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsArray } from 'class-validator';

export class CreateChannelDto {
    @ApiProperty({ enum: ['private', 'community'] })
    @IsEnum(['private', 'community'])
    chatType: 'private' | 'community';

    @ApiProperty({ required: false, type: [Number] })
    @IsOptional()
    @IsArray()
    participantIds?: number[];

    @ApiProperty({ required: false })
    @IsOptional()
    communityId?: number;
}
