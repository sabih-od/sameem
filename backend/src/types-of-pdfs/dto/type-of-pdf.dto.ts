import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeOfPDFDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Is this a simple title?' })
    title: string;

    @ApiProperty({ example: 'Is this an simple arabic title?' })
    arb_title: string;

    @ApiProperty({ example: 'Is this an example question?' })
    pdf_url: string;

    @ApiProperty({ example: 'Is this an example question?' })
    type_id: number;
}
