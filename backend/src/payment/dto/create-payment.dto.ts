import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    customer_id: string;

    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    price_id: string;

}
