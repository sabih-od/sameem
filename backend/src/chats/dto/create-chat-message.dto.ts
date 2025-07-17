import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatMessageDto {
  @ApiProperty({ example: 2 })
  @IsNumber()
  chat_id: number;

  @ApiProperty({ example: 4 })
  @IsNumber()
  sender_id: number;

  @ApiProperty({ example: 'Hello! This is a test message.' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
