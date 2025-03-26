import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Is this an example question?' })
    title: string;

    @ApiProperty({ example: 'Is this an example question?' })
    arb_title: string;
}
