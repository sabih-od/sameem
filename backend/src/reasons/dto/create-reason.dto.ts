import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReasonDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
