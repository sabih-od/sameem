import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateCommunityJoinDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  community_id: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  status: number;
}
