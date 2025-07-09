import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReasonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Simpl Desc?' })
  description: string;
}
