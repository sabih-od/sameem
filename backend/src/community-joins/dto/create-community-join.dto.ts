import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateCommunityJoinDto {
  user_id: number;
  community_id: number;
  status: number; 
}
