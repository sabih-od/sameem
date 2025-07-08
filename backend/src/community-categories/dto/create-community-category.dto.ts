import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommunityCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
