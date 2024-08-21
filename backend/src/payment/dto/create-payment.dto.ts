import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'usd' })
    currency: string;

    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    amount: number;


}
