import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SendMessageDto {
    @ApiProperty()
    @IsNumber()
    channelId: number;

    @ApiProperty()
    @IsNumber()
    senderId: number;

    @ApiProperty()
    @IsNotEmpty()
    content: string;
}
