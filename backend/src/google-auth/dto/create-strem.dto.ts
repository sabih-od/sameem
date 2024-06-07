import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStreamDto {
    @IsOptional()
    @IsString()
    stream_name?: string;

    @IsOptional()
    @IsString()
    stream_description?: string;

    @IsNotEmpty()
    @IsString()
    auth_token: string;

    @IsOptional()
    @IsString()
    stream_url?: string;

    @IsOptional()
    @IsString()
    stream_sharing_url?: string;

    @IsNotEmpty()
    @IsString()
    broad_cast_id: string

    created_at?: string;
}