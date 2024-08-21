import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Basic Plan' })
    @IsString()
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: 29.99 })
    @IsNumber()
    price: number;

    @IsOptional()
    @ApiProperty({ example: 'This is a basic plan' })
    @IsString()
    description?: string;
}
