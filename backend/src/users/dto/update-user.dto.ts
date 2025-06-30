import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @MaxLength(20)
    @ApiProperty({ example: 'cedric' })
    first_name: string;

    @MaxLength(20)
    @ApiProperty({ example: 'maya' })
    last_name: string;

    @ApiProperty({ example: '123456' })
    phone: string;

    role_id: number;

    fcm_token: string;

    blocked_users: string;

    blocked_at: string;
}
