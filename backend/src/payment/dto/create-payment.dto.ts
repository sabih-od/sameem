import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

}
