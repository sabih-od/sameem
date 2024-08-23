import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    email: string;


    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    payment_method: string;



}
