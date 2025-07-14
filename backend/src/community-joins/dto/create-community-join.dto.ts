import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommunityJoinDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 5, description: 'ID of the user joining/leaving the community' })
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 3, description: 'ID of the community' })
  community_id: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  @ApiProperty({ example: 1, description: '1 = join, 0 = leave' })
  status: number;
}
