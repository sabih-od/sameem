import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'john@example.com' })
    email: string;


    @IsNotEmpty()
    @ApiProperty({ example: "xyz" })
    payment_method: string;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

}
