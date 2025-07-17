import { IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum ChatType {
  INDIVIDUAL = 'individual',
  COMMUNITY = 'community',
}

export class CreateChatDto {
  @ApiProperty({ example: 'individual', enum: ChatType })
  @IsEnum(ChatType)
  type: ChatType;

  @ApiProperty({ example: 5, description: 'Required only if type = community' })
  @IsOptional()
  @IsNumber()
  community_id?: number;
}
