import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePaymentIntentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 300 })
    amount: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'sub_dhfksdhkfsd' })
    subscription_id: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'sub_dhfksdhkfsd' })
    package_name: string


}