import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'john@example.com' })
    email: string;


    @ApiProperty({ example: "3u93nds9" })
    payment_method?: string;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

}
