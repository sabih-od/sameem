import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePaymentIntentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    amount: number;
}